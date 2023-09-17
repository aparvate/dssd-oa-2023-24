import express from "express"
import cors from "cors"
import fs from "fs";
import readline from "readline";

const app = express()

app.use(cors({
    origin: "http://localhost:5500"
}))

app.get("/", (req, res) => {
    const dates = [];
    const deaths = [];
    const filePath = "daily.csv";

    // Create a readable stream to read the CSV file line by line
    const read = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
    });

    let counter = 420;

    read.on("line", (line) => {
        if(counter >= 0){
            const values = line.split(",");
            dates.push(parseFloat(values[0]));
            deaths.push(parseFloat(values[12]));
        }
        counter--;
    });

    const data = [];
    data.push(dates);
    data.unshift(deaths);

    read.on("close", () => {
        // Send the parsed data as a JSON response
        res.json(data);
    });
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server listening on port ${port} 🚀`))