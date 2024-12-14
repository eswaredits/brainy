import express from 'express';
import jwt from "jsonwebtoken"
import { dbConnection } from './db';
import { authRouter } from './routes/authRouter';
import { contentRouter } from './routes/contentRouter';
import { brainRouter } from './routes/brainRouter';
const app = express()


dbConnection()
app.use(express.json())
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/content",contentRouter)
app.use("api/v1/brain",brainRouter)