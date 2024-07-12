import { Factura } from "../models/factura";

export const facturaData: Factura = {
    id: 1,
    name: 'Componentes de pc',
    client: {
        name: 'Jesus',
        lastName: 'Anaya',
        address: {
            country: "Mexico",
            city: 'Cordoba',
            street: 'Calle 42 and 7',
            number: 2
        }
    },
    company: {
        name: 'Pc Ser',
        fiscalNumber: 323635,
    },
    items: [
        {
            id: 1,
            product: 'Procesador Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Tarjeta madre gigabyte',
            price: 120,
            quantity: 1
        },
        {
            id: 3,
            product: 'SSD 240 gb',
            price: 50,
            quantity: 1
        },
        {
            id: 4,
            product: 'Gabinete balamrush',
            price: 50,
            quantity: 1
        },
    ]
}