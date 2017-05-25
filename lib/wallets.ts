import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import * as config from 'config'


export class Wallets {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.get('version')
        this.url = opts.url || config.get('url')
        this.api = Rest(`${this.url}/${this.version}`)
    }

    
    async createWallet(): Promise<string> {
        try {
            let result = await this.api.post(`${this.api}/wallets`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }


    protected version: string
    protected url: string
    protected api
}