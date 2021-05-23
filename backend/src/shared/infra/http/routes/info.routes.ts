import Router from "express";

const infoRoutes = Router();

infoRoutes.get("/", (request, response) => {
  return response.json({
    API: "DesafioPublicSoft",
    Version: "1.0.1",
  });
});

export default infoRoutes;
