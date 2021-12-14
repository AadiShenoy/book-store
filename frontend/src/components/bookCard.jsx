import React, { useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import bookService from "../service/bookService";

const BookCard = ({ item }) => {
  const [wishlist, setWishlist] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const handleCart = () => {
    let data = {
      book: item._id,
      quantity: item.quantity,
      cost: item.price,
      counter: "increment",
    };
    setWishlist(true);
    bookService
      .addCartBooks(data)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWishlist = () => {
    setCart(true);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: 345 }} onClick={() => setIsOpen(true)}>
        <div className="imageContainer">
          <img className="bookImage" src={item.image} alt="" />
        </div>
        <CardContent>
          <Typography align="left" className="item-content">
            {item.title}
          </Typography>
          <Typography
            align="left"
            color="text.secondary"
            style={{ fontSize: "14px" }}
          >
            by {item.author}
          </Typography>
          <Typography
            align="left"
            style={{ fontWeight: "bold", fontSize: "14px" }}
          >
            Rs. {item.price}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            onClick={handleCart}
            fullWidth="true"
            style={
              !cart && wishlist
                ? { background: "#3371B5", color: "white" }
                : !cart
                ? { backgroundColor: "#A03037", color: "white" }
                : { display: "none" }
            }
          >
            {!cart && wishlist ? "Added to bag" : "Add to bag"}
          </Button>
          <Button
            style={
              !wishlist
                ? { border: "1px solid black", color: "black" }
                : { display: "none" }
            }
            fullWidth="true"
            onClick={handleWishlist}
          >
            Wishlist
          </Button>
        </CardActions>
      </Card>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>{item.title}</DialogTitle>
        <DialogContent>{item.description}</DialogContent>
      </Dialog>
    </Grid>
  );
};

export default BookCard;
