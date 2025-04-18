const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const port = 30001;

app.use(express.json());

mongoose
  .connect(process.env.EXPO_DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api/users', require('./routes/user'))
app.use('/api/products', require('./routes/product'))
app.use('/api/carts', require('./routes/cart'))
app.use('/api/wishlists', require('./routes/wishlist'))
app.use('/api/tags', require('./routes/tag'))
app.use('/api/categories', require('./routes/category'))
app.use('/api/collections', require('./routes/collection'))
app.use('/api/images', require('./routes/image'))
app.use('/api/discounts', require('./routes/discount'))
app.use('/api/reviews', require('./routes/review'))
app.use('/api/locations', require('./routes/location'))
app.use('/api/banners', require('./routes/banner'))
app.use('/api/payments', require('./routes/payment'))
app.use('/api/orders', require('./routes/order'))
// app.use('/api/shipments', require('./routes/shipments'))

app.use('/', (req, res) => {
   return res.status(404).json({ error: 'Route not found' })
});
