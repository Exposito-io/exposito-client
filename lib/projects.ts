import 'isomorphic-fetch'
import { ExpositoClientOptions } from './exposito-client-options'
import * as Rest from 'fetch-on-rest'
import config from '../config'
import { SendOptions, CreateProjectParams, Project } from 'models'
import { options } from './rest-options'



export class Projects {

    constructor(api) {
        this.api = api
    }


    async createProject(params: CreateProjectParams): Promise<Project> {
        try {
            let result = await this.api.post(`projects`, params)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch (e) {
            throw(e)
        }
    }

    async getProjectById(id: string) {
         try {
            let result = await this.api.get(`projects/${id}`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }

    async getProjects() {
         try {
            let result = await this.api.get(`projects`)
            if (result.error) {
                throw('Error')
            }
            else
                return result
        } catch(e) {
            throw(e)
        }
    }


    protected api
}

