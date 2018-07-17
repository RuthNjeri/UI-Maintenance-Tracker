//static/js/user/createRequest
import endpoint from '../fetch';

// user can create requests
let post_request = document.getElementById('create_request')
post_request.addEventListener('submit', createrequest);

function createrequest(e) {
    //function to create a user request
    e.preventDefault();
    let data = { title: document.getElementById('title').value,
                 description: document.getElementById('description').value,
                 request_type: document.getElementById('request_type').value
               } 

    let token = window.localStorage.getItem('token');
    //endpoint to enable user to create a request
    endpoint.post('users/requests', data, token)
    .then((res) => res.json())
    .then((data) => {
        if (data.response != undefined) {
            //response if request is unsuccessful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
        }
        if(data.response === "request created successfully"){
            document.getElementById('output').style.color = 'green'
            document.getElementById('output').innerHTML = data.response
            window.location.href = '../user/userRequests.html';
        }
    })
}