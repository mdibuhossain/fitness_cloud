import React from "react";
import slide1 from "../../../images/home images/slide01.jpg";
import slide2 from "../../../images/home images/slide02.jpg";
import slide3 from "../../../images/home images/slide03.jpg";
import { Typography, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="slide-text">
            <Container>
              <Grid container >
                <Grid item xs={12} sm={12} lg={4} md={6}>
                  <Typography variant="h2" color="white">
                    Start Workout Get Better
                  </Typography>
                </Grid>
              </Grid>
              <Typography sx={{py:4}} variant="h6" color="white">
                Experience our Revoulutionary J30 Classes
              </Typography>
              <button className="slide-button">Discover More</button>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="slide-text">
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Typography variant="h2" color="white">
                  Unlimited training facilities
                  </Typography>
                </Grid>
              </Grid>
              <Typography sx={{py:4}} variant="h6" color="white">
                Group Fitness Classes and Personal Training
              </Typography>
              <button className="slide-button">Discover More</button>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <div className="slide-text">
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Typography variant="h2" color="white">
                    People, Working Realy Hard
                  </Typography>
                </Grid>
              </Grid>
              <Typography sx={{py:4}} variant="h6" color="white">
                Profesional Heavy duty commercial guide
              </Typography>
              <button className="slide-button">Discover More</button>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
