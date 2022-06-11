const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const registerRules = [
    body('email').isEmail().withMessage('Email 請填寫正確欄位'),
    body('password').isLength({ min: 8 }).withMessage('密碼需要填寫至8碼以上'),
    body('confirmPassword')
        .custom((value, { req }) => {
            return value === req.body.password;
        })
        .withMessage('密碼與驗證密碼不一致'),
];

router.post('/register', registerRules, (req, res, next) => {
    console.log('regist body :　' + req.body);
    const validateResults = validationResult(req);
    console.log('validateResults', validateResults);
    if (!validateResults.isEmpty()) {
        let error = validateResults.array();
        return res.status(400).json(error);
    }
    res.json({ result: ok });
});

module.exports = router;
