import { Schema, model } from "mongoose";
import { ICryptoDocument } from "../types/crypto";

const cryptoSchema = new Schema<ICryptoDocument>(
  {
    name: {
      type: String,
    },
    symbol: {
      type: String,
    },
    price: {
      type: Number,
    },
    rank: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model<ICryptoDocument>("Crypto", cryptoSchema);
