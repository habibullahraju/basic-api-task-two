const loadData = () => {
    fetch('data.json').then(res => res.json()).then(data => displayData(data))
}

const displayData = (data) => {
    const element = document.getElementById('card-container');

    data.forEach(data => {
        console.log(data.price);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML= `
        <img class="img-fluid" src="${data.imageURL?  data.imageURL : 'https://picsum.photos/200'}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <button class="btn btn-primary">Car Price: ${data.price}</button>
        </div>
        `;
        element.appendChild(div);
    })
}

loadData();