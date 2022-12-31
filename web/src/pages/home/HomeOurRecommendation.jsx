import React from "react";
import { Container, Grid } from "@mui/material";

// LOCAL IMPORTS
import SectionTitle from "../../components/SectionTitle";
import { estates } from "../../db";
import Card1 from "../../components/cards/Card1";
import AppButton from "../../components/AppButton";

const HomeOurRecommendation = () => {
  return (
    <div className="our-recommendation">
      <Container>
        <SectionTitle
          title="Our Recommendation"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate officia autem qui nulla. Laudantium, ad. Temporibus itaque sit eius."
        />

        <Grid container spacing={3}>
          {estates.slice(0, 8).map((item) => (
            <Grid className="grid" item key={item._id} xs={12} sm={6}>
              <Card1 item={item} />
            </Grid>
          ))}
        </Grid>

        <div  style={{ width: "100%", marginTop: 50, textAlign: "center" }}>
          <AppButton style={{width: 120}}>
            See All
          </AppButton>
        </div>
      </Container>
    </div>
  );
};

export default HomeOurRecommendation;
