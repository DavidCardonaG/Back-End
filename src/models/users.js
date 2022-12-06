const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10;
const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true,

    },
    username:{
        type:'string',
        required: true,
        unique: true
    },
    email:{
        type:'string',
        required: true,
    },
    password:{
        type:'string',
        required: true,
    }
})

userSchema.pre('save', function(){
    if(this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds, (error, hashedPassword) => {
            if(error){
                next(error);
            }else{
                document.password = hashedPassword;
                next();
            }

        })
    }else{
        next();
    }
})

userSchema.methods.isCorrectPassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err,same){

        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    })
}
module.exports = mongoose.model('User',userSchema);