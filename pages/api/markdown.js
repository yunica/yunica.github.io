// pages/api/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const markdownDirectory = path.join(process.cwd(), "public", "markdown");

export default async function handler(req, res) {
  const filenames = fs.readdirSync(markdownDirectory);

  const markdownData = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(markdownDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      return {
        filename,
        ...data,
        contentHtml,
      };
    })
  );

  // Devuelve los datos en formato JSON
  res.status(200).json(markdownData);
}
