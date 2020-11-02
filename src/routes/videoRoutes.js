import { Router } from 'express';
import videoController from "../controllers/videoController";
import {catchAsync} from "../middlewares/errors";

export default () => {
    const api = Router();

    // GET /userStories/:id
    api.get('/:id', catchAsync(videoController.findOne));

    // GET /userStories
    api.get('/', catchAsync(videoController.findAll));

    // POST /userStories
    api.post('/', catchAsync(videoController.create));

    // PUT /userStories/:id
    api.put('/:id', catchAsync(videoController.update));

    // DELETE /userStories/:id
    api.delete('/:id', catchAsync(videoController.remove));

    api.get('/story', (req, res) => {
        res.sendFile(__dirname + 'addUserStory.html')
    })

    return api;
}