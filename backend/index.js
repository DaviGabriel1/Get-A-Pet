const express = require("express")
const cors = require("cors")

const app = express();

//config json 
app.use(express.json())

//solve CORS
app.use(cors({credentials:true,origin:`http://localhost:3000`}))

//public folder for images

app.use(express.static("public"))

//routes



const port = 5000;

app.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})