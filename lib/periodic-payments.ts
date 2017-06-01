import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { PeriodicPayment } from 'models'



export class PeriodicPayments {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url
        this.api = Rest(`${this.url}/${this.version}`)
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


    protected version: string
    protected url: string
    protected api
}