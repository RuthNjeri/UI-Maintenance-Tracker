//static/js/fetch.js

//set the base url
const herokuUrl = 'https://young-depths-42728.herokuapp.com/api/v2/'
   

class Api {
//api class for the fetch apis
    
    post(api,data, token = null) {
        return fetch(herokuUrl+api, {
            method: 'POST',
            headers: {'Accept': 'application/json, text/plain, */*',
                      'Content-type':'application/json',
                      'token': token
                     },
            body:JSON.stringify(data),
        });
    }





}

const endpoint = new Api()
export default endpoint





