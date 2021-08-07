// console.log("Hello from our JS")


// fetch("https://dog.ceo/api/breeds/list/all").then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log("clean fetch dogs")
//     console.log(data)
// })
//
//


// async function start() {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all")
//     const data = await response.json()
//     console.log("start")
//     console.log(data)
//     createBreed(data.message)
//     console.log(data.message)
// }
//
// start()
//
//
// function createBreed(breedList) {
//     document.getElementById("breed33").innerHTML = `
//         <select onchange="loadByBreed(this.value)">
//             <option>Choose a dog breed</option>
// <!--            <option>Corgi</option>-->
// <!--            <option>Boxer</option>-->
// <!--            <option>Bulldog</option>-->
//             ${Object.keys(breedList).map(function (breed) {
//                 return `<option>${breed}</option>`
//             }).join('')}
//         </select>
//     `
// }
//
//
// async function loadByBreed(breed) {
//     if (breed != "Choose a dog breed") {
//         // alert(breed)
//         const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
//         const data = await response.json()
//         console.log(data)
//     }
//
// }
//
// fetch("api/users").then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log("clean fetch")
//     console.log(data)
// })
//
// async function start2() {
//     const response = await fetch("api/users")
//     console.log("start2")
//     console.log(response)
//
//     const data = await response.json()
//     console.log(data)
//
// }
//
// start2()
//
//
// fetch("api/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log("3rd")
//         console.log(data)
//     })


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



// const testFetch = document.querySelector('.people-list');
// let output = '';
//
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
//                 <option>`
//                 post.roles.forEach(post1 => {
//                     console.log(post1)
//                     output += `
//                         ${post1.role.substring(5)}
//                         `
//                 })
//
//                 output += `
//                 </option>
//                 <option>------------</option>
//                 `;
//             });
//             testFetch.innerHTML = output;
//         // document.getElementById('hello').innerHTML = output;
//         }
//     )



// ================================================ FETCH MAIN TABLE ================================================

const mainTableList = document.querySelector('.main-table-list');
let outputAll = '';

const renderMainTable = (data) => {
    console.log("6th")
    outputAll += `
        <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th style="display:none">Password</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
        `
    data.forEach(user => {
            console.log(user)
            outputAll += `                
                <tr data-id="${user.id}" id="row-user-${user.id}">
                    <td class="main-id" id="main-id-${user.id}">${user.id}</td>
                    <td class="main-name" id="main-name-${user.id}">${user.name}</td>
                    <td class="main-surname" id="main-surname-${user.id}">${user.surname}</td>
                    <td class="main-age" id="main-age-${user.id}">${user.age}</td>
                    <td class="main-email" id="main-email-${user.id}">${user.email}</td>
                    <td class="main-password" id="main-password-${user.id}" style="display:none">${user.password}</td>
                    <td class="main-roles" id="main-roles-${user.id}">`
            user.roles.forEach(val => {
                console.log(val)
                outputAll += `
                        ${val.role.substring(5)}
                        `
            })

            outputAll += `
                    </td>
                    <td>
                        <button type="button" class="btn btn-info" data-toggle="modal"
                                data-target="#editModal" id="edit-user"> Edit </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" data-toggle="modal"
                                data-target="#deleteModal" id="delete-user"> Delete </button>
                    </td>
                </tr>                
                `;
        }

    );
    outputAll += `
        </tbody>

        </table>
        `

    // document.getElementById('main-table-list').innerHTML = outputAll;
    mainTableList.innerHTML = outputAll;
}


fetch("api/users")
    .then(res => res.json())
    .then(data => renderMainTable(data))

// ================================================ FETCH MAIN TABLE ================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ FETCH USER TABLE ================================================

// const mainTableList = document.querySelector('.main-table-list');
let outputOne = '';

const renderUserTable = (user) => {
    console.log("7th")
    outputOne += `
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
        outputOne += `
                        ${val.role.substring(5)}
                        `
    })

    outputOne += `
                    </td>
                </tr>                
            </tbody>

        </table>
        `

    document.getElementById('user-table-list').innerHTML = outputOne;
}


fetch("api/findlogged")
    .then(res => res.json())
    .then(data => renderUserTable(data))

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

let outputAdd = '';

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


    console.log('Form submitted!');

    mainTableList.innerHTML = "";

    // document.getElementById('home-tab').click();

    console.log(outputAll);
    console.log('clean');
    outputAll = ""
    console.log(outputAll);
    console.log('cleaned');

    fetch("api/users")
        .then(res => res.json())
        .then(data => renderMainTable(data))


})

// ================================================ ADD USER TABLE ================================================

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ MODAL EDIT/DELETE TABLE ================================================

const modalEdit = document.querySelector('.modal-edit-form');
const modalDelete = document.querySelector('.modal-delete-form');
const modalBtnEditSubmit = document.getElementById('edit-inside-modal')
const modalBtnDeleteSubmit = document.getElementById('delete-inside-modal')

mainTableList.addEventListener('click', (e) => {
    // console.log('1st '+e.target.id);
    // console.log('hello! click');
    e.preventDefault();

    let editButtonIsPressed = e.target.id == 'edit-user'
    let deleteButtonIsPressed = e.target.id == 'delete-user'
    //
    // console.log('dataset '+e.target.parentElement.dataset.id)
    // console.log('element start ---')
    // console.log(e.target.parentElement)
    // console.log('element end   ---')
    // console.log(e.target.parentElement.querySelector('.main-email').textContent)

    const parent = e.target.parentElement.parentElement
    // let userId = e.target.parentElement.dataset.id

    // let editId = parent.querySelector('.main-id').textContent
    let editName = parent.querySelector('.main-name').textContent
    let editSurname = parent.querySelector('.main-surname').textContent
    let editAge = parent.querySelector('.main-age').textContent
    let editEmail = parent.querySelector('.main-email').textContent
    let editPassword = parent.querySelector('.main-password').textContent
    let editRoles = parent.querySelector('.main-roles').textContent

    let deleteId = e.target.parentElement.parentElement.dataset.id

    let editId = e.target.parentElement.parentElement.dataset.id

    let insideEditId = parent.querySelector('.main-id').textContent
    let insideDeleteId = parent.querySelector('.main-id').textContent


    if(editButtonIsPressed) {

        console.log('============================')
        console.log('edit_user_id='+editId)
        console.log('============================')
        // let insideEditId = editId
        console.log('edit_user_id_UPD='+insideEditId)
        console.log('============================')


        document.getElementById('idEdit').value = editId;
        document.getElementById('nameEdit').value = editName;
        document.getElementById('surnameEdit').value = editSurname;
        document.getElementById('ageEdit').value = editAge;
        document.getElementById('emailEdit').value = editEmail;
        document.getElementById('passwordEdit').value = editPassword;
        document.getElementById('rolesEdit').value = editRoles;



    }


    if(deleteButtonIsPressed) {

        console.log('============================')
        console.log('delete_user_id='+deleteId)
        console.log('============================')


        document.getElementById('idDelete').value = deleteId;
        document.getElementById('nameDelete').value = editName;
        document.getElementById('surnameDelete').value = editSurname;
        document.getElementById('ageDelete').value = editAge;
        document.getElementById('emailDelete').value = editEmail;
        document.getElementById('rolesDelete').value = editRoles;




    }



    modalEdit.addEventListener('click', (e) => {
        console.log('inside modal E')
        console.log('editId = '+editId)
        console.log('insideEditId = '+insideEditId)
        console.log('------------------------------')
        e.preventDefault();

        // console.log(document.getElementById('idEdit').value)

        let editModalButtonIsPressed = e.target.id == 'edit-inside-modal'

        if(editModalButtonIsPressed) {
            console.log('EEE')
            console.log('editId = '+editId)
            console.log('insideEditId = '+insideEditId)
            console.log('------------------------------')



            fetch(`/api/users/${insideEditId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    id: document.getElementById('idEdit').value,
                    name: document.getElementById('nameEdit').value,
                    surname: document.getElementById('surnameEdit').value,
                    age: document.getElementById('ageEdit').value,
                    email: document.getElementById('emailEdit').value,
                    password: document.getElementById('passwordEdit').value,
                    // roles: document.getElementById('rolesEdit').value
                })
            })
            // .then(res => res.json())
            // .then(data => console.log(data))

            // document.getElementById('main-name-'+insideEditId).innerHTML = document.getElementById('nameEdit').value;
            // document.getElementById('main-surname-'+insideEditId).innerHTML = document.getElementById('surnameEdit').value;
            // document.getElementById('main-age-'+insideEditId).innerHTML = document.getElementById('ageEdit').value;
            // document.getElementById('main-email-'+insideEditId).innerHTML = document.getElementById('emailEdit').value;
            // document.getElementById('main-password-'+insideEditId).innerHTML = document.getElementById('passwordEdit').value;
            // document.getElementById('main-roles-'+editId).innerHTML = document.getElementById('rolesEdit').value;



            // ------------------ ON EDIT CLICK ------------------






                mainTableList.innerHTML = "";
                outputAll = "";

                fetch("api/users")
                    .then(res => res.json())
                    .then(data => renderMainTable(data));




        }

    })



    modalDelete.addEventListener('click', (e) => {
        console.log('inside modal D')
        console.log('deleteId = '+deleteId)
        console.log('insideDeleteId = '+insideDeleteId)
        console.log('------------------------------')
        e.preventDefault();

        let deleteModalButtonIsPressed = e.target.id == 'delete-inside-modal'

        if(deleteModalButtonIsPressed) {
            console.log('DDD')
            console.log('deleteId = '+deleteId)
            console.log('insideDeleteId = '+insideDeleteId)
            console.log('------------------------------')




            fetch(`/api/users/${insideDeleteId}`, {
                method: 'DELETE'
            })


            document.getElementById('row-user-'+insideDeleteId).innerHTML = "";

            // mainTableList.innerHTML = "";
            // outputAll = ""
            //
            // fetch("api/users")
            //     .then(res => res.json())
            //     .then(data => renderMainTable(data))


        }

    })





})








// ================================================ MODAL EDIT/DELETE TABLE ================================================


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
