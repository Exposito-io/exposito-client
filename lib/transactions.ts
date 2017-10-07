import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { Transaction, CreatePaymentRequest } from 'models'
import { options } from './rest-options'



export class Transactions {

    constructor(api) {
        this.api = api
    }

    /*
    async createPeriodicPayment(): Promise<string> {
        try {
            let result = await this.api.post(`wallets`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }*/

    async createTransaction(request: CreatePaymentRequest): Promise<Transaction> {
        try {
            let result = await this.api.post(`transactions/`, request)
            if (result.error) {
                throw('Error')
            }
            else
                return Transaction.fromJSON(result.res)
        } catch(e) {
            throw(e)
        }        
    }

    async getTransactionsForWallet(id: string): Promise<Transaction[]> {
         try {
            let result = await this.api.get(`transactions`, { wallet: id})
            if (result.error) {
                throw('Error')
            }
            else
                return (result as any[]).map(Transaction.fromJSON)
        } catch(e) {
            throw(e)
        }
    }

    protected api
}