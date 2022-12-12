const addresses = [{id: 1, value: 'russia'}, {id: 2, value: 'Essentuky'}]


export const addressesRepository = {
    fetchAddresses() {
        return addresses
    },
    findAddressesById(id: number) {
        let address = addresses.find(a => a.id == id)
        return address
    }
}

// createProduct(title: string | null | undefined) {
//     if (title) {
//         const newProduct = {
//             id: +(new Date()),
//             title: title
//         }
//         products.push(newProduct)
//         return newProduct
//     }
// },
// updateProduct(id: number, title: string) {
//     let product = products.find(p => p.id === id)
//     if (product) {
//         product.title = title
//         return true
//     } else {
//         return false
//     }
// },
// deleteProduct(id: number) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id === id) {
//             products.splice(i, 1);
//             return true
//         }
//     }
//     return false
// }
