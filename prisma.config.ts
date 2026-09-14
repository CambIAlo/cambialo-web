import 'dotenv/config';
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    // Si process.env falla, usará el texto directamente y no dará error
    url: process.env.DATABASE_URL || "postgresql://postgres:1234@localhost:5432/cambialo_db?schema=public",
  }
});