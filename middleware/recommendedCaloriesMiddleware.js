const { MongoClient } = require("mongodb");

const connectToDatabase = async (mongoURI) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }

  return client;
};

const closeDatabaseConnection = async (client) => {
  try {
    await client.close();
    console.log("Connection to MongoDB closed");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
};

const withDatabaseConnection = (handler) => {
  return async (req, res, next) => {
    const mongoURI = process.env.MONGO_URI;  // Ajusta según tu configuración de entorno

    let client;

    try {
      client = await connectToDatabase(mongoURI);
      await handler(req, res, next, client);
    } catch (error) {
      console.error("Error in database middleware:", error);
      next(error); 
    } finally {
      if (client) {
        await closeDatabaseConnection(client);
      }
    }
  };
};

module.exports = { withDatabaseConnection };