import { RequestHandler } from 'express'
import Video from '../models/Video';


export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url })
    if (videoFound) {
        res.status(301).json({
            status: 'error',
            msg: 'The url already exists'
        })
    }
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.status(200).json({
        status: 'success',
        savedVideo
    }
    )
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json({
            status: 'success',
            videos
        })
    } catch (error) {
        res.json({
            status: 'error',
            msg: error
        })
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) {
        res.status(204).json({
            status: 'error',
            msg: 'The video does not exist'
        })
    }
    res.status(200).json({
        status: 'success',
        videoFound
    })
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) {
        res.status(204).json({
            status: 'error',
            msg: 'The video does not exist'
        })
    }
    return res.json({
        status: 'success',
        msg: 'The video was deleted'
    })
}

export const updateVideo: RequestHandler = async (req, res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!videoUpdate) {
        res.status(203).json({
            status: 'error',
            msg: 'The video does not exist'
        })
    }
    res.json({
        status: 'success',
        videoUpdate
    })
}