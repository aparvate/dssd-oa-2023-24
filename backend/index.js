import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "http://localhost:5500"
}))

app.get("/", (req, res) => {
    res.sendFile('creditcard_json.json', { root: '.'}).status(200)
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server listening on port ${port} 🚀`))