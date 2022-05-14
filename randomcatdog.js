const catimg = document.getElementById("catimg");
const dogimg = document.getElementById("dogimg");
const btncats = document.getElementById("btncats");
const btndogs = document.getElementById("btndogs");

btncats.addEventListener("click", ()=>{

    async function fetchCats(){

    const response = await fetch(`https://thatcopy.pw/catapi/rest/`);
    const data = await response.json();

    catimg.setAttribute("src", data.url);

    }
    
    fetchCats();
})

btndogs.addEventListener("click", ()=>{

    async function fetchDogs(){

    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();

    dogimg.setAttribute("src", data.message);

    }
    
    fetchDogs();
})