//static/js/main.js

import endpoint from './fetch';

// footer content
window.onload = function() {
    //create text for the footer
    var year = new Date().getFullYear();
    let text = "Developed by Ruth Waiganjo "+"© " + year + " Nairobi"
    document.getElementById("date-footer").innerHTML = text;


// User sign up
let reg = document.getElementById('addUser')
if (reg){
    reg.addEventListener('submit', addUser);
}

function addUser(event){
    //function to register user through endpoint
    event.preventDefault();
    //get user details to sign them up
    let data = {email:document.getElementById('email').value,
                first_name:document.getElementById('first_name').value,
                last_name:document.getElementById('last_name').value,
                password:document.getElementById('password').value,
                confirm_password:document.getElementById('confirm_password').value
                }
    //sign up user endpoint
    endpoint.post('auth/signup', data)
    .then((res) => res.json())
    .then(data => {
        if (data.response != undefined){
            //response if request is unsuccessful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
        }
        if (data.response === "user created successfully"){
            //response if request is successful
            document.getElementById('output').style.color = 'green'
            document.getElementById('output').innerHTML = data.response
            window.location.href = 'signIn.html'
        }
    })
    }


// User Login
let signin = document.getElementById('login')
if (signin){
            //if perform the function if the user clicks the submit button
            signin.addEventListener('submit', login);
          }

function login(event){
    //function to login user through endpoint
    event.preventDefault();
    document.getElementById('sign-in').value = 'Sign Me In.....'
    let data ={ email:document.getElementById('email').value,
                password:document.getElementById('password').value
              }
    //endpoint to sign in the user
    endpoint.post('auth/login', data)
    .then((res) => res.json())
    .then((data) => {
        if (data.response != "login successful"){
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
        }
        // store the token created when user is logged in
        window.localStorage.setItem('token', data.token);
        if (data.response === "login successful") {
            window.location.href = '../user/createRequest.html'
        }
        // if user is an admin, redirect to admin page
        if (data.role == 1){
            window.location.href = '../admin/viewRequests.html';
        }
    })

    }

// log out onclick event
function logout(){

    //Remove the token once the user logs out 
    window.localStorage.clear();
}

// window.onload bracket
 }

window.logout = logout;



