const acesskey='8VPsWqS3yDdkRAdlV7ch7Mr_bGi2og3wy4TXE-zD5Ak';
const form1=document.querySelector("form");
const inputele=document.getElementById("input-statement");
const images=document.querySelector(".Search-images");
const Showmorebutton=document.getElementById("Showmorebutton");
let inputdata="";
let page=1;
async function project() {
    inputdata=inputele.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acesskey}`;
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    if(page==1){
        images.innerHTML="";
    };
    results.map((result) => {
        const divcontain = document.createElement("div");
        divcontain.classList.add("Searchresults");
        const img=document.createElement("img");
        img.src=result.urls.small;
        img.alt=result.alt_description;
        const imglink=document.createElement("a");
        imglink.href=result.links.html;
        imglink.target="_blank";
        imglink.textContent=result.alt_description;

        divcontain.appendChild(img);
        divcontain.appendChild(imglink);
        images.appendChild(divcontain);
    });
    page++;
    if(page>1) {
        Showmorebutton.style.display="block";
    };
};
form1.addEventListener("submit",(event) => {
    event.preventDefault();
    page=1;
    project();
});
Showmorebutton.addEventListener("click",() => {
    project();
});