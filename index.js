
import { configDotenv } from 'dotenv'
configDotenv()
console.log(`Hello ${process.env.API_KEY}`)