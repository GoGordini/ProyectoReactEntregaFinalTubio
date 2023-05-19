import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 420 }}>
      <CardMedia sx={{ height: 250 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily={"Gill Sans MT"}
        >
          {item.title}
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 2, fontWeight: "bold" }}>
          <span> $ {item.price} </span>
        </Typography>
      </CardContent>

      <CardActions
        style={{
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Link to={`/item/${item.id}`}>
          <Button
            variant="contained"
            size="small"
            color="success"
            sx={{ marginBottom: 4 }}
          >
            Ver
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
