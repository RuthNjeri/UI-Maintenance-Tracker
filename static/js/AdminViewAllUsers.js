let sort;
fetch('https://young-depths-42728.herokuapp.com/api/v2/users',{
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'token': window.localStorage.getItem('token')
        }
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

        sort = paginate()

    })

// Implement filtering of the requests table
function searchFunction(){
    // detect when backspace is pressed
    let input = event.keyCode

    let cells = document.querySelectorAll("#table td");
    let filter = document.getElementById("userInput");

    // reload page if backspace key is pressed
    if(event.keyCode == 8){
            location.reload();
            }

    for(let i = 0; i < cells.length; i++){
        // check cells that match what the user has typed

        if(cells[i].textContent.toLowerCase().indexOf(filter.value.toLowerCase()) === 0){
            cells.forEach(function(element){
                element.style.display = "none";
            });
            // hide the header once the request has been found
            let thead = document.getElementById("heading");
            thead.style.display = "none";

            // display to the user that the request has been found
            document.getElementById("output").style.color ="green"
            document.getElementById("output").innerHTML = "Search Item Found. Click it to view"

            cells[i].style.display = "table-cell";
            break;
        }
         else {
            cells.forEach(function(element){
                if(cells[i] != element){
                    element.style.display = "none";
                    document.getElementById("output").style.color ="red"
                    document.getElementById("output").innerHTML = "Not Found"

                }

            });
        }
    }


}

// table pagination
function paginate(){
        let row_size = table.rows.length;
        let header_row = table.rows[0].firstElementChild.tagName;
        //number of rows per page
        page_rows = 3;
        //check if the table has a table head
        has_header = (header_row === "TH")
        //array holding each row
        let tr = [];
        //start counter at row[1]
        let ii, iii, j =(has_header)?1:0;
        //hold first row if it has TH
        let th =(has_header?table.rows[(0)].outerHTML:"");
        //count number of pages
        let page_count = Math.ceil(row_size / page_rows)
        //if there is one page only...do nothing
        if(page_count > 1){
            //assign each row to the array
            
            for(ii = j, iii = 0; ii < row_size; ii++, iii++){
                tr[iii] = table.rows[ii].outerHTML;
                }

                //create div to hold buttons
            table.insertAdjacentHTML("afterend","<br/><div id='buttons'></div");
            sort(1);

        }
        //current page is generated when user clicks a button
        function sort(selected_page){
            //rows variable holds the group of rows for the page
            //start_point is the first row in each page
            
            let rows = th, start_point = ((page_rows * selected_page) - page_rows);
            for (ii = start_point; ii < (start_point + page_rows) && ii < tr.length; ii++ ){
                rows += tr[ii];

            }
            
            //the table has a number of rows
            table.innerHTML = rows
            // create the pagination buttons
            document.getElementById("buttons").innerHTML = pageButtons(page_count,selected_page);
            // style button
            document.getElementById("id"+selected_page).setAttribute("class","active");
            
        }
        //pageCount, current_page selected
        function pageButtons(pageCount, current_page){
            //disable previous button in first page and next button on last page
            let prev_disable = (current_page == 1)?"disabled":"";
            let next_disable = (current_page == pageCount)?"disabled":"";
            //buttons hold every button needeed
            let buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+(current_page - 1)+")' "+prev_disable+">";
            for (ii=1; ii <= pageCount; ii++){
                buttons += "<input type='button' id='id"+ii+"'value='"+ii+"' onclick='sort("+ii+")'>";
            }
            buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+(current_page + 1)+")' "+next_disable+">";
            return buttons;

        }

        return sort
}


