import React from "react";
import CourseCard from "../card/card.component";
import { Grid } from "@material-ui/core";

import { data } from "../../test-data/data";

const CardsPreview = () => (
  <div style={{ margin: "20px" }}>
    <Grid container spacing={5} justify="space-evenly" alignItems="center">
      {data.map((item, i) => (
        <Grid
          item
          sm={6}
          md={4}
          lg={3}
          key={i}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CourseCard
            image={item.thumbnail}
            name={item.name}
            description={item.description}
            instructor={item.instructor}
            tags={item.tags}
            link={item.link}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default CardsPreview;
