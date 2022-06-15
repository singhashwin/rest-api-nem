const express = require('express')
require('./mongoose')
//const User = require('./models/user')
//const Task = require('./models/task')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
 
const multer = require('multer')

// const upload = multer({
//     dest:'images',
//     limit:1000000,
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined,true)
//     }
// })

// const errorMiddleware = (req,res,next) =>{
//     throw new Error('From my middleware')
// } 

// app.post('/upload',upload.single('upload'),(req,res) => {
//     res.send();
// }, (err,req,res,next) => {
//     res.status(400).send()
// })

// // app.use((req,res,next) => {
// //     if(req.method == 'GET'){
// //         res.send('Request methods are disabled')
// //     }
// //     else{
// //         next()
// //     }
// //     ;
// // })

// //site is at maontaenence maode

// // app.use((req,res,next) => {
// //     res.status(503).send('Site is at maintanence mode...Try again later')
// //  })

app.use(express.json())

app.use(userRouter)

app.use(taskRouter)


app.listen(port,() => {
console.log('Server is up on the port '+port);
}) 


