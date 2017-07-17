import { ExpositoClientOptions } from './lib/exposito-client-options'
import config from './config'

import { Wallets } from './lib/wallets'
import { PeriodicPayments } from './lib/periodic-payments'
import { RepoStatsProvider } from './lib/repo-stats'
import { Instances } from './lib/instances'



export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url

        this.wallets = new Wallets(opts)
        this.periodicPayments = new PeriodicPayments(opts)
        this.repoStats = new RepoStatsProvider(opts)
        this.instances = new Instances(opts)
    }

    instances: Instances
    wallets: Wallets
    periodicPayments: PeriodicPayments
    repoStats: RepoStatsProvider



    getVersion() { return this.version }
    getUrl() { return this.url }


    protected version: string
    protected url: string

}




