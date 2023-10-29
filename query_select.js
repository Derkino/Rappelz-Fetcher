const express = require('express');
const router = express.Router();

router.get('/rank/top/level/:count', (req, res) => {
    const count = req.params.count;
    if (!/^\d+$/.test(count)) {
        return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
    }
    res.json({ message: `Selecting Top : ${count}` });
});

router.get('/rank/top/gold/:count', (req, res) => {
    const count = req.params.count;
    if (!/^\d+$/.test(count)) {
        return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
    }
    res.json({ message: `Selecting Top : ${count}` });
});

router.get('/rank/top/pkc/:count', (req, res) => {
    const count = req.params.count;
    if (!/^\d+$/.test(count)) {
        return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
    }
    res.json({ message: `Selecting Top : ${count}` });
});

router.get('/rank/top/arena/:count', (req, res) => {
    const count = req.params.count;
    if (!/^\d+$/.test(count)) {
        return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
    }
    res.json({ message: `Selecting Top : ${count}` });
});

module.exports = router;
