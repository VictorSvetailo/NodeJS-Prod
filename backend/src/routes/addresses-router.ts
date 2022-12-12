import {Request, Response, Router} from 'express';
import {addressesRepository} from '../repositories/addresses-repository';

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    const fetchAddresses = addressesRepository.fetchAddresses()
    res.send(fetchAddresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const findAddresses = addressesRepository.findAddressesById(+req.params.id)
    if (findAddresses) {
        res.send(findAddresses)
    } else {
        res.send(404)
    }
})