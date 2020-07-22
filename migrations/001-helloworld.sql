-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('bruno', 'bruno@testc.com');
INSERT INTO Person (name, email) values ('edayan', 'edayan@testc.com');

INSERT INTO Vehicle (brand, model, ownerId) values ('Audi', 'R8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('Range Rover', 'Velar', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('Bmw', 'X1', 2);


-- Down
DROP TABLE Person;
DROP TABLE Vehicle;