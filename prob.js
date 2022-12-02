async function loadquestion() {
    let request = new Request("prob.json")
    let response = await fetch(request)
    var json_obj = await response.json()
    display(json_obj)

}


function display(obj) {
    var table = document.getElementById("appending-in-table")

    for (var i = 0; i < obj.length; i++) {
//         if(`${obj[i].title}`.indexOf("Two Sum") > -1){
//             var row = `
//         <tr >
//             <th >${i + 1}</th>
//             <td><a href="${obj[i].link}">${obj[i].title}</a></td>
//             <td >${obj[i].Difficulty}</td>
//             <td>${obj[i].tags}</td>
//         </tr>   
        
//     ` 
//     // table.classList.add("td2")
//     table.innerHTML += row
//         }
// else

        {
            var row = `
        <tr >
            <th>${i + 1}</th>
            <td><a href="${obj[i].link}">${obj[i].title}</a></td>
            <td>${obj[i].Difficulty}</td>
            <td>${obj[i].tags}</td>
        </tr>   
    `
        }
        table.innerHTML += row
        
    }

}

loadquestion()



//filter difficulty wise 


function filter_difficulty(condition) {
    var table = document.getElementById("appending-in-table")
    let tr = table.getElementsByTagName("tr")

    console.log(tr.length)

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1]

        if (td) {
            let textvalue = td.textContent || td.innerHTML
            if (textvalue.indexOf(condition) > -1) {
                // tr[i].classList.add("td2")
                tr[i].style.display = ""
            }

            else {
                tr[i].style.display = "none"
            }
        }

    }
}

function diff_function1() {

    var dif_easy = document.getElementById("easy").innerText

    console.log(dif_easy)

    filter_difficulty(dif_easy)

}
function diff_function2() {

    var dif_medium = document.getElementById("medium").innerText

    console.log(dif_medium)

    filter_difficulty(dif_medium)

}
function diff_function3() {

    var dif_hard = document.getElementById("hard").innerText

    console.log(dif_hard)

    filter_difficulty(dif_hard)

}




// filter for tags

function filter_tag(condition) {
    var table = document.getElementById("appending-in-table")
    let tr = table.getElementsByTagName("tr")

    console.log(tr.length)

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[2]

        if (td) {
            let textvalue = td.textContent || td.innerHTML
            if (textvalue.indexOf(condition) > -1) {
                tr[i].style.display = ""
            }

            else {
                tr[i].style.display = "none"
            }
        }

    }
}


function tag_filter1() {
    var array = document.getElementById("Array").innerText
    // console.log(array)
    filter_tag(array)
}

function tag_filter2() {
    var array = document.getElementById("String").innerText
    console.log(array)
    filter_tag(array)
}
function tag_filter3() {
    var array = document.getElementById("Hash Table").innerText
    console.log(array)
    filter_tag(array)
}
function tag_filter4() {
    var array = document.getElementById("Math").innerText
    console.log(array)
    filter_tag(array)
}
function tag_filter5() {
    var array = document.getElementById("Sorting").innerText
    console.log(array)
    filter_tag(array)
}



function searchfunction(){
    var table = document.getElementById("appending-in-table")
    let tr = table.getElementsByTagName("tr")

    var condition=document.getElementById("myinput").value.toUpperCase()
    // console.log(search)

    console.log(tr.length)

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0]

        if (td) {
            let textvalue = td.textContent || td.innerHTML
            if (textvalue.toUpperCase().indexOf(condition) > -1) {
                tr[i].style.display = ""
            }

            else {
                tr[i].style.display = "none"
            }
        }

    }
}
