import React, {useState} from "react";
import ImgsViewer from "react-images-viewer";

const WIDTH = 600;

const WrapImgsViewer = ({ modalData, handleClose }) => {
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  if (!modalData || !modalData.images || modalData.images.length === 0)
    return null;

  const images = modalData.images.map((i) => ({
    src: i.src,
  }));


  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <ImgsViewer
      imgs={images}
      isOpen={modalData !== null}
      onClose={handleClose}
      currImg={imgsViewerCurrent}
      onClickPrev={imgsViewerPrev}
      onClickNext={imgsViewerNext}
      backdropCloseable
    />
  );
};

export default WrapImgsViewer;
