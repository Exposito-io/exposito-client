import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { User } from 'models'
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




    protected api
}

