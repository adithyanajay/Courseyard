/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
} from "@material-ui/core";

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

const CourseCard = ({ tags, name, description, image, instructor, link }) => {
  const classes = useStyles();
  const chipclasses = chipStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea style={{ outline: "none" }}>
        <CardMedia component="img" alt={name} height="140" image={image} title={name} />
        <CardContent>
          <div className={chipclasses.root}>
            {tags.map((tag, i) => (
              <Chip color="primary" variant="outlined" size="small" label={tag} key={i} />
            ))}
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            <b>{name}</b>
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            <span style={{ color: "darkgray" }}>by </span>
            <span style={{ color: "black" }}>{instructor}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
