const express = require("express");
const router = express.Router();

const {
  GetData,
  AddData,
} = require("../business-logic-layer/AccountOperationsBL.js");

router.get("/GetData/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID provided" });
    }

    const result = await GetData(id);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);

    if (
      error.message.includes("No account operation found") ||
      error.message.includes("No Data Found")
    ) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/AddData", async (req, res) => {
  try {
    const data = req.body;

    if (
      !data ||
      !data.accountNumber ||
      !data.actionType ||
      !["withdrawal", "deposit", "loan"].includes(data.actionType) ||
      data.amount == null ||
      (data.actionType === "loan" && (!data.interestRate || !data.installments))
    ) {
      return res.status(400).json({ message: "Invalid data provided." });
    }
    const result = await AddData(data);

    return res
      .status(201)
      .json({ message: "Data added successfully.", result });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: error.message || "Failed to add data." });
  }
});

module.exports = router;
