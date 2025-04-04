import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      image_url VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,      
      birthDate DATE NOT NULL,
      age INT NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(15) NOT NULL,
      exams VARCHAR(15) NOT NULL,
      initialWeight DECIMAL(5,2) NOT NULL,
      currentWeight DECIMAL(5,2) NOT NULL,
      enrollmentDate DATE NOT NULL,
      relationshipDuration VARCHAR(50) NOT NULL,
      treatmentType VARCHAR(100) NOT NULL,
      restrictions VARCHAR(100) NOT NULL,
      avatar VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (
        id, 
        image_url, 
        name, 
        birthDate, 
        age, 
        email, 
        phone, 
        exams, 
        initialWeight, 
        currentWeight, 
        enrollmentDate, 
        relationshipDuration, 
        treatmentType, 
        restrictions, 
        avatar
        )
        VALUES (
        ${customer.id}, 
        ${customer.image_url}, 
        ${customer.name}, 
        ${customer.birthDate}, 
        ${customer.age}, 
        ${customer.email}, 
        ${customer.phone}, 
        ${customer.exams}, 
        ${customer.initialWeight}, 
        ${customer.currentWeight}, 
        ${customer.enrollmentDate}, 
        ${customer.relationshipDuration}, 
        ${customer.treatmentType}, 
        ${customer.restrictions}, 
        ${customer.avatar})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedCustomers(),
      seedInvoices(),
      seedRevenue(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
