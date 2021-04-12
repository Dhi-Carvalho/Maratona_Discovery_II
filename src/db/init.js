const Database = require("./config");

Database();

Database.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthy_budget INTEGER,
    days_per_week INTEGER,
    hours_per_day INTEGER,
    vacation_per_year INTEGER,
    value_hour INTEGER
)`);

Database.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INTEGER,
    total_hours INTEGER,
    ceated_at DATETIME
)`);

Database.run(`INSERT INTO profile (
    name,
    avatar,
    monthy_budget,
    days_per_week,
    hours_per_week,
    vacation_per_year,
    ) VALUES (
        "Dhi Carvalho",
        "https://avatars.githubusercontent.com/u/67021257?v=4",
        3000,
        5,
        5,
        4
    )
)`);

Database.run(`INSERT INTO jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name,
    daily_hours,
    total_hours,
    ceated_at,
) VALUES (
    "Pizzaria Guloso",
    2,
    1,
    1617514376018
)`);

Database.run(`INSERT INTO jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name,
    daily_hours,
    total_hours,
    ceated_at,
) VALUES (
    "OneTwo Projects",
    3,
    47,
    1617514376018
)`);

Database.close();
