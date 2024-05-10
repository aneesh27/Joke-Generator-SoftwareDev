DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    img_url VARCHAR(700) NOT NULL
);

DROP TABLE IF EXISTS jokes CASCADE;
CREATE TABLE jokes(
    joke_id SERIAL PRIMARY KEY,
    text VARCHAR(2000) NOT NULL,
    type VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS users_to_jokes;
CREATE TABLE users_to_jokes(
    user_id INTEGER NOT NULL REFERENCES users (user_id),
    joke_id INTEGER NOT NULL REFERENCES jokes (joke_id)
);
