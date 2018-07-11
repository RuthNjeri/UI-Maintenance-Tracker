//js/fetch.js

class Api {
//api class for the fetch apis

    constructor() {
    //set the base url
    this.herokuUrl = 'https://young-depths-42728.herokuapp.com/api/v2/'

    }
    
    post(api,data) {
        return fetch(this.herokuUrl+api, {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
            },
            body:JSON.stringify(data),
        });
    }

}

const endpoint = new Api()
export default endpoint