const {
  GetByID,
  insert,
} = require("../data-accsess-layer/AccountOperationsDAL");

function GetData(id) {
  return GetByID(id);
}

function AddData(data) {
  const { accountNumber, actionType, amount, interestRate, installments } =
    data;

  const date = new Date();

  return insert(
    accountNumber,
    actionType,
    amount,
    date,
    actionType === "loan" ? interestRate : null,
    actionType === "loan" ? installments : null
  );
}

module.exports = {
  GetData,
  AddData,
};
