import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import sectionShape from "../../images/home images/section-title-shape.png";
import ClassCard from "./ClassCard/ClassCard";

const TrainingClass = () => {
  const [training, setTraining] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTraining(data));
  }, []);

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
          <Grid sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              quia! Lorem ipsum dolor sit ame consectetur adipisicing elit.
              Aliquid, quia!
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4} sx={{ py: 12 }}>
          {training.slice(1, 4).map((train) => (
            <ClassCard key={train.id} train={train}></ClassCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TrainingClass;
