import { Document } from "mongoose";

export interface ICrypto {
  name: string;
  symbol: string;
  price: number;
  rank: number;
}

export interface ICryptoDocument extends ICrypto, Document {}
