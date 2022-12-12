import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser';
import {addressesRouter} from './routes/addresses-router';
import {productsRouter} from './routes/products-router';

const app = express()

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)



const port = process.env.PORT || 3000
app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// const testMiddleware = (req: Response, res: Request, next: NextFunction) => {
//     //@ts-ignore
//     req.test = 'Hello i am Test'
//     next()
// }
//
// const authGardMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     if (req.query.token === '123') {
//         next()
//     } else {
//         res.send(401)
//     }
// }
//
// let requestCounter = 0
//
// const requestCounterMiddleware = (req: Response, res: Request, next: NextFunction) => {
//     requestCounter++
//     next()
// }
// //@ts-ignore
// app.use(requestCounterMiddleware)
// //@ts-ignore
// app.use(testMiddleware)
// app.use(authGardMiddleware)
//
//


//
// app.get('/products', (req: Request , res: Response) => {
//     //@ts-ignore
//     const test = req.test
//     res.send({value: test + 'from users???' + requestCounter})
// })
//
//
// app.get('/users', (req: Request , res: Response) => {
//     //@ts-ignore
//     const test = req.test
//     res.send({value: test + 'from users???' + requestCounter})
// })
