import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { SendOptions, GetWalletOptions, CreatePaymentRequest } from 'models'
import { options } from './rest-options'



export class Wallets {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url
        this.api = Rest(`${this.url}/${this.version}`, options)
    }


    async createWallet(): Promise<string> {
        try {
            let result = await this.api.post(`wallets`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }

    async getWallet(opts: GetWalletOptions) {
         try {
            let result = await this.api.get(`wallets/${opts.walletId}`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }

    async getWallets() {
         try {
            let result = await this.api.get(`wallets`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }


    async getAddresses(opts) {
         try {
            let result = await this.api.get(`wallets/${opts.id}/addresses`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }


    async send(opts: CreatePaymentRequest) {
        try {
             // TODO
            let result = await this.api.post(`wallets/${opts.sourceWalletId}/send`, opts)
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

