const mongoose = require("mongoose");

const ReqSchema = mongoose.Schema({
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
    time: {
        type: String,
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
    status: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    expanded: {
        type: Boolean,
        required: true
    }
},{
    collection: 'requests'
})

module.exports = Req = mongoose.model('requests', ReqSchema);