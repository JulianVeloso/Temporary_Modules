const express = require("express");

const app = express();

const PORT = 5002;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "member-service"
    });
});

app.get("/members", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Juan Dela Cruz",
            email: "juan@example.com",
            active: true
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Member Service running on port ${PORT}`);
});