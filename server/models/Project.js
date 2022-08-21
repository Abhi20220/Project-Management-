const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: string, 
    },
    description: {
        type: string, 
    },
    Status: {
        type: string, 
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }
});

module.exports = mongoose.model('Project', ClientSchema);