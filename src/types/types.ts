export type OrderType = {
    id: number
    coinName: string
    imgPath: string
    amount: number
    date: string
    invoiceNumber: string
    invoiceContent: string
    clientName: string
    clientEmail: string
    network: string
    status: 'Confirmed' | 'Time out'
    valueInUSD: number
}