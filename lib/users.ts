import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { User } from 'models'
import { options } from './rest-options'



export class Users {

    constructor(api) {
        this.api = api
    }

    async getById(id: string): Promise<User> {
        try {
            let result = await this.api.get(`users/${id}`)
            if (result.error) {
                throw('Error')
            }
            else
                return User.fromJSON(result)
        } catch (e) {
            throw(e)
        }        
    }

    async find(query: string): Promise<Users[]> {
        try {
            let result = await this.api.get(`users/find`, { q: query })
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

