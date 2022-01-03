import { Container, Typography } from '@mui/material';
import React from 'react';
import cover from '../../images/home images/banner-contact.jpg';
import { ChangeTitle } from '../../utilities/TabFunction';

const Contact = () => {
    // call title function
    ChangeTitle("Contact")
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
    return (
        <div>
            <div id="cover" style={banner}
      >
        <Container>
        <Typography variant="h3" sx={{textTransform:"uppercase",fontWeight:"bold",pb:2}}>Contact <span style={{color:"#f42828"}}>Us!</span></Typography>
        <Typography variant="body2">World is committed to making participation in the event <br /> a harassment free experience for everyone, regardless of level of experience.</Typography>
        </Container>
      </div>
        </div>
    );
};

export default Contact;