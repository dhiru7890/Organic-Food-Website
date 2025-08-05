const express = require("express");
const app = express();

app.use(express.json());

app.get('/tasks', async (req, res) => {
    const task = {
        id: 1,
        title: "Buy Groceries",
        description: "Milk, eggs",
        completed: false
    };
    res.json(task);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
