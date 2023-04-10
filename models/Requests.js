const mongoose = require("mongoose");

const ReqSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numofpeople:{
        type:Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    chapterName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    stat: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},{
    collection: 'requests'
})

module.exports = Req = mongoose.model('requests', ReqSchema);