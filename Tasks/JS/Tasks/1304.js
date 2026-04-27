let main = document.querySelector("main");

async function fetchData() {
    let data = await fetch("https://fakestoreapi.com/products");
    let newdata = await data.json();
    console.log(newdata);
    newdata.forEach(product => {
        let divd = document.createElement("div");
        divd.classList.add("card");

        divd.innerHTML = `
                <img src="${product.image}" width="150">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;

        main.appendChild(divd);
    });
}

fetchData();