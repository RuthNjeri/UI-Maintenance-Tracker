# UI-Maintenance-Tracker
Implements the front-end for the Maintenance Application 

## Frontend Functionality
1. User signup and signin pages.<br>

2. A page where an admin can see all the requests on the application.

3. A page/pages where an admin can do the following:<br>
   i)  See the details of a request<br>
   ii) Approve or disapprove a request<br>
   iv) Resolve a request<br>
   
4. A page/pages where user can do the following:<br>
   i)  See all his/her requests<br>
   ii) create requests<br>
## Hosted on Heroku
[Sign up](https://maintenancefrontend.herokuapp.com/User/signUp.html)<br>
[Sign In](https://maintenancefrontend.herokuapp.com/User/signIn.html)

## Hosted on Github
[Sign Up](https://ruthnjeri.github.io/UI-Maintenance-Tracker/User/signUp.html)<br>
[Sign In](https://ruthnjeri.github.io/UI-Maintenance-Tracker/User/signIn.html)
   
### How To Test
Clone the project
`git clone https://github.com/RuthNjeri/UI-Maintenance-Tracker.git`

**As a normal user**
Open the signIn.html and signUp.html pages on the browser a current versions of Firefox or Chrome.
`sign up on the form`
`sign in on the form`

Create a request on the `createRequest.html` then navigate to the `View Requests` to view the request you have created and `click the request in the table row` to `view the request`, `Edit the request`, or `delete the request`

**As an Admin**
Open the signIn.html and signUp.html pages on the browser a current versions of Firefox or Chrome.
`sign in on the form` with the username `admin@gmail.com` and password `12345678`

Once you sign in as an admin you will be redirected to the `All Requests` page. You can search for a `pending` request in the `search bar` at the top left by typing the word  `pending` and click the result to `view the request`, and `respond` to the request
