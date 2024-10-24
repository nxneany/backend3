const express = require('express');
var connection = require('../dbcon'); // ใช้การเชื่อมต่อจากไฟล์ dbcon
var router = express.Router();

router.post('/registerUser', (req, res) => {
    const { username, phone, password, address, latitude, longitude, profile_image } = req.body;

    // Query สำหรับการ insert ข้อมูล
    const sql = `INSERT INTO users (username, phone, password, address, latitude, longitude, profile_image) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    // เรียกใช้ connection.query แทน db.query
    connection.query(sql, [username, phone, password, address, latitude, longitude, profile_image], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error inserting user');
        } else {
            res.status(200).send('User registered successfully', result);
        }
    });
});

// เส้นทางสำหรับการดึงข้อมูลผู้ใช้
router.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`; // Query เพื่อดึงข้อมูลผู้ใช้ทั้งหมด

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        } else {
            res.status(200).json(results); // ส่งข้อมูลผู้ใช้ในรูปแบบ JSON
        }
    });
});
module.exports = router;
