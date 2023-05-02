import memeRouter from "../controllers/index.js";

const routes = [["meme", memeRouter]];

export const router = (app) => {
  routes.forEach(([path, controller]) => {
    app.use(`/api/v1/${path}`, controller);
  });
};
