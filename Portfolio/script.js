function submitForm() {
    
    var r =  confirm("Your answers have been submitted");
    var x;
        
    if ( r == true) {
        x = "Thank You!";
    }
    
    document.getElementById("thanks").innerHTML = x;
    
}
