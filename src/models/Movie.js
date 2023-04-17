import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String, 
        require: true
    },
    likes: {
        type: Number, 
        default: 0
    },
    dateOfReleased: {
        type: String,
        requiere: true
    },
    image: {
        type: String,
        requiere: true
    }
})

export default model('movies_catalog', movieSchema)