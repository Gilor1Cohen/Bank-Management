const db = require("./Database");

async function GetByID(id) {
  try {
    const [data] = await db.query(
      "SELECT * FROM AccountOperations WHERE accountNumber = ?",
      [id]
    );

    if (!data || data.length === 0) {
      throw new Error(`No account operation found for accountNumber: ${id}`);
    }

    return data;
  } catch (error) {
    throw new Error("No Data Found");
  }
}

async function insert(
  accountNumber,
  type,
  amount,
  date,
  interestRate,
  installments
) {
  try {
    const [result] = await db.query(
      "INSERT INTO AccountOperations (accountNumber, type, amount, date , interestRate, payments) VALUES (?, ?, ?, ?, ?,?)",
      [accountNumber, type, amount, date, interestRate, installments]
    );

    if (result.affectedRows === 0) {
      throw new Error("Insert operation failed.");
    }

    return result;
  } catch (error) {
    console.log(error);

    throw new Error("Insert operation error");
  }
}

module.exports = {
  GetByID,
  insert,
};
