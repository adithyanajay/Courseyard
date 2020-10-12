/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const chipStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const CourseCard = (props) => {
  const classes = useStyles();
  const chipclasses = chipStyles();
  const tag = props.tags;
  const tags = tag.map((data, index) => {
    return (
      <Chip color="primary" onClick={undefined} variant="outlined" size="small" label={data} />
    );
  });
  return (
    <Card className={classes.root}>
      <CardActionArea styles={{ outline: "none" }}>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <div className={chipclasses.root}>{tags}</div>
          <Typography gutterBottom variant="h5" component="h2">
            <b>{props.name}</b>
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            <span style={{ color: "darkgray" }}>by </span>
            <span style={{ color: "black" }}>{props.instructor}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={props.link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
