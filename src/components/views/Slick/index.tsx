"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../Search/subComponents/Cards";
import { oneVillaHouse } from "@/components/utils/Types";

interface propsType {
  villaHouseDataArray: Array<oneVillaHouse>
}

export default class MultipleItems extends Component<propsType> {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="overflow-hidden">
        <Slider {...settings} >
          {(this.props.villaHouseDataArray)?.map((item: oneVillaHouse, index: number) => (
            <Cards key={index + 66} villaDetail={item} />
          ))}
        </Slider>
      </div>
    );
  }
};