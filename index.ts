class ExpositoClient {

    constructor(opts: ExpositoClientOpts = {}) {
        this.version = opts.version || 'v1'
        this.url = opts.url || 'https://api.exposito.io'
    }


    protected version: string
    protected url: string

}


class ExpositoClientOpts {
    version?: string
    url?: string
}

export default ExpositoClient