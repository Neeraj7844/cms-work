import express from "express";

import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";
import achievementRoutes from "./routes/achievementRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import formRoutes from "./routes/formRoutes.js";

const app = express();
// MIDDLEWARE
app.use(cors());

app.use(express.json());




// ROUTES
app.use(
  "/api/auth",
  authRoutes
);




app.use(
  "/api/hero",
  heroRoutes
);
app.use(
  "/api/achievement",
  achievementRoutes
);
app.use(
  "/api/feature",
  featureRoutes
);
app.use(
  "/api/service",
  serviceRoutes
);
app.use(
  "/api/progress",
  progressRoutes
);
app.use(
"/api/testimonial",
testimonialRoutes
);
app.use(
"/api/project",
projectRoutes
);
app.use("/api/form", formRoutes);
app.use("/api/about",aboutRoutes);
export default app;