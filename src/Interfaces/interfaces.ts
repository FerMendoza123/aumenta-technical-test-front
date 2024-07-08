export interface Product {
    id : number,
    name : string,
    price : number,
    isTaxesFree : boolean
}

export interface AddedProduct{
    productId: number,
    amount : number
}

export interface Purchase{
    id : number,
    finished : boolean
    purchaseProducts : PurchaseProduct[]
}

export interface PurchaseProduct{
    amount : number
    product : Product
}

export interface Ticket{
    taxes: number,
    total: number,
    purchaseProducts: TicketPurchaseProduct[]
}

export interface TicketPurchaseProduct{
    amount : number
    product : TicketProduct
}

export interface TicketProduct {
    name : string,
    price : number,
    finalPrice : number,
}