import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../card/card.component";
import { Grid } from "@material-ui/core";

const CardsPreview = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/courses")
      .then((response) => {
        console.log(response);
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CardsPreview]);
  return (
    <div style={{ margin: "20px" }}>
      <Grid container spacing={5} justify="space-evenly" alignItems="center">
        {courses.map((item, i) => (
          <Grid
            item
            sm={6}
            md={4}
            lg={3}
            key={i}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CourseCard
              image={item.imageurl}
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
};

export default CardsPreview;
