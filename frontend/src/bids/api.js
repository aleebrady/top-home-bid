class ApiBid {

    constructor() {
        this.baseUrl = `http://localhost:3000`
        this.options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    async getAllHomes() {
        const resp = await fetch(this.baseUrl+'/homes') 
        const data = await resp.json()
        return data
    }

    async postBid(bidObj) {
        const resp = await fetch(this.baseUrl+'/bids',{...this.options, body: JSON.stringify(bidObj)})
        const data = await resp.json()
        return data
    }

    async postHome(homeObj) {
        const resp = await fetch(this.baseUrl+'/homes',{...this.options, body: JSON.stringify(homeObj)})
        const data = await resp.json()
        return data
    }

    // getAllHomesthen() {
    //     fetch(this.baseUrl+'/homes')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         debugger
    //     })
    // }
}