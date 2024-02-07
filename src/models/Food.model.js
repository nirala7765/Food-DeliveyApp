const {Schema, default: mongoose} = require("mongoose");



const FoodsSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        price:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: false,
        },
        foodtype:{
            type: String,
            required: true,
            
        },
        
       rating:{
            type: String,
            required: true,
        },

        resturantId:{
            type: String,
            required: true,
        }

    },


    {
        toJSON:{
            transform(doc,ret){
                
                delete ret.__v;
            }
        }
    }

);
    



const Foods = mongoose.model("Foods",FoodsSchema);


module.exports = Foods;

