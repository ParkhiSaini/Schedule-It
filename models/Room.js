const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
    roomNo: {
        type: Number,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    maxOccupancy: {
        type: Number,
        required: true
    }
},{
    collection: "rooms"
})

module.exports = Room = mongoose.model('room', RoomSchema);