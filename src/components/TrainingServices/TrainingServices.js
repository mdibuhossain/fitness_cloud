import { Container, Grid, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import cover from '../../images/home images/slide03.jpg';
import cover2 from '../../images/home images/help-light-img.jpg';
import ClassCard from "../TrainingClass/ClassCard/ClassCard";
import { ChangeTitle } from "../../utilities/TabFunction";

const TrainingServices = () => {
  // call title function
  ChangeTitle("Classes");
    const [training, setTraining] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTraining(data));
  }, []);

    const banner ={
        background: `url(${cover})`,
        backgroundSize :"cover",
        backgroundPosition:"center",
        height: "90vh",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        color:"#fff"
    }
    const banner2 ={
        background: `url(${cover2})`,
        backgroundSize :"cover",
        backgroundPosition:"center",
        height:"90vh",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        color:"#fff"
    }
  return (
    <div style={{backgroundColor:"#f1f1f1"}}>
      <div id="cover" style={banner}
      >
        <Container>
        <Typography variant="h3" sx={{textTransform:"uppercase",fontWeight:"bold",pb:2}}>Our <span style={{color:"#f42828"}}>Classes</span></Typography>
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
        <Container style={{color:"#000"}}>
        <Typography variant="h4" sx={{textTransform:"uppercase",fontWeight:"bold",pb:2}}>HELPING YOU TO GO <br /> <span style={{color:"#f42828"}}> SINCE 1971</span></Typography>
        <Typography sx={{mb:4}} style={{textAlign:"justify"}} variant="body2">World is committed to making participation in the event a harassment <br /> free experience for everyone, regardless of level of experience.</Typography>
        <div>
        <button className="slide-button">Join Classes +</button>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default TrainingServices;
