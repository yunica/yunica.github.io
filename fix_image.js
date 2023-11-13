const sharp = require("sharp");
const fs = require("fs").promises; // Utiliza la versión promisificada de fs
const path = require("path");
const os = require("os");

const processImage = async (filePath, fileExtension) => {
  try {
    const metadata = await sharp(filePath).metadata();

    if (metadata.width > MIN_WIDTH) {
      const tempPath = path.join(os.tmpdir(), path.basename(filePath));

      switch (fileExtension.toLowerCase()) {
        case ".jpg":
        case ".jpeg":
          await sharp(filePath)
            .resize(MIN_WIDTH)
            .jpeg({ quality: 80 })
            .toFile(tempPath);
          console.log(`Processed jpg: ${filePath}`);
          break;

        case ".png":
          await sharp(filePath)
            .resize(MIN_WIDTH)
            .png({ compressionLevel: 6 })
            .toFile(tempPath);
          console.log(`Processed png: ${filePath}`);
          break;

        default:
          console.log(`Unsupported file type: ${fileExtension}`);
          break;
      }
      await fs.rename(tempPath, filePath);

    } else {
      console.log(`Image skipped (smaller than minimum width): ${filePath}`);
    }
  } catch (err) {
    console.error("Error processing image:", err);
  }
};

const processDirectory = async (folderPath) => {
  try {
    const files = await fs.readdir(folderPath);

    for (let file of files) {
      const filePath = path.join(folderPath, file);
      const fileExtension = path.extname(file);
      const fileName = path.basename(file, fileExtension);

      if ([".jpg", ".jpeg", ".png"].includes(fileExtension.toLowerCase())) {
        await processImage(filePath, fileExtension);
      }
    }
  } catch (err) {
    console.error("Error reading the directory:", err);
  }
};

const [, , folderPath] = process.argv;
const MIN_WIDTH = 1200;

if (!folderPath) {
  console.log("Usage: reduce-images <folderPath>");
  process.exit(1);
}

processDirectory(folderPath);
