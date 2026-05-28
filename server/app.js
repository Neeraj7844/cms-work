// app.js

import express from "express";
import cors from "cors";
import path from "path";

/* ROUTES */

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
import neabRoutes from "./routes/neabRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

/* =========================================
   MIDDLEWARE
========================================= */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* =========================================
   STATIC UPLOADS
========================================= */

app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "uploads")
  )
);
/* =========================================
   ROUTES
========================================= */

/* AUTH */

app.use(
  "/api/auth",
  authRoutes
);

/* HERO */

app.use(
  "/api/hero",
  heroRoutes
);

/* ACHIEVEMENT */

app.use(
  "/api/achievement",
  achievementRoutes
);

/* FEATURE */

app.use(
  "/api/feature",
  featureRoutes
);

/* SERVICE */

app.use(
  "/api/service",
  serviceRoutes
);

/* PROGRESS */

app.use(
  "/api/progress",
  progressRoutes
);

/* TESTIMONIAL */

app.use(
  "/api/testimonial",
  testimonialRoutes
);

/* PROJECT */

app.use(
  "/api/project",
  projectRoutes
);

/* FORM */

app.use(
  "/api/form",
  formRoutes
);

/* ABOUT */

app.use(
  "/api/about",
  aboutRoutes
);

/* NEAB */

app.use(
  "/api/neab",
  neabRoutes
);

/* BLOG */

app.use(
  "/api/blog",
  blogRoutes
);

/* =========================================
   DEFAULT ROUTE
========================================= */

app.get("/", (req, res) => {

  res.send("API Running");

});

/* =========================================
   EXPORT
========================================= */

export default app;