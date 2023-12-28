import { useState } from "react";
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

const photos = [
  { src: "/assets/images/skate.jpeg", width: 1179, height: 2001 },
  { src: "/assets/images/skate_2.jpeg", width: 1200, height: 900 },
  { src: "/assets/images/skate_4.jpg", width: 626, height: 599 },
  { src: "/assets/images/speacker_2.jpeg", width: 768, height: 1024 },
  { src: "/assets/images/travel.jpeg", width: 1194, height: 1942 },
  { src: "/assets/images/travel_1.jpeg", width: 1200, height: 900 },
  { src: "/assets/images/travel_2.jpeg", width: 768, height: 1024 },
  { src: "/assets/images/travel_3.jpeg", width: 1195, height: 1458 },
  { src: "/assets/images/travel_4.jpeg", width: 1200, height: 1600 },
  { src: "/assets/images/travel_5.jpeg", width: 1200, height: 1371 },
  { src: "/assets/images/travel_6.jpeg", width: 768, height: 1024 },
  { src: "/assets/images/travel_7.jpeg", width: 768, height: 1024 },
  { src: "/assets/images/travel_8.jpeg", width: 1080, height: 1080 },
  { src: "/assets/images/photo.jpeg", width: 1200, height: 900 },
  { src: "/assets/images/photo_0.jpeg", width: 1080, height: 744 },
  { src: "/assets/images/photo_1.jpeg", width: 1080, height: 720 },
  { src: "/assets/images/photo_2.jpeg", width: 1024, height: 769 },
  { src: "/assets/images/photo_3.jpeg", width: 1200, height: 2133 },
  { src: "/assets/images/photo_4.jpeg", width: 1080, height: 720 },
  { src: "/assets/images/photo_5.jpeg", width: 1080, height: 1080 },
  { src: "/assets/images/photo_6.jpeg", width: 1098, height: 716 },
  { src: "/assets/images/reader.jpeg", width: 1080, height: 720 },
  { src: "/assets/images/cine.jpeg", width: 768, height: 1024 },
  {
    src: "assets/images/131f27c4-efdd-4e95-b525-284534562d1c.png",
    width: 768,
    height: 1024,
  },
  { src: "assets/images/1691529553031.jpeg", width: 1200, height: 821 },
  { src: "assets/images/20231027_075218.png", width: 1200, height: 676 },
  {
    src: "assets/images/260474a9-3187-45a5-90c2-1c29cb45a625.png",
    width: 1200,
    height: 900,
  },
  { src: "assets/images/F7OHA5-W8AA1P3I.jpeg", width: 1200, height: 675 },
  { src: "assets/images/F7OWRfEaUAA06BV.jpeg", width: 1200, height: 675 },
  { src: "assets/images/Flo0-VwXgAAesYz.jpeg", width: 480, height: 360 },
  { src: "assets/images/FullSizeRender.png", width: 1200, height: 966 },
  { src: "assets/images/IMG_0366.png", width: 1200, height: 900 },
  { src: "assets/images/IMG_0565.png", width: 768, height: 1057 },
  { src: "assets/images/IMG_0817.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_0943.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_1044.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_1986.png", width: 1200, height: 675 },
  { src: "assets/images/IMG_2194.png", width: 768, height: 906 },
  { src: "assets/images/IMG_2626.png", width: 1200, height: 934 },
  { src: "assets/images/IMG_2832.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_3422.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_3627.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_3976.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_4539.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_4790.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_4981.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_5024.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_5765.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_5982.png", width: 768, height: 934 },
  { src: "assets/images/IMG_6216.png", width: 768, height: 1171 },
  { src: "assets/images/IMG_6946.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_7034.png", width: 1200, height: 724 },
  { src: "assets/images/IMG_7100.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_7468.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_7650.png", width: 1200, height: 675 },
  { src: "assets/images/IMG_7819.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_7952.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_7972.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_8026.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_8129.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_8813.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_8882.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_9288.png", width: 768, height: 1024 },
  { src: "assets/images/IMG_9306.png", width: 768, height: 1365 },
  { src: "assets/images/IMG_9458.png", width: 768, height: 1024 },
  {
    src: "assets/images/f3d1181e-e4dc-4921-8596-3ff81aef895a.png",
    width: 1200,
    height: 900,
  },

  { src: "assets/images/IMG_2141.png", width: 1200, height: 900 },
  { src: "assets/images/IMG_2257.png", width: 768, height: 1216 },
  { src: "assets/images/IMG_2439.png", width: 768, height: 809 },
  { src: "assets/images/IMG_2532.png", width: 768, height: 818 },
  { src: "assets/images/IMG_2643.png", width: 768, height: 1216 },
  { src: "assets/images/present.png", width: 1200, height: 579 },
];
const photos_ = photos.sort(() => Math.random() - 0.5);

function Hobbies() {
  const [index, setIndex] = useState(-1);

  return (
    <DashboardLayout>
      <MDBox>
        <MDTypography variant="h4" fontWeight="regular" opacity={1}>
          INTERESTS AND HOBBIES
        </MDTypography>
        <MDTypography variant="body1" textTransform="none" opacity={0.7}>
          Outside of my professional life in geospatial data, I am a fervent
          travel enthusiast, capturing the globe through my camera&apos;s lens in
          search of fresh perspectives and hidden stories. Skating offers me a
          sense of freedom and fluid motion. On my motorbike, I embrace the thrill of
          discovering uncharted paths, each journey a blend of adventure and the
          joy of the open road, revealing stories.
        </MDTypography>
        <PhotoAlbum
          layout="masonry"
          photos={photos_}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos_}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Hobbies;
