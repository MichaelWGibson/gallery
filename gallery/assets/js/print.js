

function test(e) {
    localStorage.clear();
    var test= e.getElementsByClassName("card")[0];
    console.log(e);
    console.log(test);

    var title = test.getElementsByTagName("h6")[0].innerHTML;
    var filamentColor = test.getElementsByClassName("card-category")[0].innerHTML;
    var picSrc = test.getElementsByTagName("img")[0].src;
    var price = test.getElementsByClassName("stats")[0].innerHTML;
    price = price.split("$")[1];

    localStorage.title = title;
    localStorage.filamentColor = filamentColor;
    localStorage.picSrc = picSrc;
    localStorage.price = price;

    

}

function test1(){
    console.log(localStorage.title + " " + localStorage.filamentColor + " " + localStorage.picSrc + " " + localStorage.price);

    var title = document.getElementsByClassName("title")[0];
    title.innerHTML = localStorage.title;
    var img = document.getElementsByClassName("av")[0];
    img.src = localStorage.picSrc;

    var price = document.getElementsByTagName("h6")[0];
    price.innerHTML = "Total: $" + localStorage.price;
    
}

function clearStorage(){
    localStorage.clear();
}

function findPrinter(){
    console.log("findPrinter");
    location.href = "./map.html";
    console.log(location.href);
}

var pics = [
    "../assets/img/printers/owner1.jpg",
    "../assets/img/printers/owner2.jpg",
    "../assets/img/printers/owner3.jpg",
    "../assets/img/printers/owner4.jpg",
    "../assets/img/printers/owner5.jpg",
    "../assets/img/printers/owner6.jpg",
    "../assets/img/printers/owner7.jpg",
    "../assets/img/printers/owner8.jpg",
    "../assets/img/printers/owner9.jpg",
    "../assets/img/printers/owner10.jpg",
]

function fillUsers(){

    var index = Math.floor(Math.random() * 10) + 1;

    var img = document.getElementsByClassName("avatar")[0];
    img.src = pics[index];

}