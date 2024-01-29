import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import banner1 from "../../../assets/1.png";
import banner2 from "../../../assets/2.png";
import banner3 from "../../../assets/3.png";
import banner4 from "../../../assets/4.png";
import banner5 from "../../../assets/5.png";

const Banner = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto my-5 "
            src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto my-5 "
            src="https://www.educationcorner.com/wp-content/uploads/featured-importance-education.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto my-5 "
            src="https://themillennialbuzz.com/wp-content/uploads/2022/08/the-whole-purpose-of-education.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto my-5 "
            src="https://www.thebalancemoney.com/thmb/cfLSIpcpwiluW-kJDTu16bXNhjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto my-5 "
            src="https://www.21kschool.com/ir/wp-content/uploads/sites/34/2021/01/rptgtpxd-1396254731.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
