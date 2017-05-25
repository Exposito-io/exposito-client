import { ExpositoClientOptions } from './lib/exposito-client-options'
import * as config from 'config'

import { Wallets } from './lib/wallets'
import { PeriodicPayments } from './lib/periodic-payments'


export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.get('version')
        this.url = opts.url || config.get('url')

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

