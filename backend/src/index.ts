import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser';

const app = express()

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


const testMiddleware = (req: Response, res: Request, next: NextFunction) => {
    //@ts-ignore
    req.test = 'Hello i am Test'
    next()
}

const authGardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '123') {
        next()
    } else {
        res.send(401)
    }
}

let requestCounter = 0

const requestCounterMiddleware = (req: Response, res: Request, next: NextFunction) => {
    requestCounter++
    next()
}

app.use(requestCounterMiddleware)
app.use(testMiddleware)
app.use(authGardMiddleware)


const port = process.env.PORT || 3000


app.get('/products', (req: Request , res: Response) => {
    //@ts-ignore
    const test = req.test
    res.send({value: test + 'from users???' + requestCounter})
})


app.get('/users', (req: Request , res: Response) => {
    //@ts-ignore
    const test = req.test
    res.send({value: test + 'from users???' + requestCounter})
})


// app.use('/products', productsRouter)
// app.use('/addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})