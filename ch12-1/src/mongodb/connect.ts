import mongoose from "mongoose";

export const connect = (mongoUrl: string = "mongodb://localhost:27017") => {
  mongoose.connect(mongoUrl, { useUnifiedTopology: true },)
}

