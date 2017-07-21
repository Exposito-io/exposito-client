import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { PeriodicPayment } from 'models'
import { options } from './rest-options'



export class PeriodicPayments {

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

    protected api
}