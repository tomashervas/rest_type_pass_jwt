"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/signup', user_1.signUp);
router.post('/signin', user_1.signIn);
exports.default = router;
