import express from "express";
import cors from 'cors'
import { resolve } from 'path'
import MPlayer from 'mplayer'

type Status = {
    muted: Boolean
    playing: Boolean
    volume: Number // percent
    duration: Number // seconds
    fullscreen: Boolean
    subtitles: Boolean
    filename: String
    title: String // currently playing stream title - valid only for radio streams
}

const player = new MPlayer()
const app = express()
const PORT = 3000

app.use(cors())

app.get("/ping", (req, res) => res.end("pong"))

app.get("/play", (req, res) => {
    if (!(status?.filename)) {
        player.openFile(resolve(process.cwd(), 'test.wav'))
    }
    player.play()
    res.status(200).end("Playing")
})
app.get("/pause", (req, res) => {
    player.pause()
    res.status(200).end("Pausing")
})

app.get('/status', (req, res) => res.json(status || {}))

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );