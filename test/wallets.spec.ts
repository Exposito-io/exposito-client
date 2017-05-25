import * as chai from 'chai'
import { Wallets } from '../lib/wallets'


describe("Hello", () => {
    let wallet: Wallets

    beforeEach(() => {
        wallet = new Wallets({ version: 'v1', url: 'http://localhost:3004'})
    })

    it("should render correctly", async () => {
        let result = await wallet.getWallets()
        console.log(JSON.stringify(result))
        chai.assert.strictEqual(1, 1)
    })


    it("addresses", async () => {
        let result = await wallet.getAddresses({
           id: "59270169f64e8946acd459de" 
        })
        console.log(JSON.stringify(result))
        chai.assert.strictEqual(1, 1)
    })    

})