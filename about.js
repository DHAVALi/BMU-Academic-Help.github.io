
async function loadpage() {
    let request = new Request("about.json")
    let response = await fetch(request)
    let obj = await response.json()
    loadcontactpage(obj)
}
loadpage()




let abt = document.createElement("div")
abt.classList.add("abt")

let section_one = document.getElementById("section_one")
section_one.appendChild(abt)

let h1 = document.createElement("h1")
h1.innerHTML = "About us"

abt.appendChild(h1)

let slogan = document.createElement("div")
slogan.classList.add("slogan")
slogan.innerHTML = `
<h6>Educate</h6>
<h6>Enable</h6>
<h6>Empower</h6>
`

abt.appendChild(slogan)


let row1 = document.createElement("div")
row1.classList.add("row1")
row1.innerHTML = `<h2>Our Mission & Impact</h2>
<h1>Democratise access to high quality education</h1>`

section_one.appendChild(row1)


let section_two = document.getElementById("section_two")
let row2 = document.createElement("div")
row2.classList.add("row2")

section_two.appendChild(row2)

let col1 = document.createElement("div")
col1.classList.add("col1")

row2.appendChild(col1)

let box_row1 = document.createElement("div")
box_row1.classList.add("box_row")

col1.appendChild(box_row1)

let box_row2 = document.createElement("div")
box_row2.classList.add("box_row")

col1.appendChild(box_row1)
col1.appendChild(box_row2)

let col2 = document.createElement("div")
col2.classList.add("col2")
row2.appendChild(col2)

box_row1.innerHTML = `
<div class="box1">
    <h1 style="color: #08bd80;">50M+</h1>
    <h3>Active Listners</h3>
</div>
<div class="box1">
    <h1 style="color: #2d81f7;">1000+</h1>
    <h3>Top Educators</h3>
</div>`

box_row2.innerHTML = `
<div class="box1">
    <h1 style="color: #ffad3b;">1B+</h1>
    <h3>Minutes Watched</h3>
</div>
<div class="box1">
    <h1 style="color: #eb5757;">2000+</h1>
    <h3>Lectures</h3>
</div>`


col2.innerHTML = ` <img src="images/laptop.png">`


let section_3 = document.getElementById("section_3")
let content = document.createElement("div")
section_3.appendChild(content)
content.classList.add("content")
content.innerHTML = `<div class="left">
<h1>Our Story</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem fugiat alias. Quia est nesciunt laudantium animi possimus nisi sit in? Pariatur, temporibus sapiente tenetur maiores delectus iusto debitis autem, illum cumque quos eveniet blanditiis, beatae porro consequatur. Sunt fuga voluptatibus, eaque ea sint iure numquam repudiandae, quasi tempora corrupti dolore placeat laboriosam consequatur dolor explicabo deserunt sapiente expedita laborum est? Blanditiis, amet tempora consequatur qui veniam minus nihil ipsam iure aspernatur rem dicta esse obcaecati quaerat a, laboriosam nisi saepe id! Illum labore omnis eum voluptatem deleniti quasi quae, accusantium ratione quibusdam laudantium cumque rem explicabo atque maxime expedita, culpa incidunt autem ipsum? Distinctio quia atque repudiandae nisi hic sequi, tenetur, aspernatur nostrum ex error dolore placeat eum commodi quaerat minus recusandae id? Sed sint facere quia sapiente aut iusto. Labore ipsam voluptatum tempora minus molestias itaque, possimus reiciendis? Modi debitis reprehenderit, error asperiores ducimus unde nobis reiciendis deserunt optio similique animi dolorum porro aliquam quisquam ea itaque facilis esse inventore, aut ipsam, nostrum deleniti officia? Reiciendis amet distinctio nemo modi quidem quo assumenda numquam, repellat dolor enim eaque. Aliquid sint asperiores non ipsum aut accusantium omnis iusto qui. Eos provident nihil ratione earum aliquam consectetur necessitatibus nesciunt! Perspiciatis.</p>
</div>
<div class="right">
<img src="images/Group-4362.png">
</div>`




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