import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testimonals from './testimonals.json'
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import Testimonal from "./testimonal";
import './testimonal.css'
import Counters from "./counters";

const Testimonals = () => {
  return (
    <section className="testimonals">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Testimonals</h3>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {
                testimonals.map((testimonal,index)=>(
                  <SwiperSlide key={index}><Testimonal {...testimonal}/></SwiperSlide>
                ))
              }
              
            </Swiper>
          </Col>
          <Col md={6}>
              <Counters/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;
