const express = require('express');
const router = express.Router();

router.get('/rank/top/:count', (req, res) => {
    const count = req.params.count;
    if (!/^\d+$/.test(count)) {
        return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
    }
    res.json({ message: `Selecting Top : ${count}` });
});

module.exports = router;
