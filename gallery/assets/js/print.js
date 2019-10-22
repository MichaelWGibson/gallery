

function test(e) {
    localStorage.clear();
    var test= e.getElementsByClassName("card")[0];
    console.log(e);
    console.log(test);

    var title = test.getElementsByTagName("h5")[0].innerHTML;
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
    
}

function clearStorage(){
    localStorage.clear();
}