import React from "react";
import { Container } from "@mui/material";

// LOCAL IMPORTS
import SectionTitle from "../../components/SectionTitle";
import { featured } from "../../db";
import Card2 from "../../components/cards/Card2";
import Slider from "../../components/common/slider/Slider";

const HomeFeatured = () => {
  return (
    <div className="featured">
      <SectionTitle
        title="Featured"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />

      {/* <Container className="featured-item">
        {estates.slice(0, 8).map((item) => (
          <Card1 item={item} />
        ))}
      </Container> */}
      <Container className="featured-item">
        <Slider
          // itemWidth={}
          numberVisible={2}
          label={"home-featured"}
          Items={featured.map((item) => (
            <Card2 item={item} />
          ))}
        />
      </Container>
    </div>
  );
};

export default HomeFeatured;
