import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser';
import {addressesRouter} from './routes/addresses-router';
import {productsRouter} from './routes/products-router';

const app = express()

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)



const port = process.env.PORT || 3000
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Samurai')
})
app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


// const startApp = async () => {
//     await runDb()
//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`)
//     })
// }
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
