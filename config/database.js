module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-228-99-58.eu-west-1.compute.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d81j8hu79sn5n8"),
        username: env("DATABASE_USERNAME", "pupvgpyehakqst"),
        password: env("DATABASE_PASSWORD", "643f7a9e8cc9d7edaa64873ff61f410fa13c4bee59f2e01797889fb0e7197164"),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
      },
    },
  },
});
