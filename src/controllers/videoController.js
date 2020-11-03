import Video from '../models/video';

export default {

    async findOne(req, res, next) {
        const video = await Video.findOne({ id: req.params.id });
        if (!video) return next();
        return res.status(200).send({ data: video });
    },

    async findAll(req, res) {
        const video = await Video.find();
        return res.status(200).send({ data: video});
    },

    async create(req, res) {
        const video = await new Video({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            videoURL: req.body.videoURL,
            uploadedBy: req.body.uploadedBy,
            contactEmail: req.body.contactEmail
        }).save();

        return res.status(201).send({ data: video, message: 'video created.'});
    },

    async update(req, res, next) {
        const video = await Video.findOne({ id: req.params.id})
        if (!video) return next();

        video.id = req.body.id;
        video.title = req.body.title;
        video.description = req.body.description;
        video.tag = req.body.tag;
        video.videoURL = req.body.videoURL;
        video.uploadedBy = req.body.uploadedBy;
        video.contactEmail = req.body.contactEmail;
        await video.save();

        return res.status(200).send({ data: video, message: 'video updated'})
    },

    async remove(req, res, next) {
        const video = await Video.findOne({ id: req.params.id });
        if (!video) return next();
        video.remove();
        return res.status(200).send({ data: video, message: 'video has been removed' });
    }

}