import { Router } from 'express';
import videoController from "../controllers/videoController";
import {catchAsync} from "../middlewares/errors";

export default () => {
    const api = Router();

    // GET /userStories/:id
    api.get('/:id', catchAsync(videoController.findOne));

    // GET /userStories
    api.get('/', catchAsync(videoController.findAll));

    // POST /api/video
    api.post('/add', catchAsync(videoController.create));

    // PUT /video/:id
    api.put('/:id', catchAsync(videoController.update));

    // DELETE /userStories/:id
    api.delete('/:id', catchAsync(videoController.remove));

    return api;
}