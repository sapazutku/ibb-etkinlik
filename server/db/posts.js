// post Schema for mongoDB
import mongoose from "mongoose";

// daha sonra başka alanlar da eklenebilir.
// konum(park)
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator:{
        type:String,
        required:true
    }
});  

const Post = mongoose.model("Post", postSchema);

export default Post;