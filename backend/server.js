import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`server running at port ${process.env.PORT}`)
})
