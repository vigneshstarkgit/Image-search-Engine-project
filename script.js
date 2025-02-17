const accesskey = "your api key";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmore = document.getElementById("showmore-btn");

let keyword = "";
let page = 1;

async function searchimages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchresult.innerHTML="";
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
    showmore.style.display = "block";



}
searchform.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchimages();
});

showmore.addEventListener("click",()=>{
    page++;
    searchimages();

});

