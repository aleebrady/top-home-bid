console.log("testing")

const api = new ApiBid();


const init = () => {
    renderHomes()
    // bindEvents()
}

// function

async function renderHomes() {
    const homes = await api.getAllHomes()
    for(home of homes){
        new Home(home)
    }
    const mainContent = document.querySelector("#main-content")
    mainContent.innerHTML = ""
    mainContent.innerHTML = Home.renderAll()
    // mainContent.innerHTML += Home.renderAll()
}

init()