import { Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import cover from "../../images/home images/banner-contact.jpg";
import { ChangeTitle } from "../../utilities/TabFunction";
import sectionShape from '../../images/home images/section-title-shape.png'
import { Link } from "react-router-dom";

const Contact = () => {
  // call title function
  ChangeTitle("Contact");
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
            Contact <span style={{ color: "#f42828" }}>Us!</span>
          </Typography>
          <Typography variant="body2">
            World is committed to making participation in the event <br /> a
            harassment free experience for everyone, regardless of level of
            experience.
          </Typography>
        </Container>
      </div>
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
          Find Our Gyms
        </Typography>
        <Container>
          <Grid item sx={{ mx: "auto" }} xs={12} sm={12} md={6} lg={6}>
            <Typography variant="subtitle2">
              World is committed to making participation in the event a harassment free experience for everyone, regardless.
            </Typography>
          </Grid>
        </Container>
      </Box>
      <div id="info">
        <Container sx={{ py: 10 }}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography variant="h5" style={{ textTransform: "uppercase", fontWeight: "bold" }}><i style={{ color: "#f42828" }} className="fas fa-map-marker-alt"></i> MANHATTAN, NY</Typography>
              <Typography variant="body2" sx={{ py: 1 }}>
                GymVast, 18 East 50th Street, 4th Floor,New York, NY 10022
              </Typography>
              <Typography sx={{ pb: 1 }}><span style={{ fontWeight: "bold" }}>Phone</span> : +147852369</Typography>
              <Typography><span style={{ fontWeight: "bold" }}>Email</span> : contact@fitnesscloud.com</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography variant="h5" style={{ textTransform: "uppercase", fontWeight: "bold" }}><i style={{ color: "#f42828" }} className="fas fa-map-marker-alt"></i> UNION CITY, NY</Typography>
              <Typography variant="body2" sx={{ py: 1 }}>
                GymVast, 18 East 50th Street, 4th Floor,New York, NY 10022
              </Typography>
              <Typography sx={{ pb: 1 }}><span style={{ fontWeight: "bold" }}>Phone</span> : +147852369</Typography>
              <Typography><span style={{ fontWeight: "bold" }}>Email</span> : contact@fitnesscloud.com</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography variant="h5" style={{ textTransform: "uppercase", fontWeight: "bold" }}><i style={{ color: "#f42828" }} className="fas fa-map-marker-alt"></i> SOUGHT GATE, LA</Typography>
              <Typography variant="body2" sx={{ py: 1 }}>
                GymVast, 18 East 50th Street, 4th Floor,New York, NY 10022
              </Typography>
              <Typography sx={{ pb: 1 }}><span style={{ fontWeight: "bold" }}>Phone</span> : +147852369</Typography>
              <Typography><span style={{ fontWeight: "bold" }}>Email</span> : contact@fitnesscloud.com</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div id="Map">
        <iframe style={{ width: "100%", height: "450px", border: "0" }} title="location" src="https://maps.google.com/maps?q=london,New York&t=k&z=13&ie=UTF8&iwloc=&output=embed">
        </iframe>
      </div>

      <div id="form">
        <Container sx={{ py: 10 }}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography
                sx={{
                  color: "#f42828",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  pb: 2
                }}
                variant="h4">WE'RE ALLWAYS HAPPY TO HELP</Typography>
              <Typography variant="body2">If you have any questions or need any further information <br /> then please don’t hesitate to contact us.</Typography>
              <Typography sx={{ display: "flex", alignItems: 'center', gap: 2, mt: 2 }}>
                <strong>Address:</strong>
                <span>YourGym Lytham Limited Units 1-3 <br /> Lytham Trade Park</span>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: 'center', gap: 4 }}>
                <strong>Phone :</strong>
                <span>+147852369</span>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: 'center', gap: 4 }}>
                <strong>Email :</strong>
                <span>contact@fitnesscloud.com</span>
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper sx={{ p: 6 }} elevation={1}>
                <form>
                  <TextField fullWidth label="Complete Name" id="fullWidth" />
                  <TextField sx={{ my: 4 }} fullWidth label="Email" id="fullWidth" />
                  <TextField fullWidth label="Phone" id="fullWidth" />
                  <TextField sx={{ my: 4 }} multiline
                    rows={4} fullWidth label="Your Message" id="fullWidth" />
                  <Link to="/">
                    <button type="submit" className="slide-button">Send Message</button>
                  </Link>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
