import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "./Carousel/Carousel";
import imagebox1 from "../../images/home images/image-box01.jpg";
import imagebox2 from "../../images/home images/image-box02.jpg";
import imagebox3 from "../../images/home images/image-box03.jpg";
import gallerythumb01 from "../../images/home images/gallery-thumb01.jpg";
import gallerythumb02 from "../../images/home images/gallery-thumb02.jpg";
import gallerythumb03 from "../../images/home images/gallery-thumb03.jpg";
import gallerythumb04 from "../../images/home images/gallery-thumb04.jpg";
import gallerythumb05 from "../../images/home images/gallery-thumb05.jpg";
import gallerythumb06 from "../../images/home images/gallery-thumb06.jpg";
import sideimage01 from "../../images/home images/side-image01.jpg";

import sectionShape from "../../images/home images/section-title-shape.png";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
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
            What is Roins ?
          </Typography>
          <Container>
            <Grid sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, quia! Lorem ipsum dolor sit ame consectetur adipisicing
                elit. Aliquid, quia!
              </Typography>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 2, textAlign: "center" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={0}>
                <img style={{ width: "100%" }} src={imagebox1} alt="" />
                <Box
                  sx={{ gap: 1 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ color: "#f42828" }} variant="body2">
                    07:00 -
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h6"
                    gutterBottom
                  >
                    Wake up
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid sx={{ my: 8 }} item xs={12} sm={12} md={4}>
              <Paper elevation={0}>
                <img style={{ width: "100%" }} src={imagebox2} alt="" />
                <Box
                  sx={{ gap: 1 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ color: "#f42828" }} variant="body2">
                    08:00 -
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h6"
                    gutterBottom
                  >
                    Work Out
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={0}>
                <img style={{ width: "100%" }} src={imagebox3} alt="" />
                <Box
                  sx={{ gap: 1 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ color: "#f42828" }} variant="body2">
                    09:00 -
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h6"
                    gutterBottom
                  >
                    Work
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{backgroundColor:"#f1f1f1"}} id="time">
        <Container sx={{ py: 10 , pb:14}}>
          <Grid container spacing={8}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div
                id="LocationField"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height:"100%"
                 
                }}
              >
                <Typography style={{ fontWeight: "bold",textTransform:"uppercase" }} variant="subtitle2">
                  Work out on our Way
                </Typography>
                <Typography style={{ fontWeight: "bold",color:"#f42828",textTransform:"uppercase" }} variant="h4">
                  Work out on our Way
                </Typography>
                <Typography sx={{ py: 2 ,mt:2}} variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quia soluta, quo recusandae asperiores corrupti repellendus nam doloribus cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quia soluta, quo recusandae asperiores corrupti repellendus nam doloribus cupiditate!
                </Typography>
               <div>
               <button className="slide-button">Check Time</button>
               </div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div style={{ position: "relative",textAlign:"right" }}>
                <img style={{ width: "90%"}} src={sideimage01} alt="" />
                <div
                  style={{
                    width: "70%",
                    height: "auto",
                    position: "absolute",
                    backgroundColor: "#000",
                    top: "20%",
                    color:"#fff"
                  }}
                >
                  <List>
                    <ListItem>
                      <ListItemText primary="Monday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Tuesday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Wednesday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Thursday" />
                      <ListItemText  sx={{color:"#f42828",textAlign:"right"}}primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Friday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Saturday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Sunday" />
                      <ListItemText sx={{color:"#f42828",textAlign:"right"}} primary="06:00 AM-21:00 PM" />
                    </ListItem>
                  </List>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        id="workoutway"
        style={{ backgroundColor: "#f42828", color: "#fff" }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            sx={{
              py: 8,
              pb:10,
              alignItems: "center",
            }}
          >
            <Grid item sm={12} lg={6} xs={12} md={6}>
              <div
                id="LocationField"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  Work out on our Way
                </Typography>
                <Typography sx={{ py: 2 }} variant="subtitle2">
                  Thousands of gyms. Zero Contracts
                </Typography>
                <TextField
                  fullWidth
                  color="warning"
                  style={{ backgroundColor: "#fff" }}
                  id="outlined-basic"
                  label="Enter postcode or Location"
                  variant="filled"
                />
              </div>
            </Grid>
            <Grid item sm={12} lg={6} xs={12} md={6}>
              <div id="imageGellary">
                <Grid container spacing={2}>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb01}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb02}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb03}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb04}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb05}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div>
                      <img
                        style={{ width: "100%" }}
                        src={gallerythumb06}
                        alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
