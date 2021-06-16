var express = require("express");
var router = express.Router();
var data = require("../enterprise.json");

/* GET users listing. */

router.get("/offers", function (req, res, next) {
  try {
    const id = req.query.AccountId;
    const offer = req.query.OfferType;
    const obj = data.filter((item) => item.AccountId == id);
    if (obj) {
      if (offer === "" || offer === undefined) res.json(obj[0]);
      else res.json(obj[0].Offers[offer]);
    }
  } catch (err) {
    res.json({
      error: {
        errorMessage: "Invalid Account Id",
        stack: err.stack,
      },
    });
  }
});

module.exports = router;
