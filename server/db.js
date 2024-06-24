const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb+srv://santapan:a2GGyI04YPGzdQte@cluster0.zvpduyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/chat"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

module.exports = Connection