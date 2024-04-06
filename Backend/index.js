const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const sqlconn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Akhil@4802",
    database:"testing"
})

sqlconn.connect((err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Database is Connected");

    app.post("/Contactdata",async(req,res)=>{
        const SQLQuery = "INSERT INTO PortfolioForm (Name,Email,Phno,Message) VALUES (?,?,?,?)";
        const values = [req.body.username, req.body.email,req.body.Phno,req.body.Message];
        sqlconn.query(SQLQuery,values,(err,data)=>{
            if(err){
                return res.json(err)
            }
            return res.json(data)
        })
    })
})

app.listen(4000,async(req,res)=>{
    console.log("server runs at 4000 Port")
})