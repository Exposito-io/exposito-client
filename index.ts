import { ExpositoClientOptions } from './lib/exposito-client-options'
import config from './config'
import 'isomorphic-fetch'
import * as Rest from 'fetch-on-rest'
import { Github } from './lib/github'
import { Wallets } from './lib/wallets'
import { Projects } from './lib/projects'
import { Users } from './lib/users'
import { PeriodicPayments } from './lib/periodic-payments'
import { RepoStatsProvider } from './lib/repo-stats'
import { Search } from './lib/search'
import { Transactions } from './lib/transactions'
import { Instances } from './lib/instances'
import { options } from './lib/rest-options'



export class ExpositoClient {

    constructor(opts: ExpositoClientOptions = {}) {
        this.version = opts.version || config.version
        this.url = opts.url || config.url
        this.api = Rest(`${this.url}/${this.version}`, options(opts.token))

        this.github = new Github(this.api)
        this.wallets = new Wallets(this.api)
        this.projects = new Projects(this.api)
        this.users = new Users(this.api)
        this.periodicPayments = new PeriodicPayments(this.api)
        this.repoStats = new RepoStatsProvider(this.api)
        this.instances = new Instances(this.api)
        this.searchApi = new Search(this.api)
        this.transactions = new Transactions(this.api)

    }

    github: Github
    instances: Instances
    wallets: Wallets
    periodicPayments: PeriodicPayments
    projects: Projects
    repoStats: RepoStatsProvider
    transactions: Transactions
    users: Users

    async search(query: string) {
        return this.searchApi.search(query)
    }

    getVersion() { return this.version }
    getUrl() { return this.url }


    protected searchApi: Search
    protected version: string
    protected url: string
    protected api

}




