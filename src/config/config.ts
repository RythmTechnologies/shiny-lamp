import dotenv from "dotenv";

dotenv.config();

const config = {
  express: {
    baseURL: process.env.BASE_URL || "http://localhost:3000/",
    port: Number(process.env.PORT) || 3000,
  },
};

export default config;
