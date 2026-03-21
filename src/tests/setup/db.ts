import mongoose from "mongoose";

export const connectTestDatabase = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
};

export const clearTestDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

export const disconnectTestDatabase = async () => {
  await mongoose.connection.close();
};
