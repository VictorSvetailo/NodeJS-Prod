import express, {Request, Response} from 'express'


const app = express()
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello World!';
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})