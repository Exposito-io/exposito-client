import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { PeriodicPayment, PeriodicPaymentOptions } from 'models'
import { options } from './rest-options'



export class PeriodicPayments {

    constructor(api) {
        this.api = api
    }

    
    async createPeriodicTransfer(periodicTransfer: PeriodicPaymentOptions): Promise<string> {
        try {
            let result = await this.api.post(`periodic-payments`, periodicTransfer)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }

    async getPeriodicPayment(id: string) {
         try {
            let result = await this.api.get(`periodic-payments/${id}`)
            if (result.error) {
                throw('Error')
            }
            else
                return PeriodicPayment.fromJSON(result)
        } catch(e) {
            throw(e)
        }
    }

    async getPeriodicPaymentsForWallet(walletId: string): Promise<PeriodicPayment[]> {
        try {
           let result = await this.api.get(`periodic-payments/byWallet/${walletId}`)
           if (result.error) {
               throw('Error')
           }
           else
               return result.map(PeriodicPayment.fromJSON)
       } catch(e) {
           throw(e)
       }
   }    

    protected api
}