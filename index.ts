import { ExpositoClientOptions } from './lib/exposito-client-options'

import { Wallets } from './lib/wallets'
import { PeriodicPayments } from './lib/periodic-payments'

export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || 'v1'
        this.url = opts.url || 'https://api.exposito.io'

        this.wallets = new Wallets(opts)
        this.periodicPayments = new PeriodicPayments(opts)
    }

    wallets: Wallets
    periodicPayments: PeriodicPayments


    protected version: string
    protected url: string


}

