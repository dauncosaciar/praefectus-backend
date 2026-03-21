import mongoose from "mongoose";

export const connectTestDatabase = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
};

export const disconnectTestDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }

  await mongoose.connection.close();
};
