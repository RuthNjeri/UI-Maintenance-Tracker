// user view requests

	fetch('https://young-depths-42728.herokuapp.com/api/v2/users/requests',{
		method: 'GET',
		headers: {
			'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'token': window.localStorage.getItem('token')
		},
	})

	.then((res) => res.json())
	.then((data) =>{ 
		let table = document.getElementById('table');
		let i

		for( i = 0; i < data.requests.length; i++){
			// create a table row

			let new_row = table.insertRow();
			let response_length = Object.keys(data.requests[i]).length;
			let data_array = Object.values(data.requests[i])

			for(let j = 0; j < response_length; j++){
				// create a table cell
				let cell = new_row.insertCell(j);

				//add value to cell
				cell.innerHTML = data_array[j];
			}
		}
		// get the request id when row is clicked
		for(let i = 0; i < table.rows.length; i++) {
				table.rows[i].onclick = function (){
				value = this.cells[3].innerHTML
				window.localStorage.setItem('request_id', value);
				window.location.href = 'EditRequest.html'
				}
				
				
		}


	})
