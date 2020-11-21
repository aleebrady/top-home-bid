console.log("testing")

const api = new ApiBid();


const init = () => {
    renderHomes()
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
            const homeId = e.target.parentElement.parentElement.id.split("bids-")[1]
        })
    }
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