CREATE TABLE category(
id SERIAL PRIMARY KEY,
category_type TEXT NOT NULL
);

-- expense table 

CREATE TABLE expense(
id SERIAL PRIMARY KEY,
expense TEXT NOT NULL,
amount NUMERIC NOT NULL,
total NUMERIC NOT NULL,
category_id INT NOT NULL REFERENCES category(id)
);