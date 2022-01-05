import { Grid, Paper, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./ClassCard.module.css";

const ClassCard = (props) => {
  const { image, classname, _id, tag } = props.train;
  return (
    <>
      <Grid item sm={12} lg={4} xs={12} md={4}>
        <Paper
          className={style.paper}
          style={{ position: "relative" }}
          elevation={0}
        >
          <img style={{ width: "100%" }} src={image} alt="" />
          <div className={style.cardstyle}>
            <Link to={`/classdetails/${_id}`}>
              <Button variant="contained" sx={{ color: "#fff", mt: 2 }}>
                Details
              </Button>
            </Link>
          </div>
        </Paper>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>{classname}</Typography>
        <Typography variant="body2">{tag}</Typography>
      </Grid>
    </>
  );
};

export default ClassCard;
