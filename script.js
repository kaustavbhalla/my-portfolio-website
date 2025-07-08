function siteResponse() {
    var x = document.getElementById("myTopNav");
    if (x.className == "nav-bar"){
        x.className += ' responsive';
        
    } else{
        x.className = "nav-bar"
    }
}