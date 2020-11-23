console.log("testing")

const api = new ApiBid();


const init = () => {
    renderHomes()
    bindNewHomeForm()
    // bindEvents()
}

function bindBidEvent() {
    const bidBtns = document.querySelectorAll(".bids-btn")
    for(btn of bidBtns) {
        btn.addEventListener("click", function(e) {
            // console.log(e.target.id.split("home-")[1])
            const bidsDiv = document.querySelector(`#bids-${e.target.id.split("home-")[1]}`)
            if(bidsDiv.classList.contains("display-bid")){
                bidsDiv.classList.remove("display-bid")
            } else {
                bidsDiv.classList.add("display-bid")
            }
        })
    }
}

function bindBidForm() {
    const bidForms = document.querySelectorAll(".bid-form")
    for(form of bidForms) {
        form.addEventListener("submit", function(e){
            e.preventDefault()
            const homeId = e.target.parentElement.parentElement.id.split("bids-")[1]
            // const formData = new FormData(e.target) 
            const bidData = {
                home_id: homeId,
                offer: e.target.querySelector(".bid-offer").value,
                agent: e.target.querySelector(".bid-agent").value
            }
            api.postBid(bidData)
            // check if log has errors, then alert, else render whole page
        })
    }
}

function bindNewHomeForm() {
    const newHomeForm = document.getElementById("newHome")
    newHomeForm.addEventListener("submit", function(e){
        e.preventDefault()
        const newHomeData = {
            city: document.getElementById("form-city").value,
            area: document.getElementById("form-area").value,
            year_built: document.getElementById("form-built").value
        }
        // console.log(newHomeData)
        api.postHome(newHomeData).then(resp => {
            resp.bids = []
            const home = new Home(resp);
            //home.appendTo('#main-content .row')
            const mainContent = document.querySelector("#main-content .row")
            mainContent.innerHTML += home.htmlify()
            bindBidEvent()
            bindBidForm()
        })

    })
}

async function renderHomes() {
    const homes = await api.getAllHomes()
    for(home of homes){
        new Home(home)
    }
    const mainContent = document.querySelector("#main-content")
    mainContent.innerHTML = ""
    mainContent.innerHTML = Home.renderAll()
    bindBidEvent()
    bindBidForm()

    // mainContent.innerHTML += Home.renderAll()
}

init()