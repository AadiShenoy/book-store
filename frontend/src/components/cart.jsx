import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  //const myBooks = useSelector((state) => state.allBooks.cartBooks.items);

  return (
    <Grid container>
      <Grid
        item
        container
        style={{
          border: "1px solid black",
          width: "60%",
          margin: "5% auto",
          padding: "1%",
        }}
      >
        <Grid item xs={4}>
          <Typography style={{ marginBottom: "15px", fontSize: "20px" }}>
            My Cart(1)
          </Typography>
        </Grid>
        <Grid item xs={8} />

        {/* ----------------------------------------------------------------------- */}
            <Grid item container>
              <Grid item xs={4}>
                <img
                  className="bookImage"
                  src="http://books.google.com/books/content?id=tYwq0H5HcrcC&printsec=frontcover&img=1&zoom=5'"
                  alt=""
                />
              </Grid>
              <Grid item xs={8}>
                <Typography align="left">Dont make me think</Typography>
                <Typography
                  align="left"
                  color="text.secondary"
                  style={{ fontSize: "14px" }}
                >
                  by steve king
                </Typography>
                <Typography
                  align="left"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Rs 1500
                </Typography>
              </Grid>
            </Grid>

        {/* ----------------------------------------------------------------------- */}

        <Grid item xs={12} align="right">
          <Button variant="contained">Place order</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
