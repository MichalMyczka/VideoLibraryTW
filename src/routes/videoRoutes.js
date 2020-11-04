import { Router } from 'express';
import videoController from "../controllers/videoController";
import {catchAsync} from "../middlewares/errors";

export default () => {
    const api = Router();

    // GET /videos/id
    api.get('/:id', catchAsync(videoController.findOne));

    // GET /videos
    api.get('/', catchAsync(videoController.findAll));

    // POST /videos
    api.post('/', catchAsync(videoController.create));

    // PUT /videos/id
    api.put('/:id', catchAsync(videoController.update));

    // DELETE /videos/id
    api.delete('/:id', catchAsync(videoController.remove));

    return api;
}