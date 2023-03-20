/* ---------------------------- Imported Packages ----------------------------- */
const express = require("express");
const app = express();
const cors = require("cors");
const signUpRouter = require("./routes/publicRoutes/signUpRoute");
const signInRouter = require("./routes/publicRoutes/signInRoute");
const categoryRouter = require("./routes/adminRoutes/categoryRoute");
const productRouter = require("./routes/adminRoutes/productRoute");
const registrationRouter = require("./routes/publicRoutes/registerationRoute");
const regCategoryRouter = require("./routes/publicRoutes/regCategoryRoute")

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

require("./database/connectionDB")();

/* ---------------------------- Middleware ----------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));
app.use("/api/signUp", signUpRouter);
app.use("/api/signIn", signInRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/register", registrationRouter);
app.use("/api/regCategory", regCategoryRouter);

/* ---------------------------- Testing API ----------------------------- */
// app.get('/', (req, res) => {
//     res.send(`Hello Server :)`);
// })

/* ---------------------------- Listening Port ----------------------------- */
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}.`);
});
