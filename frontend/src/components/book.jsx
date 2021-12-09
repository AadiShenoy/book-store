import {
  Grid,
  Box,
  CardContent,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Book = () => {
  const myBooks = useSelector((state) => state.allBooks.filteredbooks);
  const numberOfBooks = myBooks.length;
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCart = (index) => {
    setWishlist((prev) => [...prev, { [index]: true }]);
  };

  const handleWishlist = (index) => {
    setCart({ [index]: true });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="main-container">
      <Grid container>
        <Grid item xs={6} align="left">
          <Typography id="book-count">
            Books
            <span id="book-count-span">({numberOfBooks} items)</span>
          </Typography>
        </Grid>
        <Grid item xs={6} align="right">
          <Button
            id="sort-by-btn"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Sort by price
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>price: low to high</MenuItem>
            <MenuItem>price: high to low</MenuItem>
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {myBooks.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <Card sx={{ height: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="171"
                  image={item.image}
                />
                <CardContent>
                  <Typography align="left" style={{ fontSize: "16px" }}>
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
                    onClick={() => handleCart(index)}
                    fullWidth="true"
                    style={
                      !cart[index]
                        ? { backgroundColor: "#A03037", color: "white" }
                        : { display: "none" }
                    }
                  >
                    Add to bag
                  </Button>
                  <Button
                    style={
                      !wishlist[index]
                        ? { border: "1px solid black", color: "black" }
                        : { display: "none" }
                    }
                    fullWidth="true"
                    onClick={() => handleWishlist(index)}
                  >
                    Wishlist
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Book;
