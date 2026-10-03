const express = require("express");

const app = express();

const PORT = 5003;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "borrowing-service"
    });
});

app.get("/borrowings", (req, res) => {
    res.json([
        {
            id: 1,
            memberId: 1,
            bookId: 1,
            borrowDate: "2026-10-03",
            returnDate: null,
            status: "borrowed"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Borrowing Service running on port ${PORT}`);
});