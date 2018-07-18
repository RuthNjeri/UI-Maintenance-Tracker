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

    get(api, token) {
        return fetch(herokuUrl+api, {
            method: 'GET',
            headers: {'Accept': 'application/json, text/plain, */*',
                      'Content-type':'application/json',
                      'token': token
                     }
        });
    }

    put(api, token, data) {
        return fetch(herokuUrl+api, {
            method: 'PUT',
            headers: {'Accept': 'application/json, text/plain, */*',
                      'Content-type':'application/json',
                      'token': token
                     },
            body:JSON.stringify(data),
        });
    }
    putResponse(api, token) {
        return fetch(herokuUrl+api, {
            method: 'PUT',
            headers: {'Accept': 'application/json, text/plain, */*',
                      'Content-type':'application/json',
                      'token': token
                     }
        });
    }
    delete(api,token) {
      return fetch(herokuUrl+api, {
          method: 'DELETE',
          headers: {'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    'token': token
                   }
      });
    }






}

const endpoint = new Api()
export default endpoint





