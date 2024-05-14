function getImage(imgName){
    fetch(`https://api.unsplash.com/search/photos?query={${imgName}}&client_id=e9S24akew3xyaNZhblhoD2tQhMUXGr_FSeFPUfGsZFc`).then(
        res => res.json()
    ).then(data =>{

        let imageContainer = document.querySelector("#images")
        imageContainer.innerHTML = ''

        data.results.map(image=>{
            let imgCont = `

            <div id="image" class="w-[300px] ">
                <img class="w-full h-fit" src=${image.urls.regular} >
                </div>


            `
            imageContainer.innerHTML+=imgCont
        })
    })
}


document.querySelector('form').addEventListener("submit" , (e)=>{
    let value = document.querySelector('input')
    e.preventDefault()

    if (value.value.length > 0){
        getImage(value.value)
    }
})