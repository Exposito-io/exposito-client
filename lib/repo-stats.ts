import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { SendOptions, GetWalletOptions, CreatePaymentRequest, RepoParams, RepoStats } from 'models'
import { options } from './rest-options'



export class RepoStatsProvider {

    constructor(api) {
        this.api = api
    }


    async get(params: RepoParams): Promise<RepoStats> {
        try {
            let result = await this.api.get(`repo-stats`, params)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }

    async getMultiple(params: RepoParams[]): Promise<RepoStats> {
        try {
            let result = await this.api.get(`repo-stats`, { repos: JSON.stringify(params) })
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }


    protected api
}

