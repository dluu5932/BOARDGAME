require('dotenv').config();

module.exports = {
  development: {
    client: 'pg', // Supabase chạy trên Postgres
    connection: process.env.DATABASE_URL, 
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg', // Supabase chạy trên Postgres
    connection: process.env.DATABASE_URL, 
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

