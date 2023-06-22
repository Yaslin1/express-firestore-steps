//Line 2-4 installed modules from terminal and assigning it a variable.
import express from "express" 
import cors from "cors"
import { getCandy, addNewCandy } from "./src/candy.js"

const PORT = 3000 //choosing the port 

const app = express() //running express and the return function will be contained in app. API 
app.use(cors()) //run method called use that has a paramater of cors. Request from different origins. 
app.use(express.json()) //using cors and json on ever file. 

//13-14 are the routes. / at the end of the website.
app.get("/candy", getCandy) //make get request it will run the getCandy function
app.post("/candy", addNewCandy) //make get request it will run the addNewCandy function

app.listen(PORT, () => { //On PORT 3000 listen for request
console.log(`/Listening on http://localhost:${PORT}...`) //Call back it will run that function
})


