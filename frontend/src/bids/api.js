class ApiBid {
    constructor() {
        this.baseUrl = `http://localhost:3000`
    }

    async getAllHomes() {
        const resp = await fetch(this.baseUrl+'/homes') 
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