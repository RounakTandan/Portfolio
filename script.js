function opentab(tabname) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var y = document.getElementsByClassName("tab-links");
    
    // Hide all tab contents
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    
    // Remove active class from all tab links
    for (i = 0; i < y.length; i++) {
        y[i].classList.remove("active-link");
    }
    
    // Show current tab and add active class to clicked tab link
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
