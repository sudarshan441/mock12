const mongoose = require("mongoose");
function sudarshan(){
    return mongoose.connect(`mongodb+srv://sudarshan:sudarshan@cluster0.ydgncyl.mongodb.net/mock12`);
}
module.exports = sudarshan;