import { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image from "next/image";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "/examples/Cards/BlogCards/SimpleBlogCard";

import { hobbiesConstant } from "/utils/constants";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#0000",
  border: "1px solid #000",
  boxShadow: 24,
};

function Hobbies() {
  const [modalData, setModalData] = useState(null);

  const handleOpen = (d) => setModalData(d);
  const handleClose = () => setModalData(null);

  return (
    <DashboardLayout>
      <MDBox mt={2}>
        <Grid container spacing={4}>
          {hobbiesConstant.map((element, k) => (
            <Grid key={k} item xs={4} mb={2}>
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
      <Modal
        open={modalData !== null}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "auto" }}>
          {modalData && modalData !== null && (
            <Image
              src={modalData.image}
              alt={modalData.title}
              width="auto"
              quality={100}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: "80vh",
              }}
            />
          )}
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default Hobbies;
