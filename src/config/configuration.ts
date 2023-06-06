export default () => ({
  port: parseInt(process.env.PORT, 10),
  psql_database: {
    host: process.env.PSQL_HOST,
    port: parseInt(process.env.PSQL_PORT, 10),
    username: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DATABASE,
  },
});
