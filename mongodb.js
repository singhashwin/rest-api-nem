//CRUD operation 

//const mongodb = require('mongodb')
const {MongoClient,ObjectID} = require('mongodb')
//const path = require('mongodb/lib/db')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb:// 127.0.0.1:3000'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error,client)=> {
      if(error){
        console.log('unable to connect to database');
      }
      const db = client.db(databaseName)

      db.collection('tasks').insertMany([

            {
                description: 'Clean the house',
                completd:true
            },
            {
                description: 'renew the inspection',
                completd:false
            },
            {
                description: 'go to bar',
                completd:true
            },
            {
                description: 'study 5 hr',
                completd:false
            }
      ],(error,result) => {
                if(error) {
                    console.log('unable to connect');
                } 
                console.warn(result);
            })
       
    // db.collection('users').findOne({_id: new ObjectID("6170fe76542ce8e894bc128b")},(error,user)=>{
    //     if(error){
    //         console.log('error');
    //     }
    //     else{
    //         console.log(user);
    //     }
    // })

    // db.collection('users').find({age:'25'}).toArray((error,user) => {

    //     if(error){
    //         console.log('unable to connect');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({age:'25'}).count((error,cnt) => {

    //     if(error){
    //         console.log('unable to connect');
    //     }
    //     console.log(cnt);
    // })

    // db.collection('tasks').find({ completd:true }).toArray((error,result) => {
    //     console.log(result);
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("617166a1e1720084c13855d4")
    // }, { 
    //     $set : {
    //         name:'Mike'
    //     }
    // })

    // updatePromise.then( (result) => {
    //     console.log(result);
    // }).catch( (error)=> {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completd:true
    // },
    // {
    //     $set : {
    //         completd:false
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('tasks').deleteMany({
    //     description:'Clean the house'
    // }).then( (result) => {
    //     console.log(result);
    // }).catch( (error) => {
    //     console.log(error);
    // })

})


