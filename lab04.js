alert('Welcome to you at my page');

var color = confirm('Are you prefer to change page color ?');
if(color == true){
    var colorchange =prompt('What color do you prefer to be the page color?','input color name');
    document.body.style.backgroundColor = colorchange;
}
else{
    alert('As you want \n Welcome to you again');
}




