import express from "express";
import cors from 'cors'
import { resolve } from 'path'
import MPlayer from 'mplayer'


const player = new MPlayer()
const app = express()
const PORT = 3000

app.use(cors())

app.get("/ping", (req, res) => res.end("p99999oong"))
app.get("/start", (req, res) => {
    player.openFile(resolve(process.cwd(), 'test.wav'))
    res.status(200).end("Playing")
})
app.get("/play", (req, res) => {
    player.play()
    res.status(200).end("Playing")
})
app.get("/pause", (req, res) => {
    player.pause()
    res.status(200).end("Pausing")
})

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );