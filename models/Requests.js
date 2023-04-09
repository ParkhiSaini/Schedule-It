const mongoose = require("mongoose");

const ReqSchema = mongoose.Schema({
    id: {
        type: Number
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
    
    },
    stat: {
        type: String,
    
    },
    userId: {
        type: String,
    
    }
},{
    collection: 'requests'
})

module.exports = Req = mongoose.model('requests', ReqSchema);