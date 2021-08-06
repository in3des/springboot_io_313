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



// ================================================ FETCH MAIN TABLE ================================================

const mainTableList = document.querySelector('.main-table-list');
let output1 = '';

const renderMainTable = (data) => {
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
    data.forEach(user => {
            console.log(user)
            output1 += `                
                <tr data-id="${user.id}">
                    <td class="main-id">${user.id}</td>
                    <td class="main-name">${user.name}</td>
                    <td class="main-surname">${user.surname}</td>
                    <td class="main-age">${user.age}</td>
                    <td class="main-email">${user.email}</td>
                    <td class="main-roles">`
            user.roles.forEach(val => {
                console.log(val)
                output1 += `
                        ${val.role.substring(5)}
                        `
            })

            output1 += `
                    </td>
                    <td>
                        <button type="button" class="btn btn-info eBtn" data-toggle="modal"
                                data-target="#editModal" id="edit-user"> Edit </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger eBtn" data-toggle="modal"
                                data-target="#deleteModal" id="delete-user"> Delete </button>
                    </td>
                </tr>                
                `;
        }

    );
    output1 += `
        </tbody>

        </table>
        `

    // document.getElementById('main-table-list').innerHTML = output1;
    mainTableList.innerHTML = output1;
}


fetch("api/users")
    .then(res => res.json())
    .then(data => renderMainTable(data))

// ================================================ FETCH MAIN TABLE ================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ FETCH USER TABLE ================================================

// const mainTableList = document.querySelector('.main-table-list');
let output2 = '';

const renderUserTable = (user) => {
    console.log("7th")
    output2 += `
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>

            <tbody>
              
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>`
    user.roles.forEach(val => {
        console.log(val)
        output2 += `
                        ${val.role.substring(5)}
                        `
    })

    output2 += `
                    </td>
                </tr>                
            </tbody>

        </table>
        `

    document.getElementById('user-table-list').innerHTML = output2;
}


fetch("api/findlogged")
    .then(res => res.json())
    .then(data => renderUserTable(data)
    )

// ================================================ FETCH USER TABLE ================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ ADD USER TABLE ================================================

const addUserForm = document.querySelector('.add-user-form');
const nameNew = document.getElementById('nameNew');
const surnameNew = document.getElementById('surnameNew');
const ageNew = document.getElementById('ageNew');
const emailNew = document.getElementById('emailNew');
const passwordNew = document.getElementById('passwordNew');
const rolesNew = document.getElementById('rolesNew');


addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch("api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: nameNew.value,
            surname: surnameNew.value,
            age: ageNew.value,
            email: emailNew.value,
            password: passwordNew.value,
            // roles: rolesNew.value
        })
    })
        // .then(res => res.json())
        .then(data => {
            const dataArr = []
            dataArr.push(data)
            // renderMainTable(dataArr)
        })

    location.reload()
    console.log('Form submitted!');
})

// ================================================ ADD USER TABLE ================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ MODAL EDIT TABLE ================================================

mainTableList.addEventListener('click', () => {
    // console.log('hello!');
})

// ================================================ MODAL EDIT TABLE ================================================

// ================================================ MODAL DELETE TABLE ================================================

mainTableList.addEventListener('click', (e) => {
    console.log('1st '+e.target.id);
    console.log('hello! click');
    e.preventDefault();

    let editButtonIsPressed = e.target.id == 'edit-user'
    let deleteButtonIsPressed = e.target.id == 'delete-user'

    console.log('dataset '+e.target.parentElement.dataset.id)
    console.log('element start ---')
    console.log(e.target.parentElement)
    console.log('element end   ---')
    // console.log(e.target.parentElement.querySelector('.main-email').textContent)

    let userId = e.target.parentElement.dataset.id

    if(deleteButtonIsPressed) {
        // fetch(`/api/users/${userId}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
            // .then(() => location.reload())

        // location.reload()
        // console.log('delete pressed')

        let editId = e.target.parentElement.dataset.id
        console.log('delete_user_id='+editId)

    }

    if(editButtonIsPressed) {
        // console.log('edit user')
        // console.log('btn '+e.target.parentElement.dataset.id)

        const parent = e.target.parentElement.parentElement

        console.log('btn '+parent.dataset.id)
        console.log(parent)

        // let editId = e.target.parentElement.dataset.id
        // console.log('edit_user_id='+editId)
        let editName = parent.querySelector('.main-name').textContent
        let editEmail = parent.querySelector('.main-email').textContent
        console.log('edit_user '+editEmail, editName)

        document.getElementById('emailEdit').value = editEmail;


    }
})

// ================================================ MODAL DELETE TABLE ================================================


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
