import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { User, RepoStats } from 'models'
import { options } from './rest-options'



export class Github {

    constructor(api) {
        this.api = api
    }


    async findRepos(query: string): Promise<{}[]> {
        try {
            let result = await this.api.get(`github/findRepos`, { q: query })
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }


    async getRepoStats(params: { owner: string, repo: string }): Promise<RepoStats | any> {
        try {
            let result = await this.api.get(`repo-stats`, { owner: params.owner, repo: params.repo })
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

