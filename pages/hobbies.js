import { useState } from "react";
import MDBox from "/components/MDBox";
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
  { src: "/assets/images/skate_1.jpeg", width: 1197, height: 1775 },
  { src: "/assets/images/skate_2.jpeg", width: 1200, height: 900 },
  { src: "/assets/images/skate_3.png", width: 898, height: 1331 },
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
  { src: "/assets/images/moto_1.jpeg", width: 1200, height: 800 },
  { src: "/assets/images/cine.jpeg", width: 768, height: 1024 },
];
const photos_ = photos.sort(() => Math.random() - 0.5);

function Hobbies() {
  const [index, setIndex] = useState(-1);

  return (
    <DashboardLayout>
      <MDBox mt={1}>
        <PhotoAlbum layout="masonry" photos={photos_}  onClick={({ index }) => setIndex(index)} />
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
