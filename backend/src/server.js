import express from "express";
import path from "path";
import fs from 'fs';
import { fileURLToPath } from "url";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

try {
  await connectDB();
  console.log("Database connection established.");
} catch (error) {
  console.error("💥 Error connecting to database:", error);
}


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendBuildPath = path.join(__dirname, '..', '..', 'frontend', 'dist');

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "api is up and running",
    is_production: process.env.NODE_ENV === "production",
    env_value: process.env.NODE_ENV
  });
});


app.get("/debug-path", (req, res) => {

  res.json({
    index_html_exists: fs.existsSync(path.join(frontendBuildPath, "index.html")),
    path_attempted: frontendBuildPath,
    filename: __filename,
    dirname: __dirname
  });
});

app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);


// if (process.env.NODE_ENV === "production") {
//   // app.get("/", (req, res) => {
//   //   return res.sendFile(path.join(frontendBuildPath, "index.html"));
//   // });

//   app.get("*", (req, res) => {
//     return res.sendFile(path.join(frontendBuildPath, "index.html"));
//   });
// }

if (process.env.NODE_ENV === "production") {

  app.use((req, res, next) => {
    if (req.path.includes('.')) {
      return next();
    }
    next();
  });

  app.get("/", (req, res) => {
    return res.sendFile(path.join(frontendBuildPath, "index.html"));
  });

  app.get("*", (req, res) => {
    return res.sendFile(path.join(frontendBuildPath, "index.html"));
  });
}

export default app;