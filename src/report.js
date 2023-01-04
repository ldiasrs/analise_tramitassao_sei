import { parseData } from "./parser.js";
import dotenv from 'dotenv';

dotenv.config()
console.log(`Reading file: ${process.env.INPUT_FILE}`)
parseData(process.env.INPUT_FILE)
