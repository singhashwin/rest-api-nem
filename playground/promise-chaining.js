require('../src/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('61ac58d13b658a3c5e270d13',{age:2}).then((user) => {
    console.log(user);
    return User.countDocuments({age:2})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})


// const updateAgeAndCount = async (id,age) => {
//     const user = await User.findByIdAndUpdate(id,{age})
//     const count = await User.countDocuments({age})
    
//     return count
// }

// updateAgeAndCount('61756b56104d8f2c0cc6d356', 55).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })