// console.log("Hello from our JS")


// fetch("https://dog.ceo/api/breeds/list/all").then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log(data)
// })


async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    // console.log(data)
    createBreed(data.message)
}

start()


function createBreed(breedList) {
    document.getElementById("breed").innerHTML = `
        <select onchange="loadByBreed(this.value)">
            <option>Choose a dog breed</option>
<!--            <option>Corgi</option>-->
<!--            <option>Boxer</option>-->
<!--            <option>Bulldog</option>-->
            ${Object.keys(breedList).map(function (breed) {
                return `<option>${breed}</option>`        
            }).join('')}
        </select>
    `
}


async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        // alert(breed)
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        console.log(data)
    }

}

async function start2() {
    const response = fetch("api/users")
    const data = await response.json()
    console.log(data)
    // createBreed(data.message)
}

start2()