const path = require('path');
const express = require('express');
const session = require('express-session');
const xphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/config');
const { Sequelize } = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Tippy-top secretest secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
},
    app.use(session(sess));

    const hdbrs = xphbs.create({ helpers });

    app.engine(express.json());
    app.set('view engine', 'handlebars');
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    

