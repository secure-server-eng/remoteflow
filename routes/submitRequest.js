const express = require("express");
const router = express.Router();
const { generatePDF } = require("../utils/pdfGenerator");
const { sendEmail } = require("../utils/emailSender");

router.post("/", async (req, res) => {
  try {
    const pdfBuffer = await generatePDF(req.body);
    await sendEmail(req.body, pdfBuffer);
    res.status(200).send("Request submitted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
