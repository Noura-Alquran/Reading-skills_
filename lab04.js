function welcome (userName){
alert('Welcome to you at my page');
var userName = prompt('What is your name?');
while (userName=="")
{userName = prompt('Please enter your name');
}
alert('Welcome '+ userName );
}
welcome ();

//function backgroundcolor (color , colorchange){

//var color = confirm('Are you prefer to change page color ?');
//if(color == true){
 //   var colorchange =prompt('What color do you prefer to be the page color?','input color name');
  //  document.body.style.backgroundColor = colorchange;
  //  alert (' The color will be '+colorchange +'\n Enjoy reading');
//}
//else{
  //  alert('As you want \n Welcome to you again');
//}
//}
//backgroundcolor();

function flowershow (userOrder , userName)
{
alert ('I want to show you a flower image');
var userOrder =prompt ('Which kind of flower do you prefer to see tulipes or sunflower?');

while (userOrder !== 'tulipes' && userOrder !=='sunflower')
{
    userOrder = prompt ('please enter the correct kind');
}
 var userInput = prompt (' How many images do you want ?');
 var image= '';

 for ( var i =0;i<userInput;i++)
 {
    if (userOrder=='tulipes')
    {image = image +'<img src="https://www.almrsal.com/wp-content/uploads/2019/05/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D8%A7%D9%84%D8%AA%D9%88%D9%84%D9%8A%D8%A8.jpg">'}
 else if (userOrder=='sunflower')
 {
     image =image +'<img src="https://www.ultrasawt.com/sites/default/files/styles/large/public/6820e2abc154651d778c4e3a02a42d11.jpg?itok=jdlwVUGH">'}
 
    }
    document.write(image);
}
flowershow ();





