
// pjesa te butoni read more me ane te se ciles shfaqet teksti 

function readMore()  //krijimi i nje funksioni 

{
    var dots = document.getElementById ("dots");  // deklarimi i nje variable permes id 
    var readmore = document.getElementById ('readmore');   // deklarimi i nje variable permes id 
    var btn = document.getElementById('btn');   // deklarimi i nje variable permes id 

    if(dots.style.display === "none"){  //kushti, nese dots ka display none realizohet
        dots.style.display ="inline";  // e kthen displayn e dots ne inline 
        btn.innerHTML = "Lexo me shume"; // ndryshon tekstin e butonit 
        readmore.style.display= 'none';  //shendron tekstin te read more ne te padukshem ( pra e mshef)
}
else{                                      //kushti nese nuk plotesohet i pari 
    dots.style.display = 'none';   // e kthen displayn e dots ne te fshehur 
    btn.innerHTML = " Lexo me pak";  // ndryshon tekstin e butonit 
    readmore.style.display = 'inline';   //shendron tekstin te read more ne teksti inline
}
};


// pjesa fotov, ndarja e tyre permes js 
const btn = document.querySelectorAll(".btn");  // deklarimi i nje konstante permes te gjitha klasav qe kan klasen btn
const photo = document.querySelectorAll(".photo1");  // deklarimi i nje konstante permes te gjitha klasav qe kan klasen photo1


for (i = 0; i < btn.length; i++) {     //perdorimi i unazes
    btn[i].addEventListener("click", (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

       photo.forEach((product) => {
            if (filter === "kosova") {
                product.style.display = "block";
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    });
};



//ndrri i fotov ne menyre automatike

let image = document.getElementById ("image");  //thirrja e fotos permes id
let images = ['photo1.jpg','photo2.jpg','photo3.png'] ;//thirrja e fotov 

setInterval(function() {
    let random = Math.floor(Math.random() * 3) ; //permes math.random merret foto random
   image.src= images[random]; //marrja e fotov permes random ne image 
}, 800);



//shfaqja e ores

function DataVitiMuaji(){
    document.getElementById("tanipertani").innerHTML = Date();
}


