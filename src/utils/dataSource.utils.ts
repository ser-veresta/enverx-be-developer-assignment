import { DataSource } from 'typeorm';

// Database Configuration
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [process.env.POSTGRES_ENTITY || 'src/entities/*.entity.ts'],
  subscribers: [],
  migrations: [],
});
