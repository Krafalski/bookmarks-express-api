const express = require("express");
const bookmarks = express.Router();
const bookmarkArray = require("../models/bookmarksArray.js");

// INDEX
bookmarks.get("/", (req, res) => {
  res.status(200).json(bookmarkArray);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  if (bookmarkArray[req.params.arrayIndex]) {
    res.status(200).send(bookmarkArray[req.params.arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

// UPDATE
bookmarks.put("/:arrayIndex", (req, res) => {
  bookmarkArray[req.params.arrayIndex] = req.body;
  res.status(200).json(bookmarkArray[req.params.arrayIndex]);
});

// CREATE
bookmarks.post("/", (req, res) => {
  bookmarkArray.push(req.body);
  res.status(303).redirect("/bookmarks");
});

// DELETE
bookmarks.delete("/:indexArray", (req, res) => {
  const deletedBookMark = bookmarkArray.splice(req.params.indexArray, 1);
  res.status(200).json(deletedBookMark);
});

module.exports = bookmarks;
