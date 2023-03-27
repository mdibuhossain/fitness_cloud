import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectcourses } from "../../features/coursesSlice";
import sectionShape from "../../images/home images/section-title-shape.png";
import ClassCard from "./ClassCard/ClassCard";

const TrainingClass = () => {
  const training = useSelector(selectcourses);

  return (
    <div>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <img
          style={{ width: "30px", height: "30px" }}
          src={sectionShape}
          alt=""
        />
        <Typography
          sx={{
            color: "#f42828",
            textTransform: "uppercase",
            fontWeight: "bold",
            py: 1,
          }}
          variant="h4"
        >
          Top Training Classes
        </Typography>
        <Container>
          <Grid item sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
            <Typography variant="subtitle2">
              Below are some of the services & features found at Powerhouse Gyms worldwide. For services available in your area, please visit our locations page to find your gym's unique offerings.
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4} sx={{ py: 12 }}>
          {training.slice(1, 4).map((train) => (
            <ClassCard key={train._id} train={train}></ClassCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TrainingClass;
