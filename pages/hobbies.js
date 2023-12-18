import { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "/examples/Cards/BlogCards/SimpleBlogCard";
import { hobbiesConstant } from "/utils/constants";
import WrapImgsViewer from "/pagesComponents/hobbies/wrapImagesView";
function Hobbies() {
  const [modalData, setModalData] = useState(null);

  const handleOpen = (d) => setModalData(d);
  const handleClose = () => setModalData(null);

  return (
    <DashboardLayout>
      {modalData && (
        <WrapImgsViewer modalData={modalData} handleClose={handleClose} />
      )}
      <MDBox mt={2}>
        <Grid container spacing={4}>
          {hobbiesConstant.map((element, k) => (
            <Grid key={k} item md={4} xs={12} mb={2}>
              <SimpleBlogCard
                onClickImage={() => handleOpen(element)}
                image={element.image}
                title={element.title}
                description={element.description}
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Hobbies;
