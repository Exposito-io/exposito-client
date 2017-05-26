import { ExpositoClientOptions } from './lib/exposito-client-options'
import config from './config'

import { Wallets } from './lib/wallets'
import { PeriodicPayments } from './lib/periodic-payments'


export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url

        this.wallets = new Wallets(opts)
        this.periodicPayments = new PeriodicPayments(opts)
    }


    wallets: Wallets
    periodicPayments: PeriodicPayments


    getVersion() { return this.version }
    getUrl() { return this.url }


    protected version: string
    protected url: string

}

