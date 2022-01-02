import { Grid, Paper, Button, Typography } from "@mui/material";
import React from "react";
import class1 from "../../../images/home images/carousel-class02.jpg";
import style from "./ClassCard.module.css";

const ClassCard = (props) => {
  const { id } = props.train;
  return (
    <>
      <Grid item sm={12} lg={4} xs={12} md={4}>
        <Paper
          className={style.paper}
          style={{ position: "relative" }}
          elevation={0}
        >
          <img style={{ width: "100%" }} src={class1} alt="" />
          <div className={style.cardstyle}>
            <Button variant="contained" sx={{ color: "#fff", mt: 2 }}>
              Details
            </Button>
          </div>
        </Paper>
        <Typography variant="h6">Training Name</Typography>
      </Grid>
    </>
  );
};

export default ClassCard;
