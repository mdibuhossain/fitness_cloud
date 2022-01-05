import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import cover from '../../images/home images/slide03.jpg';
import cover2 from '../../images/home images/help-light-img.jpg';
import ClassCard from "../TrainingClass/ClassCard/ClassCard";
import { ChangeTitle } from "../../utilities/TabFunction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectcourses, setCourses } from "../../features/coursesSlice";
import { useSelector } from "react-redux";

const TrainingServices = () => {
  // call title function
  ChangeTitle("Classes");
  const training = useSelector(selectcourses);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `http://localhost:5000/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)));
  }, []);

  const banner = {
    background: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#fff"
  }
  const banner2 = {
    background: `url(${cover2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#fff"
  }
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div id="cover" style={banner}
      >
        <Container>
          <Typography variant="h3" sx={{ textTransform: "uppercase", fontWeight: "bold", pb: 2 }}>Our <span style={{ color: "#f42828" }}>Classes</span></Typography>
          <Typography variant="body2">World is committed to making participation in the event <br /> a harassment free experience for everyone, regardless of level of experience.</Typography>
        </Container>
      </div>
      <div id="classes">
        <Container>
          <Grid container spacing={4} sx={{ py: 12 }}>
            {training.map((train) => (
              <ClassCard key={train.id} train={train}></ClassCard>
            ))}
          </Grid>
        </Container>
      </div>
      <div id="cover" style={banner2}
      >
        <Container style={{ color: "#000" }}>
          <Typography variant="h4" sx={{ textTransform: "uppercase", fontWeight: "bold", pb: 2 }}>HELPING YOU TO GO <br /> <span style={{ color: "#f42828" }}> SINCE 1971</span></Typography>
          <Typography sx={{ mb: 4 }} style={{ textAlign: "justify" }} variant="body2">World is committed to making participation in the event a harassment <br /> free experience for everyone, regardless of level of experience.</Typography>
          <div>
            <Link to="/contact">
              <button className="slide-button">Join Classes +</button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TrainingServices;
