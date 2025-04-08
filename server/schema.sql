CREATE DATABASE BankAccounts;

USE BankAccounts;

CREATE TABLE AccountOperations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accountNumber VARCHAR(50) NOT NULL,
    type ENUM('withdrawal', 'deposit', 'loan') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    interestRate DECIMAL(5,2),
    payments INT 
);

INSERT INTO AccountOperations (accountNumber, type, amount, date, interestRate, payments) 
VALUES 
('123456', 'deposit', 500.00, NOW(), NULL, NULL),
('123456', 'withdrawal', 200.00, NOW(), NULL, NULL),
('987654', 'deposit', 1000.00, NOW(), NULL, NULL),
('987654', 'withdrawal', 300.00, NOW(), NULL, NULL),
('555555', 'loan', 5000.00, NOW(), 4.5, 12),
('555555', 'loan', 10000.00, NOW(), 5.2, 24),
('777777', 'deposit', 750.50, NOW(), NULL, NULL),
('777777', 'withdrawal', 250.75, NOW(), NULL, NULL),
('888888', 'loan', 20000.00, NOW(), 3.8, 36),
('999999', 'deposit', 2000.00, NOW(), NULL, NULL);


