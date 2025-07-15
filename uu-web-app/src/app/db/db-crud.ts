import Database from 'better-sqlite3';
import path from 'path';

// Define the interface based on MarketplacePostingProps
export type TMarketplacePosting = Omit<MarketplacePostingRow, 'date'> & {
  date: Date;
};

// Type for a row as returned from the database
type MarketplacePostingRow = {
  imageUrl: string;
  title: string;
  description: string;
  price: string | number;
  date: string; // date as string from DB
}

const dbPath = path.join(process.cwd(), 'basic_db.sqlite');
const db = new Database(dbPath);

export function getAll(): TMarketplacePosting[] {
  const rows = db.prepare('SELECT * FROM marketplace_postings').all() as MarketplacePostingRow[];
  return rows.map(row => ({
    imageUrl: row.imageUrl,
    title: row.title,
    description: row.description,
    price: row.price,
    date: new Date(row.date),
  })).sort((a, b) =>
      b.date.getTime() - a.date.getTime()
  );
}

export function addMarketplacePosting(posting: Omit<TMarketplacePosting, 'date'>): void {
  const stmt = db.prepare(`
    INSERT INTO marketplace_postings (imageUrl, title, description, price, date)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(
    posting.imageUrl,
    posting.title,
    posting.description,
    posting.price,
    new Date().toISOString()
  );
}
