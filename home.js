async function loadpage() {
    var request = new Request("home.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    console.log(json_obj)
    loadbmuimage(json_obj)
    loadreviewpage(json_obj)
    loadknowus(json_obj)
    loadcontactpage(json_obj)

}
loadpage()

var header = document.getElementById("header")
var nav = header.getElementsByTagName("nav")[0]
header.appendChild(nav)





function loadbmuimage(json_obj) {
    let img = document.createElement("img")
    img.src = json_obj['logo']
    img.classList.add("logo")

    nav.appendChild(img)

    let div = document.getElementsByClassName("nav-links")[0]
    div.innerHTML = `<ul>
        <li><a href="index.html">${json_obj.home}</a></li>
        <li><a href="prob.html">${json_obj.practice}</a></li>
        <li><a href="quiz.html">${json_obj.compiler}</a></li>
        <li><a href="about.html">${json_obj.about}</a></li>
        </ul>`


    let div2 = document.getElementsByClassName("text-heading")[0]
    let h1 = document.createElement("h1")
    h1.innerHTML = ` ${json_obj.text[0]}`
    div2.appendChild(h1)

    let p = document.createElement("p")
    p.innerHTML = ` ${json_obj.text[1]}`
    div2.appendChild(p)

    let a = document.createElement("a")
    a.innerHTML = ` ${json_obj.text[2]}`
    a.classList.add("enroll_button")
    div2.appendChild(a)

}






function loadreviewpage(json_obj) {
    let review = document.getElementById("review")
    let h1 = document.createElement("h1")
    h1.innerHTML = ` ${json_obj.text[3]}`
    review.appendChild(h1)

    let p = document.createElement("p")
    p.innerHTML = ` ${json_obj.text[4]}`
    review.appendChild(p)




    // col1
    let row = document.getElementsByClassName("row")[0]
    let col = document.getElementsByClassName("col")[0]

    review.appendChild(row)


    col.innerHTML = `<i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-stroke"></i>`

    let p1 = document.createElement("p")
    p1.innerHTML = ` ${json_obj.text[5]}`
    col.appendChild(p1)

    let name_course = document.createElement("div")
    name_course.classList.add("name-course")
    name_course.innerHTML = `<div class="icon"><i class="fas fa-user"></i></div>
                 `
    let text = document.createElement("div")
    text.classList.add("text")
    text.innerHTML = `<div class="name">${json_obj.name_course_data[0].name}</div>
                  <div class="course">${json_obj.name_course_data[0].course}</div>`

    name_course.appendChild(text)
    col.appendChild(name_course)




    // col2
    let col2 = document.getElementsByClassName("col")[1]
    // review.appendChild(row)

    col2.innerHTML = `<i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-stroke"></i>`

    let p2 = document.createElement("p")
    p2.innerHTML = ` ${json_obj.text[5]}`
    col2.appendChild(p2)

    var name_course2 = document.createElement("div")
    name_course2.classList.add("name-course")
    name_course2.innerHTML = `<div class="icon"><i class="fas fa-user"></i></div>
                 `
    let text2 = document.createElement("div")
    text2.classList.add("text")
    text2.innerHTML = `<div class="name">${json_obj.name_course_data[1].name}</div>
                  <div class="course">${json_obj.name_course_data[1].course}</div>`

    name_course2.appendChild(text2)
    col2.appendChild(name_course2)






    // col3
    let col3 = document.getElementsByClassName("col")[2]


    col3.innerHTML = `<i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-stroke"></i>`

    let p3 = document.createElement("p")
    p3.innerHTML = ` ${json_obj.text[5]}`
    col3.appendChild(p3)

    var name_course3 = document.createElement("div")
    name_course3.classList.add("name-course")
    name_course3.innerHTML = `<div class="icon"><i class="fas fa-user"></i></div>
             `
    let text3 = document.createElement("div")
    text3.classList.add("text")
    text3.innerHTML = `<div class="name">${json_obj.name_course_data[2].name}</div>
             <div class="course">${json_obj.name_course_data[2].course}</div>`

    name_course3.appendChild(text3)
    col3.appendChild(name_course3)
}








function loadknowus(json_obj) {

    let know_us = document.getElementsByClassName("know-us")[0]
    let bgcolor = document.createElement("div")
    bgcolor.classList.add("bgcolor")
    know_us.appendChild(bgcolor)

    let cont = document.createElement("div")
    cont.classList.add("cont")
    bgcolor.appendChild(cont)

    let cont_left = document.createElement("div")
    cont_left.classList.add("cont-left")
    cont.appendChild(cont_left)

    let bar = document.createElement("div")
    bar.classList.add("bar")
    cont_left.appendChild(bar)

    let h1 = document.createElement("h1")
    h1.innerHTML = `${json_obj.know_us_text[0]}`
    cont_left.appendChild(h1)

    let p = document.createElement("p")
    p.innerHTML = `${json_obj.know_us_text[1]}`
    cont_left.appendChild(p)

    let socials = document.createElement("ul")
    socials.classList.add("socials")
    socials.innerHTML = ` <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fab fa-instagram-square"></i></li>
                <li><i class="fab fa-whatsapp-square"></i></li>
                   <li><i class="fab fa-twitter-square"></i></li>
`

    cont_left.appendChild(socials)


    let cont_right = document.createElement("div")
    cont_right.classList.add("cont-right")
    cont_right.innerHTML = `<img src="images/school-_-college-books-500x500 1.png" alt="">`
    cont.appendChild(cont_right)

}


function loadcontactpage(json_obj) {

    let contact_text = document.getElementById("contact_text")
    contact_text.classList.add("contact_text")
    contact_text.innerHTML = `${json_obj.contact_text[9]} ${json_obj.contact_text[10]}`


    let detail_container = document.getElementById("my-details-container")
    let h3 = document.createElement("h3")
    h3.innerHTML = `${json_obj.contact_text[0]}`
    detail_container.appendChild(h3)

    let p = document.createElement("p")
    p.innerHTML = `${json_obj.contact_text[1]}`
    detail_container.appendChild(p)

    let h3_2 = document.createElement("h3")
    h3_2.innerHTML = `${json_obj.contact_text[2]}`
    detail_container.appendChild(h3_2)

    let detail_info_container = document.createElement("div")
    detail_info_container.classList.add("my-details-info-container")
    detail_info_container.innerHTML = `${json_obj.contact_text[6]}
    <span>${json_obj.contact_text[3]}</span>`

    let detail_info_container2 = document.createElement("div")
    detail_info_container2.classList.add("my-details-info-container")
    detail_info_container2.innerHTML = ` ${json_obj.contact_text[7]}
    <span>${json_obj.contact_text[4]}</span>`

    let detail_info_container3 = document.createElement("div")
    detail_info_container3.classList.add("my-details-info-container")
    detail_info_container3.innerHTML = ` ${json_obj.contact_text[8]}
    <span>${json_obj.contact_text[5]}</span>`

    detail_container.appendChild(detail_info_container)
    detail_container.appendChild(detail_info_container2)
    detail_container.appendChild(detail_info_container3)
}


// form
var save_detail = []
class save {
    constructor(name, email, message) {
        this.name = name
        this.email = email
        this.message = message
    }
    disp() {
        console.log("Name:" + this.name + ",email:" + this.email + ",message:" + this.message)
    }

}

function send_message() {
    let input_name = document.getElementById("input-name").value
    let input_email = document.getElementById("input-email").value
    let input_message = document.getElementById("input-message").value

    let obj = new save(input_name, input_email, input_message)
    save_detail.push(obj)


    for (let obj of save_detail) {
        obj.disp()
    }
}



