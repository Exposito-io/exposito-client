import { ExpositoClientOptions } from './lib/exposito-client-options'
import config from './config'
import 'isomorphic-fetch'
import * as Rest from 'fetch-on-rest'
import { Wallets } from './lib/wallets'
import { Projects } from './lib/projects'
import { Users } from './lib/users'
import { PeriodicPayments } from './lib/periodic-payments'
import { RepoStatsProvider } from './lib/repo-stats'
import { Instances } from './lib/instances'
import { options } from './lib/rest-options'



export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url
        this.api = Rest(`${this.url}/${this.version}`, options(opts.token))

        this.wallets = new Wallets(this.api)
        this.projects = new Projects(this.api)
        this.users = new Users(this.api)
        this.periodicPayments = new PeriodicPayments(this.api)
        this.repoStats = new RepoStatsProvider(this.api)
        this.instances = new Instances(this.api)
    }

    instances: Instances
    wallets: Wallets
    periodicPayments: PeriodicPayments
    projects: Projects
    repoStats: RepoStatsProvider
    users: Users



    getVersion() { return this.version }
    getUrl() { return this.url }


    protected version: string
    protected url: string
    protected api

}




