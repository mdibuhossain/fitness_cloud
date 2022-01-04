import React from "react";
import { ChangeTitle } from "../../utilities/TabFunction";
import cover from "../../images/schedule/section-bg01.jpg";
import schedule from "../../images/schedule/scheduleChart.PNG";
import { Container, Grid, Typography } from "@mui/material";

const Schedule = () => {
  // call title function
  ChangeTitle("Schedule");
  const banner = {
    background: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width:"100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#fff",
  };
  return (
    <div>
      <div id="cover" style={banner}>
        <Container>
          <Typography 
            variant="h3"
            sx={{ textTransform: "uppercase", fontWeight: "bold", pb: 2 }}
          >
            Class <span style={{ color: "#f42828" }}>Schedule</span>
          </Typography>
          <Typography variant="body2">
            World is committed to making participation in the event <br /> a
            harassment free experience for everyone, regardless of level of
            experience.
          </Typography>
        </Container>
      </div>
      <Container>
      <Grid>
              <Grid sx={{py:8}} item lg={12} md={12} sm={12} xs={12}>
                  <img style={{width:"100%"}} src={schedule} alt="" />
              </Grid>
          </Grid>
      </Container>
    </div>
  );
};

export default Schedule;
