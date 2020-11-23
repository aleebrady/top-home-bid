class Home {

    static all = []

    constructor(home_obj) {
        this.id = home_obj.id
        this.city = home_obj.city
        this.area = home_obj.area
        this.year_built = home_obj.year_built
        this.bids = home_obj.bids
        this.baseUrl = `http://localhost:3000`
        this.options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        Home.all.push(this)
    }

    


    htmlify() {
        // return a string for one car in HTML 
        return (`
        <div id="home-card${this.id} class="col-md-4" value="${this.id}" >
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_175d78952e7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_175d78952e7%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
          <div class="card-body">
            <p class="card-text">City: ${this.city} </p>
            <p class="card-text">Area: ${this.area} </p>
            <p class="card-text">Built: ${this.year_built} </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" id="home-${this.id}" class="btn btn-sm btn-outline-secondary bids-btn">Bids</button>
                    <button id="deleter" type="button" data_id="${this.id}" class="btn btn-sm btn-outline-danger">Delete</button>
                </div>
                    <small class="text-muted">${this.bids.length} bids</small>
            </div>
            <div class="display-bid" id="bids-${this.id}">
            <div class="d-flex justify-content-between align-items-center ">
                <strong>Bids:</strong>
                    <ul>
                        ${this.bids.map(bid => `<li>$ ${bid.offer}: ${bid.agent} </li>`).join("")}   
                    </ul>
                </div>
                <div class="d-flex justify-content-between align-items-center ">
                <form class="bid-form">
                        <div class="form-group">
                            <label>offer</label>
                            <input type="number" name="bid[offer]" class="form-control bid-offer" aria-describedby="offer">
                        </div>
                        <div class="form-group">
                        <label>agent</label>
                        <input type="string" name="bid[agent]" class="form-control bid-agent" aria-describedby="agent">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
        `)

    //     <div class="btn-group">
    //     <button type="button" id="home-${this.id}" class="btn btn-sm btn-outline-secondary bids-btn">Bids</button>
    //   </div>
    //   <small class="text-muted">3 bids</small>

    }

    static htmlifyAll() {
        // return string template of all cars in html format
        // clear out index page maybe
        return Home.all.map(h => h.htmlify()).join("")
    }

    static renderAll() {
        return(`
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                ${this.htmlifyAll()}
                </div>
            </div>
        </div>

        `)
    }

    async postHome(homeObj) {
        console.log(homeObj)
        // const resp = await fetch(this.baseUrl+'/homes',{...this.options, body: JSON.stringify(homeObj)})
        // const data = await resp.json()
        // return data
    }



}