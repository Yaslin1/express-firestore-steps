import { db } from "./connectDb.js" //created db which is connect to firestore which is in the connectDb folder

export async function getCandy(req,res) { //express give two paramaters that the user req and res is to send your response
    const candy = await db.collection('candy').get()
    //use databse connect and what collection you want to work with and what you want to do which is get somehting from it. 
    //Since there is no specific information in get it will provide you everything
    //What ever comes back store it variable candy
        .catch(err => { //if there is an error then .catch will run a call back 
            //.catch will pass in the information as an error
            res.status(500).send({succes: false, message: err}) //res is response, status is setting status to the response,.send is what is going to be sent. NO EMPTY STRING.
            return //function stop running. Will stop call back function.
        })
    //Now let's clean up candy
    const candyArray = candy.docs.map(doc => ({id: doc.id, ...doc.data()} )) //firestore returns everything in a docs and loops through an a array and then return an array. New array contains id and the actual data. This is required because firestore is not readable.
    res.send(candyArray) //responding to a call of the api and send that information back.
}

//CRUD

export async function addNewCandy(req,res) {  //This function express give two paramaters that the user req and res is to send your response
    const newCandy = req.body //saving req.body  in newCandy 
    await db.collection('candy').add(newCandy) //add to database
    .catch(err => { ////if there is an error then .catch will run a call back 
        //.catch will pass in the information as an error
        res.status(500).send({success:false, message: err})//res is response, status is setting status to the response,.send is what is going to be sent. NO EMPTY STRING.
        return //function stop running. Will stop call back function.
    })
    //res.status(201.send({ success: true, message: "candy added"})
    getCandy(req,res) //Calling the function above.
}