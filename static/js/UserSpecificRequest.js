// user view specific request
let request_id = window.localStorage.getItem('request_id')


	fetch('https://young-depths-42728.herokuapp.com/api/v2/users/requests/'+ request_id,{
		method: 'GET',
		headers: {
			'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'token': window.localStorage.getItem('token')
		},
	})

	.then((res) => res.json())
	.then((data) =>{ 
		document.getElementById('title').value = data.request.title
		document.getElementById('description').value = data.request.description
		document.getElementById('request_type').value = data.request.type
	})

// user edit specific request
let put_request = document.getElementById('edit_request');
put_request.addEventListener('submit', editrequest);


// user can modify requests

function editrequest(e) {

    e.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let request_type = document.getElementById('request_type').value;
    let token = window.localStorage.getItem('token');
    let request_id = window.localStorage.getItem('request_id');


    fetch('https://young-depths-42728.herokuapp.com/api/v2/users/requests/'+ request_id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                title: title,
                description: description,
                request_type: request_type
            })
        })

        .then((res) => res.json())
        .then((data) => {
        	console.log(data)
            if (data.response != undefined) {
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response

            if(data.response === "request modified successfuly"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response;
            }
            }
        })
}

// user can delete requests
let button = document.getElementById("delete");
button.addEventListener("click", delete_request);

function delete_request(e){

    e.preventDefault();
    let request_id = window.localStorage.getItem('request_id');


    fetch('https://young-depths-42728.herokuapp.com/api/v2/users/requests/'+ request_id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': window.localStorage.getItem('token')
            }
        })

        .then((res) => res.json())
        .then((data) => {
        	console.log(data)
            if (data.response != undefined) {
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response

            if(data.response === "the record has been successfuly deleted"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response
                document.getElementById("edit_request").reset();
            }
            }
        })
}
