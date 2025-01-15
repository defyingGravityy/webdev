console.log('This is pr0mises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was supprting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i'm done ")
            resolve("harry")
        }, 3000);
    }
})
prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}
)

