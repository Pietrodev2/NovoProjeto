require("dotenv").config();
const mongoose = require("mongoose");
var express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");

const routerProdutos = require("./routes/router_produtos");

mongoose.connect(process.env.MONGODB_URL);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', routerProdutos)

module.exports = app;
