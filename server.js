const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/moneyTrackerDB', { useNewUrlParser: true, useUnifiedTopology: true });

const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

const incomeSchema = new mongoose.Schema({
    name: String,
    amount: Number
});

const Income = mongoose.model('Income', incomeSchema);

app.post('/addExpense', (req, res) => {
    const newExpense = new Expense({
        name: req.body.name,
        amount: req.body.amount
    });

    newExpense.save((err) => {
        if (err) {
            console.log(err);
            res.send('Error occurred while adding expense.');
        } else {
            res.redirect('/');
        }
    });
});

app.post('/addIncome', (req, res) => {
    const newIncome = new Income({
        name: req.body.name,
        amount: req.body.amount
    });

    newIncome.save((err) => {
        if (err) {
            console.log(err);
            res.send('Error occurred while adding income.');
        } else {
            res.redirect('/');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
