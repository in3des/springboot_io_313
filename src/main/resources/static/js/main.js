// console.log("Hello from our JS")


// fetch("https://dog.ceo/api/breeds/list/all").then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log("clean fetch dogs")
//     console.log(data)
// })
//
//
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    console.log("start")
    console.log(data)
    createBreed(data.message)
    console.log(data.message)
}

start()


function createBreed(breedList) {
    document.getElementById("breed33").innerHTML = `
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

fetch("api/users").then(function (response) {
    return response.json()
}).then(function (data) {
    console.log("clean fetch")
    console.log(data)
})

async function start2() {
    const response = await fetch("api/users")
    console.log("start2")
    console.log(response)

    const data = await response.json()
    console.log(data)

}

start2()


fetch("api/users")
    .then(res => res.json())
    .then(data => {
        console.log("3rd")
        console.log(data)
    })


// fetch("api/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log("4th")
//         console.log(data)
//         console.log(data.message)
//         data.forEach(post => {
//             console.log(post)
//             createIndexTable(data)
//         })
//         }
//     )

const testFetch = document.querySelector('.people-list');
let output = '';

fetch("api/users")
    .then(res => res.json())
    .then(data => {
            console.log("5th")
            data.forEach(post => {
                console.log(post)
                output += `
                <option>-- User${post.id} --</option>
                <option>${post.id}</option>
                <option>${post.name}</option>
                <option>${post.surname}</option>
                <option>${post.age}</option>
                <option>${post.email}</option>
                <option>`
                post.roles.forEach(post1 => {
                    console.log(post1)
                    output += `
                        ${post1.role.substring(5)}
                        `
                })

                output += `
                </option>
                <option>------------</option>
                `;
            });
            testFetch.innerHTML = output;
        // document.getElementById('hello').innerHTML = output;
        }
    )


// const mainTableList = document.querySelector('.main-table-list');
let output1 = '';



fetch("api/users")
    .then(res => res.json())
    .then(data => {
        console.log("6th")
        output1 += `
        <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
        `
        data.forEach(post => {
            console.log(post)
            output1 += `                
                <tr>
                    <td>${post.id}</td>
                    <td>${post.name}</td>
                    <td>${post.surname}</td>
                    <td>${post.age}</td>
                    <td>${post.email}</td>
                    <td>`
            post.roles.forEach(post1 => {
                console.log(post1)
                output1 += `
                        ${post1.role.substring(5)}
                        `
            })

            output1 += `
                    </td>
                    <td>
                        <button type="button" class="btn btn-info eBtn" data-toggle="modal"
                                th:attr="data-target='#editModal'+${post.id}"> Edit </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger eBtn" data-toggle="modal"
                                th:attr="data-target='#deleteModal'+${post.id}">Delete</button>
                    </td>
                </tr>                
                `;
        }

        );
        output1 += `
        </tbody>

        </table>
        `

            // mainTableList.innerHTML = output1;
        document.getElementById('main-table-list').innerHTML = output1;
        }
    )






// function createIndexTable(peopleList) {
//     document.getElementById("people-list").innerHTML = `
//             <option>Roles list check</option>
//             ${Object.values(peopleList).map(function (role) {
//         return `<option>${role}</option>`
//     }).join('')}
//     `
// }



// fetch("api/users")
//     .then(res => res.json())
//     .then(data => {
//             console.log("5th")
//             data.forEach(post => {
//                 console.log(post)
//                 output += `
//                 <option>-- User${post.id} --</option>
//                 <option>${post.id}</option>
//                 <option>${post.name}</option>
//                 <option>${post.surname}</option>
//                 <option>${post.age}</option>
//                 <option>${post.email}</option>
//                 <option>
//                     ${post.roles.forEach(post1 => {
//                     console.log(post1)
//                 })
//                 }
//                 </option>
//                 <option>------------</option>
//                 `;
//             });
//             peopleList.innerHTML = output;
//         }
//     )
