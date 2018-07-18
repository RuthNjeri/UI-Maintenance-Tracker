//static/js/user/specificRequest
import endpoint from '../fetch'
// user view one request
let request_id = window.localStorage.getItem('request_id')

//the fetch endpoint
endpoint.get('users/requests/'+ request_id, window.localStorage.getItem('token'))
.then((res) => res.json())
.then((data) =>{ 
    document.getElementById('date').innerHTML = data.request.date_created
    document.getElementById('title').value = data.request.title
    document.getElementById('description').value = data.request.description
    document.getElementById('request_type').value = data.request.request_type

})

// user edit specific request
let put_request = document.getElementById('edit_request');
put_request.addEventListener('submit', editrequest);

function editrequest(event) {
    //function that loads the edit request endpoint
    event.preventDefault();
    let data ={ title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                request_type: document.getElementById('request_type').value

              }
    let token = window.localStorage.getItem('token');
    let request_id = window.localStorage.getItem('request_id');

    //pass the data to the endpoint
    endpoint.put('users/requests/'+ request_id, token, data)
    .then((res) => res.json())
    .then((data) => {
        if (data.response != undefined) {
            //response if request is not successful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
         }
        if(data.response === "request modified successfuly"){
            //response if request is successful
            document.getElementById('output').style.color = 'green'
            document.getElementById('output').innerHTML = data.response;
        }
    })
}

// user can delete requests
let button = document.getElementById("delete");
button.addEventListener("click", delete_request);
function delete_request(event){
    //delete request function
    event.preventDefault();
    let result = confirm("Want to delete?");
    if(result){
        let request_id = window.localStorage.getItem('request_id');
        let token = window.localStorage.getItem('token');
        //pass the details in the endpoint
        endpoint.delete('users/requests/'+ request_id, token)
        .then((res) => res.json())
        .then((data) => {
        if (data.response != undefined) {
            //response if request is not successful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
        }
        if(data.response === "the record has been successfuly deleted"){
            //response if request is successful
            document.getElementById('output').style.color = 'green'
            document.getElementById('output').innerHTML = data.response
            document.getElementById("edit_request").reset();
        }

       })
    }

}
