import React from "react";
import { Container } from "@mui/material";

// LOCAL IMPORTS
import SectionTitle from "../../components/SectionTitle";
import { estates } from "../../db";
import Card1 from "../../components/cards/Card1";

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
    </div>
  );
};

export default HomeFeatured;
