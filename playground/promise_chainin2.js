require('../src/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('61756d188c619d8f2a5ef0e9').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:false})
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('61756d188c619d8f2a5ef0e9').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})