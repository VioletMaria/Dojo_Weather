function showAlert(){
    var alert = document.querySelector("#alert");
    var displaySettings = alert.style.visibility;

    if(displaySettings == 'hidden'){
        alert.style.visibility = 'visible';
    } else {
        alert.style.visibility = 'hidden';
    }
}
