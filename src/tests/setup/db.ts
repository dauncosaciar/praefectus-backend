import mongoose from "mongoose";

export const connectTestDatabase = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
};

export const disconnectTestDatabase = async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};
