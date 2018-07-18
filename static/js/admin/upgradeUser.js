//static/js/admin/upgradeUser.js

import endpoint from '../fetch';

// Upgrade user to admin
let upgrade_user = document.getElementById('upgrade_user');
upgrade_user.addEventListener('submit', user_admin);

function user_admin(e){
    //function to upgrade a user to admin
    e.preventDefault();
    let email = {email: document.getElementById('email').value}
    let token = window.localStorage.getItem('token');
    //fetch endpoint to upgrade user
    endpoint.put('auth/admin',email, token)
    .then((res) => res.json())
    .then((data) => {
        if (data.response != undefined) {
            //if request not successful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.response
        }
        if(data.response === "User Upgraded"){
            //if request successful
            document.getElementById('output').style.color = 'green'
            document.getElementById('output').innerHTML = data.response;
        }
         })
}