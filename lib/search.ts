import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { options } from './rest-options'



export class Search {

    constructor(api) {
        this.api = api
    }


    async search(query: string) {
         try {
            let result = await this.api.get(`search`, { q: query })
            if (result.error) {
                throw('Error')
            }
            else
                return result.results
        } catch(e) {
            throw(e)
        }
    }
  

    protected api
}