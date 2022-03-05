// CREATE TABLE `users` (
//     `id` int PRIMARY KEY AUTO_INCREMENT,
//     `userName` varchar(255),
//     `password` varchar(255),
//     `created_at` timestamp,
//     `address` varchar(255),
//     `privateKey` varchar(255)
//   );

const userSchema = mongoose.Schema({
 
    userName: {
        type : String,
        trim : true,
        unique : 1
    },

    password: { 
        type: String,
        minlength: 5
    },

    created_at: {
        type: Number
    },

    address: {
        type: String
    },

    privateKey: {
        type: String
    }

})

const User = mongoose.model('User', userSchema)
module.exports = { User }
