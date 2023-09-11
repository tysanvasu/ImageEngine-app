const accesskey = `gke4gzSt-hrgEtmJ6ZG05rt-ncdPv8KAUdRJ3RWgmRg`;

const searchform = document.getElementById("search");
const searchbox = document.getElementById("input-search");
const searcResult = document.getElementById("result");
const searchmore = document.getElementById("more");

let key = '';
let page = 1;
async function searchimage() {
    key = searchbox.value;
    const url = ` https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${accesskey}&per_page=12`;

 if(page === 1){
 searcResult.innerHTML = "";
 }
    const responce = await fetch(url);
    const data =  await responce.json();

    const results = data.results;
    results.map((result) =>{
     
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    console.log(result);
    imagelink.appendChild(image); 


    searcResult.appendChild(imagelink)
    })
    searchmore.style.display = "block";

};
searchform.addEventListener("submit", (e)=>{
e.preventDefault();
page = 1;
searchimage();
});

searchmore.addEventListener("click",()=>{
page++;
searchimage();

})