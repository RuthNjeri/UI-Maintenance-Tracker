// Admin Respond to specific request
let request_id = window.localStorage.getItem('request_id')

fetch('https://young-depths-42728.herokuapp.com/api/v2/requests/'+ request_id,{
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'token': window.localStorage.getItem('token')
        },
    })

    .then((res) => res.json())
    .then((data) =>{ 
        document.getElementById('title').innerHTML = data.request.title
        document.getElementById('description').innerHTML = data.request.description
        document.getElementById('date').innerHTML = data.request.date_created
    })

// Admin respond specific request
let respond_request = document.getElementById('respond_request');
respond_request.addEventListener('submit', respondRequest);

// admin can respond to requests after submitting
function respondRequest(e) {

    e.preventDefault();

    let admin_response = document.getElementById('admin_response').value;
    let token = window.localStorage.getItem('token');
    let request_id = window.localStorage.getItem('request_id');

// admin approve request
    if(admin_response == "approve"){
            fetch('https://young-depths-42728.herokuapp.com/api/v2/requests/'+ request_id +'/approve', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            }
        })

        .then((res) => res.json())
        .then((data) => {

            if (data.response != undefined) {
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response

            if(data.response === "Request approved!"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response;
            }
            }
        })
}

// admin disapprove request
    if(admin_response == "disapprove"){
            fetch('https://young-depths-42728.herokuapp.com/api/v2/requests/'+ request_id +'/disapprove', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.response != undefined) {
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response

            if(data.response === "Request disapproved!"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response;
            }
            }
        })
}

    if(admin_response == "resolve"){
            fetch('https://young-depths-42728.herokuapp.com/api/v2/requests/'+ request_id +'/resolve', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            }
        })

        .then((res) => res.json())
        .then((data) => {
            if (data.response != undefined) {
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response

            if(data.response === "Request resolved!"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response;
            }
            }
        })
}
    }

