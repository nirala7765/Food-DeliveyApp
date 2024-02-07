const {Schema, default: mongoose} = require("mongoose");



const ResturantOwnerSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        ownerName:{
            type: String,
            required: false,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required:false,
            
        },
        phone:{
            type: String,
            required: false,
        },
        rating:{
            type: String,
            required: true,

        },
        serviceAvailable:{
            type: Boolean,
        },
        foods:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref:"Foods",
            }
        ]

    },


    {
        toJSON:{
            transform(doc,ret){
                delete ret.password;
                delete ret.__v;
            }
        }
    }

);
    



const Resturant = mongoose.model("Resturant",ResturantOwnerSchema);


module.exports = Resturant;

