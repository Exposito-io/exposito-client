import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { 
    SendOptions, 
    GetWalletOptions, 
    CreatePaymentRequest, 
    ExpositoWallet, 
    ExpositoWalletOptions,
    Wallet 
} from 'models'
import { options } from './rest-options'



export class Wallets {

    constructor(api) {
        this.api = api
    }


    async createWallet(walletOptions: ExpositoWalletOptions): Promise<Wallet> {
        try {
            let result = await this.api.post(`wallets`, walletOptions)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }

    async getWallet(opts: GetWalletOptions): Promise<Wallet> {
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

    async getWallets(): Promise<Wallet[]> {
         try {
            let result = await this.api.get(`wallets`)
            if (result.error) {
                throw('Error')
            }
            else
                return result.wallets
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

    protected api
}

