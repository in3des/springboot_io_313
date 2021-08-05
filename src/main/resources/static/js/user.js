// console.log("Hello from our JS")



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ================================================ FETCH USER TABLE ================================================

// const mainTableList = document.querySelector('.main-table-list');
let output2 = '';



fetch("api/findlogged")
    .then(res => res.json())
    .then(data => {
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
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.surname}</td>
                    <td>${data.age}</td>
                    <td>${data.email}</td>
                    <td>`
                    data.roles.forEach(post1 => {
                        console.log(post1)
                        output2 += `
                        ${post1.role.substring(5)}
                        `
                    })

                    output2 += `
                    </td>
                </tr>                
            </tbody>

        </table>
        `

            // mainTableList.innerHTML = output1;
            document.getElementById('user-table-list').innerHTML = output2;
        }
    )

// ================================================ FETCH USER TABLE ================================================


