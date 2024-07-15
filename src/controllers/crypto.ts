import crypto from "../models/crypto";
import axios from "axios";
import { Request, Response } from "express";

//api to store crypto data 
export const readCryptoData = async () => {
  try {
    let options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
    };

    let result = await axios(options);

    let data = result.data.data;

    for (let i = 0; i < data.length; i++) {
      await crypto.create({
        name: data[i].name,
        symbol: data[i].symbol,
        price: data[i].priceUsd,
        rank: data[i].rank,
      });
    }
    return;
  } catch (error) {
    return error
  }
};

//api to get crypto data
export const getCryptoData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params
   
    const cryptoData = await crypto
      .find({ symbol: { $regex: symbol, $options: "i" } })
      .sort({ createdAt: -1 })
      .limit(20);
   
    return res.status(200).send({ success: true, data: cryptoData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error });
  }
};
