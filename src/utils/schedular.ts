import cron, { schedule } from "node-cron";
import { readCryptoData } from "../controllers/crypto";

export const Scheduler = () => {
//schedule to run after every 10 seconds
  const schedule = cron.schedule("*/10 * * * * *", async function () {
    console.log("Cron started successfully")
     await readCryptoData();
  });
};

