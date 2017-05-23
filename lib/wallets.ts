import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'



export class Wallets {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || 'v1'
        this.url = opts.url || 'https://api.exposito.io'
        this.api = Rest(`${this.url}/${this.version}`)
    }


    protected version: string
    protected url: string
    protected api
}