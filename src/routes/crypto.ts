import express from "express";
import { readCryptoData, getCryptoData } from "../controllers/crypto";

const router = express.Router();

router.get("/", readCryptoData);
router.get("/:symbol", getCryptoData);

export default router;
