
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    hash VARCHAR(250),
    profile_pic TEXT
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
)

