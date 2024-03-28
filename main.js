function onLoad(){
    document.getElementById("loader").remove()
}  
var h = document.getElementById("here");
h.addEventListener('click', function(event){
    highlight(this);
    console.log("done");
});
function highlight(element){
    event.preventDefault();
    element.classList.add('highlighted');
    console.log("done");
}