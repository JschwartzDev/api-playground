const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5500;
const pool = require("./db"); //reference used in below commented code for loading random products to the DB

const APIRouter = require("./Routes/API/APIRouter");

app.use(express.json());
app.use(cors());
app.use("/api", APIRouter);

//loads random products to the DB
/*
app.get("/load-products", (req, res) => {
  for (let i = 90; i < 160; i++) {
    let rand = Math.random() * 10;
    rounded = Math.round(rand * 100) / 100;

    let rating = Math.random() * 5;
    let roundedRating = Math.round(rating) + 1;
    let str = `https://source.unsplash.com/random/200x200?sig=${i}`;
    urlString = String(str);
    priceString = String(rounded);
    ratingString = String(roundedRating);
    let query = `INSERT INTO public.products (id, url, price, rating) VALUES (DEFAULT, '${urlString}', '${priceString}', '${ratingString}')`;
    console.log(query);

    pool.query(query, (error, result) => {
      if (error) throw error;
    });
  }
  res.send(`<h1>worked?</h1>`);
});
*/

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
