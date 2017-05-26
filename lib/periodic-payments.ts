import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'



export class PeriodicPayments {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || 'v1'
        this.url = opts.url || 'https://api.exposito.io'
        this.api = Rest(`${this.url}/${this.version}`)
    }


    protected version: string
    protected url: string
    protected api
}