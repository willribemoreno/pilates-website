// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  image_url: string;
  name: string;
  birthDate: string;
  age: number;
  phone: number;
  exams: string;
  initialWeight: number;
  currentWeight: number;
  enrollmentDate: Date;
  relationshipDuration: string;
  treatmentType: string;
  restrictions: string;
  avatar: string;
  email: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pendente' | 'pago';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pendente' | 'pago';
};

export type CustomersTableType = {
  id: string;
  image_url: string;
  name: string;
  birthdate: string;
  age: number;
  phone: number;
  exams: string;
  initialweight: number;
  currentweight: number;
  enrollmentdate: string;
  relationshipduration: string;
  treatmenttype: string;
  restrictions: string;
  avatar: string;
  email: string;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  image_url: string;
  name: string;
  birthdate: string;
  age: number;
  phone: number;
  exams: string;
  initialweight: number;
  currentweight: number;
  enrollmentdate: string;
  relationshipduration: string;
  treatmenttype: string;
  restrictions: string;
  avatar: string;
  email: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pendente' | 'pago';
};
