import express from "express";
import home from "./../controllers/homeController";
import auth from "./../controllers/authController";
import admin from "./../controllers/adminController";
import doctor from "./../controllers/doctorController";
import supporter from "./../controllers/supporterController";
import clinic from "./../controllers/clinicController";
// import bot from "./../controllers/botFBController";
import passport from "passport";
import passportLocal from 'passport-local';
import userService from "./../services/userService";

const multer = require('multer');
const upload = multer();
let router = express.Router();
let initRouteAPI = (app) => {
    router.get("/api/home-page", home.getApiHomePage);
}
module.exports = initRouteAPI;