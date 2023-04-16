const express = require("express");
const path = require("path");
const planner = require("../functions/planner.js");

const router = express.Router();

router.use(
  express.static(path.join(__dirname, "../", "../", "frontend", "build"))
);

router.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../", "../", "frontend", "build", "index.html")
  );
});

// API Endpoints

router.post("/api/planner", async (req, res) => {
  const {
    destination,
    days,
    budget,
    familyMembers,
    children,
    currentLocation,
  } = req.body;
  // console.log(destination, days);
  const response = await planner(
    destination,
    days,
    budget,
    familyMembers,
    children,
    currentLocation
  );
  // console.log(response);
  res.status(200).json(response);
});

// Another endpoints
router.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../", "../", "frontend", "build", "index.html")
  );
});

module.exports = router;
