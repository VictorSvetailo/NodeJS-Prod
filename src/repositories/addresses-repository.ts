const addresses = [{id: 1, value: 'russia'}, {id: 2, value: 'Moscow'}]


export const addressesRepository = {
    fetchAddresses() {
        return addresses
    },
    findAddressesById(id: number) {
        let address = addresses.find(a => a.id == id)
        return address
    }
}
