import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import detailsBanner from "../../images/home images/detailscover.jpg";
import { ChangeTitle } from "../../utilities/TabFunction";
import { Box } from "@mui/system";
import ProgressBar from "@ramonak/react-progress-bar";

const ClassDetails = () => {
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
            ClassName <span style={{ color: "#f42828" }}> Details</span>
          </Typography>
          <Typography variant="body2">
            Experience our revolutionary j30 classes
          </Typography>
        </Container>
      </div>
      <Box>
        <Container>
            <Grid sx={{py:8}} container spacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}
                 sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <Typography style={{fontWeight:"bold"}} variant="h4">STRENGTH + CONDITIONING</Typography>
                    <Typography sx={{pt:2}} variant="body1">Smart + Effective Bodyweight Training.</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography style={{color:"#f42828"}} variant="h6">ClASS DURATION:</Typography>
                <Typography sx={{pb:2}} variant="body1">60 minutes</Typography>
                <Typography style={{color:"#f42828"}} variant="h6">CONDITIONING:</Typography>
                <Typography sx={{textAlign:"justify"}} variant="body1">High Intensity Interval Training Circuit, a class incorporating a number of functional exercise stations where you will blast out as many reps as possible for a given time with a short rest interval in between stations.
                </Typography>
                </Grid>
            </Grid>
            <div id="class-image">
                <img style={{width:"100%"}} src={detailsBanner} alt="" />
            </div>
            <Grid sx={{py:8}} container spacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}
                 sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <Typography style={{fontWeight:"bold",textTransform:"uppercase"}} variant="h4">Name TRAINING</Typography>
                    <Typography sx={{pt:2,textAlign:"justify"}} variant="body1">Many women and some men too, use to worry that lifting weights could make them look too muscly but this isn’t the case with Strength & Conditioning. Focussing on low repetitions at a higher weight builds long-length strength fibres and doesn’t bulk. 
                    <br /> <br />
                    Plus, the types of lifts carried out in Strength & Conditioning are large compound lifts such as squats and pull-ups and these types of total-body workouts are nothing like the large volume workouts with multiple exercises per body part which became so popular in gyms due to the influence of bodybuilding.</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <Typography variant="h6" sx={{py:1}}>ENDURANCE</Typography>
                    <ProgressBar animateOnRender="true" labelAlignment="outside" labelColor="#f42828" bgColor="#f42828" height="5px" completed={67} />
                    <Typography variant="h6" sx={{py:1}}>CARDIO</Typography>
                    <ProgressBar animateOnRender="true" labelAlignment="outside" labelColor="#f42828" bgColor="#f42828" height="5px" completed={80} />
                    <Typography variant="h6" sx={{py:1}}>BODY COMPOSITION</Typography>
                    <ProgressBar animateOnRender="true" labelAlignment="outside" labelColor="#f42828" bgColor="#f42828" height="5px" completed={70} />
                    <Typography variant="h6" sx={{py:1}}>STRENCHT</Typography>
                    <ProgressBar animateOnRender="true" labelAlignment="outside" labelColor="#f42828" bgColor="#f42828" height="5px" completed={90} />
                </Grid>
            </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ClassDetails;
