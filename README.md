# UI-Maintenance-Tracker
Implements the front-end for the Maintenance Application 

## Frontend Functionality
1. User signup and signin pages.

2. A page where an admin can see all the requests on the application.

3. A page/pages where an admin can do the following:
   i)  See the details of a request
   ii) Approve or disapprove a request
   iv) Resolve a request
   
4. A page/pages where user can do the following:
   i)  See all his/her requests
   ii) create requests
   
## ScreenShots
 **Sign Up**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189206/SignUp_i0onm4.png
 **Sign In**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189205/AdminSignIn_vwy8gj.png
 **Create A request**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189205/CreateRequests_vgpsv5.png
 **View All Requests**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189205/AllUserRequests_piz7fa.png
 **Search All Requests**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189205/SearchAllRequests_aqauid.png
 **View A Request and Edit A request**
 https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189474/EditAndViewSpecificRequest_yusur5.png
 **View A request and Respond To A Request**
https://res.cloudinary.com/dqvk8ugtp/image/upload/v1530189205/RespondRequests_l8pcus.png
   
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
