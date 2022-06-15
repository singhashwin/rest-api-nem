const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        },2000)
    })
}

//promise

// add(4,2).then((sum) =>{
//     console.log(sum)
//     add(sum,3).then((sum2) =>{
//         console.log(sum2);
//     })
// }).catch((e) => {
//     console.log(e)
// })


//promise chaining

add(2,5).then((sum) => {
    console.log(sum)
    return add(sum,11)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2,11)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})