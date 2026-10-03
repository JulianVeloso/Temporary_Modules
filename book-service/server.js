const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "book-service"
    });
});

app.get("/books", (req, res) => {
    res.json([
        {
            id: 1,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            available: true
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Book Service running on port ${PORT}`);
});