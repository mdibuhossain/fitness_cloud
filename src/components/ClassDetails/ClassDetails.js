import React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";
import detailsBanner from "../../images/home images/detailscover.jpg";
import { ChangeTitle } from "../../utilities/TabFunction";
import { Box } from "@mui/system";
import ProgressBar from "@ramonak/react-progress-bar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectcourses } from "../../features/coursesSlice";
import { selectUser } from "../../features/userSlice";

const ClassDetails = (props) => {
  const { _id } = useParams();
  const course = useSelector(selectcourses);
  const user = useSelector(selectUser);
  const train = course.find(item => item._id === _id);
  console.log(train);
  // call title function
  ChangeTitle("Details");
  const banner = {
    background: `url(${detailsBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
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
            Class <span style={{ color: "#f42828" }}> Details</span>
          </Typography>
          <Typography variant="body2">
            Experience our revolutionary j30 classes
          </Typography>
        </Container>
      </div>
      <Box>
        <Container>
          <Grid sx={{ py: 8 }} container spacing={4}>
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
              <Typography style={{ fontWeight: "bold" }} variant="h4">
                {train?.classname}
              </Typography>
              <Typography sx={{ pt: 2 }} variant="body1">
                {train?.tag}
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography style={{ color: "#f42828" }} variant="h6">
                ClASS DURATION:
              </Typography>
              <Typography sx={{ pb: 2 }} variant="body1">
                60 minutes
              </Typography>
              <Typography style={{ color: "#f42828" }} variant="h6">
                CONDITIONING:
              </Typography>
              <Typography sx={{ textAlign: "justify" }} variant="body1">
                High Intensity Interval Training Circuit, a class incorporating
                a number of functional exercise stations where you will blast
                out as many reps as possible for a given time with a short rest
                interval in between stations.
              </Typography>
            </Grid>
          </Grid>
          <div id="class-image" style={{ height: '500px', overflow: 'hidden' }}>
            <img style={{ width: "100%", marginTop: '-150px' }} src={train?.image} alt="" />
          </div>
          <Grid sx={{ py: 8 }} container spacing={4}>
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
              <Typography
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
                variant="h4"
              >
                {train?.classname} TRAINING
              </Typography>
              <Typography sx={{ py: 2, textAlign: "justify" }} variant="body1">
                {train?.details}
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant="h6" sx={{ py: 1 }}>
                ENDURANCE
              </Typography>
              <ProgressBar
                animateOnRender="true"
                labelAlignment="outside"
                labelColor="#f42828"
                bgColor="#f42828"
                height="5px"
                completed={67}
              />
              <Typography variant="h6" sx={{ py: 1 }}>
                CARDIO
              </Typography>
              <ProgressBar
                animateOnRender="true"
                labelAlignment="outside"
                labelColor="#f42828"
                bgColor="#f42828"
                height="5px"
                completed={80}
              />
              <Typography variant="h6" sx={{ py: 1 }}>
                BODY COMPOSITION
              </Typography>
              <ProgressBar
                animateOnRender="true"
                labelAlignment="outside"
                labelColor="#f42828"
                bgColor="#f42828"
                height="5px"
                completed={70}
              />
              <Typography variant="h6" sx={{ py: 1 }}>
                STRENCHT
              </Typography>
              <ProgressBar
                animateOnRender="true"
                labelAlignment="outside"
                labelColor="#f42828"
                bgColor="#f42828"
                height="5px"
                completed={90}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container sx={{ pb: 10 }}>
          <form action="">
            <Grid container spacing={4}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField value={train?.classname} fullWidth disabled id="fullWidth" />
                <TextField
                  required
                  sx={{ my: 4 }}
                  fullWidth
                  label="Email"
                  id="fullWidth"
                  disabled
                  value={user.email}
                />
                <TextField fullWidth value={train?.schedule} disabled id="fullWidth" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField fullWidth label="Phone (optional)" id="fullWidth" />
                <TextField
                  sx={{ my: 4 }}
                  multiline
                  rows={4}
                  fullWidth
                  label="Your Message (optional)"
                  id="fullWidth"
                />
                <button type="submit" className="slide-button">
                  $<span>10</span> Take Class +
                </button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default ClassDetails;
