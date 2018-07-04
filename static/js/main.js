// footer content
window.onload = function() {
    //create text for the footer
    var year = new Date().getFullYear();
    text = "Developed by Ruth Waiganjo "+"© " + year + " Nairobi"
    document.getElementById("date-footer").innerHTML = text;


// User sign up
let reg = document.getElementById('addUser')
if (reg){
    reg.addEventListener
    ('submit', addUser);
}


function addUser(e){
    //get user details to sign them up
    e.preventDefault();
    let email = document.getElementById('email').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    //sign up user endpoint
    fetch('https://young-depths-42728.herokuapp.com/api/v2/auth/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:email, first_name:first_name, last_name:last_name,
            password:password, confirm_password:confirm_password})
        })
        .then((res) => res.json())
        .then((data) => {
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
    signin.addEventListener
    ('submit', login);
    function login(e){

    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //endpoint to sign in the user
    fetch('https://young-depths-42728.herokuapp.com/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:email,password:password,})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.response != "login successful"){
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response
            }
            // store the token created when user is logged in
            window.localStorage.setItem('token', data.token);
            if (data.response === "login successful") {
                window.location.href = 'createRequest.html'
            }
            // if user is an admin, redirect to admin page
            if (data.role == 1){
                window.location.href = '../Admin/AdminPage.html';
            }
        })
    }
  }
// window.onload bracket
 }


// log out onclick event
function logout(){
    //Remove the token once the user logs out 
    window.localStorage.clear();
}

