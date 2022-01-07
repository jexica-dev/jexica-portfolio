import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/dist/client/image";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
          <Image
                  className={"absolute z-10 top-0 left-0"}
                  src="/samplework/Jayran_samplework.png"
                  width={750}
                  height={410}
                  alt='image1'
                />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework2.png"
              width={750}
              height={410}
              alt="image2"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework3.png"
              width={750}
              height={410}
              alt="image3"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework4.png"
              width={750}
              height={410}
              alt="image4"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework5.png"
              width={750}
              height={410}
              alt="image5"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework6.png"
              width={750}
              height={410}
              alt="image6"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework7.png"
              width={750}
              height={410}
              alt="image7"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework8.png"
              width={750}
              height={410}
              alt="image8"
            />
          </div>
          <div>
            <Image
              src="/samplework/Jayran_samplework9.png"
              width={750}
              height={410}
              alt="image9"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
