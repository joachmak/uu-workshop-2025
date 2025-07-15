import Database from 'better-sqlite3';
import { faker } from '@faker-js/faker';
import path from 'path';
import fs from 'fs';

// Ensure the DB file and directory exists
const dbPath = path.resolve(process.cwd(), 'basic_db.sqlite');
console.log("Db path: ", dbPath)
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

// Connect to SQLite database
const db = new Database(dbPath);

// Create table
db.exec(`
  CREATE TABLE IF NOT EXISTS marketplace_postings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imageUrl TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price TEXT NOT NULL,
    date TEXT NOT NULL
  )
`);

db.exec(`
  DELETE FROM marketplace_postings WHERE TRUE
`);

// Insert dummy data
const insert = db.prepare(`
  INSERT INTO marketplace_postings (imageUrl, title, description, price, date)
  VALUES (@imageUrl, @title, @description, @price, @date)
`);

const NUM_POSTS = 24;

for (let i = 0; i < NUM_POSTS; i++) {
    const post = {
        imageUrl: faker.image.urlPicsumPhotos(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        date: faker.date.recent({days: 10}).toString(),
    };

    insert.run(post);
}

console.log(`✅ Seeded ${NUM_POSTS} marketplace postings.`);
