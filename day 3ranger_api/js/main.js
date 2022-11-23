// function to grab our Ranger Data

const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// create a variable that houses where the DOM element is being called
const DOM_elements = {
    // .ranger-list is ranger-list class in html file
    ranger_lists: '.ranger-list'
}

// Creation of Ranger List html (HTML we are going to render in Ranger-List)
const create_list = (id,name, color, coin, season) => {
    const html = `<a href = "#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`
    const html2 = `<div class="card" style="width: 80%; id="${id}">
    <div class="card-header">
      ${name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Color: ${color}</li>
      <li class="list-group-item"> Coin: ${coin}</li>
      <li class="list-group-item"> Season: ${season}</li>
    </ul>
  </div>
  <br>`

    // the below basically tells it where to display the html
    document.querySelector(DOM_elements.ranger_lists).insertAdjacentHTML('beforeend', html2)
}

// function to Load Data and display html
const load_data = async () => {
    // sets rangers variable to the data retrieved by getData
    const rangers = await getData()
    rangers.forEach(element => {
        // be aware that these are positional because of how we defined the function above
        // note that we use bracket notation for power-coin because JS doesn't like dot notation with the "-"" for some reason
        if (element['power-coin']){
            create_list(element.id, element.name, element.color, element['power-coin'], element.season)
        } else {
            create_list(element.id, element.name, element.color, element['morp-coin'], element.season)
        }
    })
}

// Funtion to Clear Data
const clear_data = () => {
    document.querySelector(DOM_elements.ranger_lists).innerHTML = ''
}