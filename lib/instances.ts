import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { SendOptions, CreateGoogleInstanceParams, Instance } from 'models'
import { options } from './rest-options'




export class Instances {

    constructor(api: any) {
        this.api = api
    }


    async get(id: string): Promise<Instance> {
        try {

            let result = await this.api.get(`instances`, { id })
            if (result.error) {
                throw('Error')
            }
            else
                return result

        } catch (e) {
            throw(e)
        }
    }


    async create(params: CreateGoogleInstanceParams): Promise<Instance> {
        try {

            let result = await this.api.get(`instances`, params)
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

