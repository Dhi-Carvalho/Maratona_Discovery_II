const Database = require("config");

Database();

Database.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly-budget INTEGER,
    days-per-week INTEGER,
    hour-per-day INTEGER,
    vacation-per-year INTEGER,
    value-hour INTEGER
)`);

Database.close();
