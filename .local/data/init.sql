CREATE TABLE product(
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL
);

INSERT INTO product(name, description, price) VALUES
    ('Apple MacBook', 'Best option for quality of life for a personal device.', 2500),
    ('Windows PC', 'Better for gaming, but not anything else.', 1500.99),
    ('Linux Server', 'Unless you hate life, not recommended for personal use. Easily best server.', 1000)
