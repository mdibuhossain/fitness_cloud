import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { ChangeTitle } from "../../utilities/TabFunction";
import cover from "../../images/About images/page-header02.jpg";
import sectionShape from "../../images/home images/section-title-shape.png";
import equiment1 from "../../images/About images/equipment1.PNG";
import equiment2 from "../../images/About images/equipment2.PNG";
import equiment3 from "../../images/About images/equipment3.PNG";
import equiment4 from "../../images/About images/equipment4.PNG";
import team1 from "../../images/trainner/team-1.jpg";
import team2 from "../../images/trainner/team-2.jpg";
import team3 from "../../images/trainner/team-3.jpg";
import team4 from "../../images/trainner/team-4.jpg";
import signature from "../../images/About images/signature.png";
import sideimage from "../../images/About images/side-image10.png";

const About = () => {
  // call title function
  ChangeTitle("About Us");
  const banner = {
    background: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
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
            About <span style={{ color: "#f42828" }}>Fitness Cloud</span>
          </Typography>
          <Typography variant="body2">
            World is committed to making participation in the event <br /> a
            harassment free experience for everyone, regardless of level of
            experience.
          </Typography>
        </Container>
      </div>
      <div id="about">
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <img
            style={{ width: "30px", height: "30px" }}
            src={sectionShape}
            alt=""
          />
          <Typography variant="body2" sx={{ py: 1 }}>
            WELCOME FROM JAMES MILLER, FOUNDER & CEO
          </Typography>
          <Container>
            <Grid sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
              <Typography
                sx={{
                  color: "#f42828",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  py: 1,
                }}
                variant="h4"
              >
                PASSIONATE ABOUT HELPING YOU ACHIEVE YOUR GOALS
              </Typography>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 10 }}>
          <Grid container spacing={4}>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ pb: 4, textAlign: "justify" }} variant="body1">
                Family-owned and, we established Embody Fitness because we
                wanted to help people change their lives in a significant,
                positive and sustainable way. We know how difficult it can be to
                stick to new fitness regimes – to put yourself first. <br />{" "}
                <br /> With each challenge faced (work, travel, children, injury
                etc), your goals seem less and less achievable. It can appear to
                be an uphill and lonely struggle – almost too intimidating to
                even start.
              </Typography>
              <img style={{ width: "30%" }} src={signature} alt="" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img style={{ width: "100%" }} src={sideimage} alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "#f1f1f1" }} id="joinus">
        <Box sx={{ textAlign: "center", pt: 10 }}>
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
            Why join Us?
          </Typography>
          <Container>
            <Grid sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle2">
                World is committed to making participation in the event a
                harassment free experience for everyone, regardless.
              </Typography>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 10 }}>
          <Grid style={{ textAlign: "center" }} container spacing={4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={equiment1}
                  alt=""
                />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  We have heap of fun piece of equi to build down every inh of
                  your for body and from boom.
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={equiment2}
                  alt=""
                />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  ROWS OF CARDIO
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  We have heap of fun piece of equi to build down every inh of
                  your for body and from boom.
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={equiment3}
                  alt=""
                />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  HEART PUMPING
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  We have heap of fun piece of equi to build down every inh of
                  your for body and from boom.
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={equiment4}
                  alt=""
                />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  We have heap of fun piece of equi to build down every inh of
                  your for body and from boom.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div id="joinus">
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
            Personal Trainner
          </Typography>
          <Container>
            <Grid sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle2">
                World is committed to making participation in the event a
                harassment free experience for everyone, regardless.
              </Typography>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 10 }}>
          <Grid style={{ textAlign: "center" }} container spacing={4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper elevation={2}>
                <img style={{ width: "100%" }} src={team1} alt="" />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  Yoga Trainer
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper elevation={2}>
                <img style={{ width: "100%" }} src={team2} alt="" />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  Yoga Trainer
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper elevation={2}>
                <img style={{ width: "100%" }} src={team3} alt="" />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  Yoga Trainer
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Paper elevation={2}>
                <img style={{ width: "100%" }} src={team4} alt="" />
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  TONS OF EQUIPMENT
                </Typography>
                <Typography variant="body2" sx={{ py: 1 }}>
                  Yoga Trainer
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
