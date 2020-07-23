// CHAPTER # 1


// Task 1
// alert("Welcome to our website")


//Task 2
// alert("Error! Please enter a valid password")


// Task 3
// alert("Welcome to JS Land...\n Happy Coding!")


// Task 4
// alert("Welcome to JS Land")
// alert("Happy Coding! \n Prevent this page from creating additional dialogs")


//Task 5
//in console








//CHAPTER # 2

//Task 1
// var username;


//Task 2
// var myName = "Arslan Shabbir"


//Task 3
// var message = "Hello World"
// alert(message)


//Task 4
// var name = prompt("Enter your name")
// var age = prompt("Enter your age")
// var course = prompt("Enter course name")

// alert(name)
// alert(age)
// alert(course)



//Task 5
// alert(" Pizza \n Pizz \n Piz \n Pi \n P")


//Task 6
// var message = prompt("Enter your email address")
// alert("My email address is " + message)


//Task 7
// var book = "A smarter \n way to learn JavaScript"
// alert("I am trying to learn from the Book " + book)


//Task 8
// var m = "Yah! I can write HTML content through JavaScript"
// document.write(m)


//Task 9
// var n ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(n)
// document.write(n)











//CHAPTER # 3


//Task 1

// var age = "I am 15 years old"
// alert(age)


//Task 2
// for(var i =1; ;i++){
//     alert("you have visited the site " + i + " times")
// }


//Task 3
// var birthYear = 1960
// document.write("My birth year is "+ birthYear + "<br>" + " Date type of my declared variable is number")



//Task 4
// var visitorName ="John Doe "
// var productTitle = " T-shirt(s)"
// var quantity = " 5"
// document.write(visitorName + " ordered " + quantity + productTitle +" on " + "XYZ Clothing Store")










//CHAPTER # 4


//Task 1
// var x,y,z;



//Task 2
//legel
// var name;
// var Name;
// var $name;
// var firstName;
// var _name;
//illegal
// var for; reserved words
// var !name;
//var 123name;
// var first name;



//Task 3
//heading is in index.html
// document.write("Variable names can only contain numbers, $ and _. For example : $my_1stVariable"
// + "<br>" + "Variable must begin with a letter, $ or _ . For Example : $name, _name or name"
// + "<br>" + "Variable names are case sensitive" + "<br>" + "Variable names should not be JS keywords")









//CHAPTER # 5

//Task 1
// var a = 3;
// var b = 5;
// var x = a+b;
// document.write("Sum of " + a + " and " + b + " is " + x)


//Task 2
// var a = 5;
// var b = 3;
// var w = a-b;
// var x = a*b;
// var y = a/b;
// var z = a%b;
// document.write("Subtract of " + a + " and " + b + " is " + w + "<br>" + 
// "Multiplication of " + a + " and " + b + " is " + x + "<br>" +
// "Division of " + a + " and " + b + " is " + y + "<br>" +
// "Modulus of " + a + " and " + b + " is " + z)



//Task 3
// var x;
// document.write("Value after variable declaration is " + x)
// x=5;
// document.write("<br>" + "Initial value is : "+ x)
// x++;
// document.write("<br>" + "Value after increment is : "+ x)
// x=x+7;
// document.write("<br>" + "Value after addition is : "+ x)
// x--;
// document.write("<br>" + "Value after decrement is : "+ x)
// x =x%3;
// document.write("<br>" + "The remainder is : "+ x)



//Task 4
// var cost = 600;
// var x = cost*5;
// document.write("Total cost to buy 5 tickets to a movie is "+ x + "PKR")



//Task 5
// document.write("Table of 2"+"<br>")
// var x = 2;
// for(var i = 1; i<=10; i++){
//     document.write(x + "*" +i + "=" + x*i +"<br>")
// }



//Task 6
// var tempInCelsius = 25
// var farenheight = (tempInCelsius*9/5)+32;
// var tempInfaren = 70;
// var celsius = (tempInfaren-32)*5/9;
// document.write(tempInCelsius + "<sup>o</sup>" + "C" + " is " + farenheight +"<sup>o</sup>" + "F")
// document.write("<br>" +tempInfaren + "<sup>o</sup>" + "F" + " is " + celsius +"<sup>o</sup>" + "C")



//Task 7
//heading is in index.html

// var priceItem1 = 650;
// var quantityItem1 = 3;
// var priceItem2 = 100;
// var quantityItem2 = 7;
// var shipping = 100;
// var total = priceItem1*quantityItem1+priceItem2*quantityItem2+shipping;
// document.write("Price of item 1 is "+ priceItem1+ "<br>")
// document.write("Quantity of item 1 is "+ quantityItem1+ "<br>")
// document.write("Price of Item 2 is "+ priceItem2+ "<br>")
// document.write("Quantity of item 2 is "+ quantityItem2+ "<br>")
// document.write("Shipping Charges "+ shipping+"<br>"+"<br>")
// document.write("Total cost of your order is "+ total)




//Task 8
// var total = 980;
// var obtained = 804;
// var percentage = obtained*100/total;
// document.write("Total marks : "+ total + "<br>" + "Marks obtained : "+obtained+"<br>"+"Percentage : "+ percentage+"%")



//Task 9
// var dollarrate = 104.80;
// var saudirate = 28;
// var total = 10*dollarrate+25*saudirate;
// document.write("Total Currency in PKR : "+total)



//Task 10
// var x = (2+5*10)/2;
// document.write(x)



//Task 11
// var currentYear = 2020;
// var birthYear = 1996;
// var age = currentYear-birthYear;
// document.write("Current Year : "+currentYear+"<br>"+"Birth Year : "+birthYear+"<br>"+"Your age is  : "+age)



//Task 12
// var radious = 20;
// var circumference = 2*3.142*radious;
// var area = 3.142*radious*radious;
// document.write("Radious of a Circle is : "+ radious+"<br>"+"The Circumference is : "+circumference+"<br>"+
// "The area is : "+ area)




//Task 13
// var favSnack = "chocolate chip";
// var curAge = 15;
// var maxAge = 65;
// var snackPerDay = 3;
// var totalneeded = 365*(maxAge-curAge)*3;
// document.write("Favourite Snack :"+favSnack+"<br>"+"Current Age : "+curAge+"<br>"+"Estimated Maximum Age : "+maxAge
// +"<br>"+"Amount of snack per day : "+ snackPerDay+"<br>"+"You will nedd "+totalneeded+"chocolate chip to last you until the ripe old age of 65")









//CHAPTER 6-9

//Task 1
// var a = 10;
// document.write("Result:"+"<br>"+"The value of a is : "+a+"<br>");
// ++a;
// document.write("<br>"+"The value of ++a is : "+a);
// document.write("<br>"+"Now the value of a is : "+a+"<br>");
// a++
// document.write("<br>"+"The value of a++ is : "+a);
// document.write("<br>"+"Now the value of a is : "+a+"<br>");
// --a
// document.write("<br>"+"The value of --a is : "+a);
// document.write("<br>"+"Now the value of a is : "+a+"<br>");
// a--
// document.write("<br>"+"The value of a-- is : "+a);
// document.write("<br>"+"Now the value of a is : "+a);





//Task 2

//var a = 2, b = 1; 
// --a                                    output will be 1
// --a - --b                              output will be 1
// --a - --b + ++b                        output will be 2
// var result = --a - --b + ++b + b--;    output will be 3

// a = 1,  b = 0,  result = 3




//Task 3

// var name = prompt("Enter your name")
// console.log("Welcome "+ name);




//Task 5

// var a = prompt("Enter a number");
// if(a > 0){
//       for (var i = 1; i<=10; i++){
//             var m = a * i;
//             console.log(a + "*" + i + "=" + m);
//      }
// }
// else{
//       var n = 5;
//       for (var i = 1; i<=10; i++){
//             var m = n * i;
//             console.log(n + "*" + i + "=" + m);
             
//       }
// }




//Task 6

// var firstSub = prompt("Enter first subject name");
// var secondSub = prompt("Enter second subject name");
// var thirdSub = prompt("Enter third subject name");
// var total = 100;
// var totalMarks = 300;
// var firstMarks = prompt("Enter the marks of first Subject")
// var secondMarks = prompt("Enter the marks of second Subject")
// var thirdMarks = prompt("Enter the marks of third Subject")
// var totalObt = +firstMarks + +secondMarks + +thirdMarks;
// var per =  totalObt / totalMarks * 100;
// var permarks = firstMarks / total * 100+"%";
// var r21 = document.getElementById("twotd1")
// r21.innerHTML = firstSub;
// var r22 = document.getElementById("twotd2")
// r22.innerHTML = total;
// var r23 =  document.getElementById("twotd3")
// r23.innerHTML = firstMarks
// var r24 =  document.getElementById("twotd4")
// r24.innerHTML = permarks;
// var r1 = document.getElementById("twotr")
// r1.appendChild(r21)
// r1.appendChild(r22)
// r1.appendChild(r23)
// r1.appendChild(r24)


// var r31 = document.getElementById("threetd1")
// r31.innerHTML = secondSub;
// var r32 = document.getElementById("threetd2")
// r32.innerHTML = total;
// var r33 =  document.getElementById("threetd3")
// r33.innerHTML = secondMarks
// var r34 =  document.getElementById("threetd4")
// r34.innerHTML = permarks;
// var r2 = document.getElementById("threetr")
// r2.appendChild(r31)
// r2.appendChild(r32)
// r2.appendChild(r33)
// r2.appendChild(r34)


// var r41 = document.getElementById("fourtd1")
// r41.innerHTML = thirdSub;
// var r42 = document.getElementById("fourtd2")
// r42.innerHTML = total;
// var r43 =  document.getElementById("fourtd3")
// r43.innerHTML = thirdMarks
// var r44 =  document.getElementById("fourtd4")
// r44.innerHTML = permarks;
// var r3 = document.getElementById("fourtr")
// r3.appendChild(r41)
// r3.appendChild(r42)
// r3.appendChild(r43)
// r3.appendChild(r44)

// var r52 = document.getElementById("fivetd2")
// r52.innerHTML = totalMarks;
// var r53 = document.getElementById("fivetd3")
// r53.innerHTML = totalObt;
// var r54 = document.getElementById("fivetd4")
// r54.innerHTML = per;
// var r4 = document.getElementById("fivetr")

// r4.appendChild(r52)
// r4.appendChild(r53)
// r4.appendChild(r54)








// CHAPTER 9 TO 11

// USER INPUT AND CONDITIONAL STATEMENT


// Task 1

// var city = prompt("Enter your city name")
// var c = city.toLowerCase();
// if (c==="karachi"){
//       alert("Welcome to city of lights")
// }
// else{
//       alert("Welcome in "+ city);
// }



//Task 2

// var gen = prompt("Enter your gender");
// var gender = gen.toLowerCase();
// if(gender === "male"){
// alert("Good Morning Sir")      
// }
// if(gender === "female"){
//       alert("Good Morning Ma'am")
// }



//Task 3

// var signal = prompt("Enter color of road traffic signal ")
// var col = signal.toLowerCase();
// if(col === "red"){
//     alert("Must stop")
// }
// else if (col === "yellow"){
//     alert("Ready to move")
// }
// else if (col === "green"){
//     alert("Move now")
// }
// else{
//     alert("Please enter right color")
// }




// Task 4

// var fuel = prompt("Enter remaining fuel in car (in litres)","0");
// var crr = parseInt(fuel)
// if(crr< 0.25){
// alert("Please refil the fuel in your car")
// }
// else{
//     alert("Enough fuel")
// }




//Task 5

// a -->   yes alert will display
// b -->   No alert will not display
// c -->   Condition 2 and 4 is true  
// d --> the cost equals
// e -->  true
//f -->  car is smaller than cat




//Task 6

// var first = prompt("Enter first sbject marks")
// var second = prompt("Enter second sbject marks")
// var third = prompt("Enter third sbject marks")
// var total = prompt("Enter total marks")
// var totalMarks = +first + +second + +third ;
// var per = totalMarks/total *100;

// if(per >= 80){
// var grade = "A-one";
// var remarks = "Excellent"
// }
// else if(per>=70){
//     var grade = "A";
//     var remarks = "Good"   
// }
// else if(per >= 60){
//     var grade = "B";
// var remarks = "You need to improve"
// }
// else if(per < 60){
//     var grade = "Fail";
// var remarks = "Sorry"
// }
// document.write("Marks Sheet"+"<br>")
// document.write("Total Marks : "+ total+"<br>")
// document.write("Marks Obtained : "+ totalMarks+"<br>")
// document.write("Percentage : "+ per+"%"+"<br>")
// document.write("Grade : "+grade+"<br>")
// document.write("Remarks : "+remarks+"<br>")





//Task 7

// var num = 5;
// var guess = prompt("Guess a secret number");
// if(guess == num){
//     alert("Bingo! Correct Answer")
// }
// else if(guess == ++num){
//     alert("Close enough to correct answer")
// }




//Task 8

// var num = prompt("Enter number");
// if(num % 3 == 0){
//     alert("Number is divisible by three")
// }




//Task 9

// var num = prompt("Enter number");
// if(num % 2 == 0){
//     alert("Number is even")
// }
// else {
//     alert("Number is odd")
// }




//Task 10

// var temp = prompt("Enter temperature")
// if(temp > 40){
//     alert("It is too hot outside")
// }
// else if((temp > 30) && (temp <= 40)){
//     alert("The Weather today is normal")
// }
// else if(temp > 20){
//     alert("Today's Weather is cool")
// }
// else if (temp> 10)
// {
//     alert("OMG! Today’s weather is so Cool")
// }






//Task 11

// var firstnum = prompt("Enter first number")
// var secondnum = prompt("Enter second number")
// var op = prompt("Enter operator")
// if(op === '+'){
//     var add = +firstnum + +secondnum;
//     alert("The answer is : "+ add);
// }
// else if(op === '-'){
//     var add = firstnum - secondnum;
//     alert("The answer is : "+ add);
// }
// else if(op === '*'){
//     var add = firstnum * secondnum;
//     alert("The answer is : "+ add);
// }
// else if(op === '/'){
//     var add = firstnum / secondnum;
//     alert("The answer is : "+ add);
// }
// else if(op === '%'){
//     var add = firstnum % secondnum;
//     alert("The answer is : "+ add);
// }











// CHAPTER 12 - 13



//Task 1

// var input = prompt("Enter character")
// var chk = input.charCodeAt(0);
// if((chk>=65) && (chk<=90)){
//     alert("Uppercase Letter")}

// else if((chk>=97) && (chk<=122)){
//     alert("Lowercase Letter")}

//     else if((chk>=48) && (chk<=57)){
//         alert("Number")}




//Task 2

// var num1 = prompt("Enter first integer","0");
// var num2 = prompt("Enter second integer","0")
// var chk = Math.max(num1,num2);
// if(num1 === num2){
//     alert("same")
// }
// else{
//     alert(chk)
// }




//Task 3

// var input = prompt("Enter a number")
// if(input == 0){
//     alert("Number is 0")
// }
// else if(input < 0){
//     alert("Number is Negative")
// }
// else{
//     alert("Number is positive")
// }





//Task 4

// var char = prompt("Enter character","a");
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//     alert("true")
// }
// else{
//     alert("false")
// }




//Task 5

// var pass = "123"
// var password = prompt("Enter a password")
// if(password == ""){
//     alert("Please enter your password")
// }
// else if(password == pass){
//     alert("Correct!")
// }
// else{
//     alert("Incorrect")
// }





//Task 6

// var greeting; 
// var hour = 13;
//  if (hour < 18) {
//       greeting = "Good day";
//       console.log(greeting)
//  }
// else {
//     greeting = "Good evening";
//     console.log(greeting)
// }





//Task 7

// var time = prompt("Enter time","0000")
// if(time >= 0000 && time<1200){
//     alert("Good Morning!")
// }
// else if(time >= 1200 && time<1700){
//     alert("Good Afternoon!")
// }
// else if(time >= 1700 && time<2100){
//     alert("Good Evening!")
// }
// else if(time >= 2100 && time<2359){
//     alert("Good night!")
// }













// CHAPTER 14 TO 16

//ARRAYS


//Task 1

// var myArray = [];





//Task 2

// var myArray = new Array();





//Task 3

//var str = ["Hamza","Usama","Khan"]






//Task 4

//var num = [1,10,30]





//Task 5

// var myArr = [];
//          var value = 2;
//          for(var i = 0; i < value; i++) {
//             myArr.push(false);
//          }
//          alert(myArr);





//Task 6

// var person = ["John", "Doe", 46];
// console.log(person)




//Task 7

// var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"]
// for(var i = 1; i<=edu.length;i++){
//     document.write([i]+")"+edu[i]+"<br>")
// }





//Task 8

// var totalMarks = 500;
// var array1 = [];
// var array2 = [];
// for(var i = 0; i<3; i++){
// array1[i] = prompt("Enter the name of student")
// }
// for(var j = 0; j<3 ;j++){
// array2[j] = prompt("Enter your score")
// }
// document.write("Score of "+array1[0] + " is "+ array2[0] + ". Percentage : "+ array2[0] / totalMarks *100 + "%")
// document.write("Score of "+array1[1] + " is "+ array2[1] + ". Percentage : "+ array2[1] / totalMarks *100 + "%")
// document.write("Score of "+array1[2] + " is "+ array2[2] + ". Percentage : "+ array2[2] / totalMarks *100 + "%")







//Task 9

// var color = ["Red","Blue","Green"]
// document.write("initial array : "+color +"<br>")
// var add = prompt("What color you want to add in the beginning");
// color.unshift(add)
// document.write("Add at the beginning : "+color + "<br>")
// var pus =  prompt("What color you want to add at the end");
// color.push(pus)
// document.write("Add at the end : "+color + "<br>")
// for(var i=0;i<=1;i++){
//     var z = prompt("Add a color at the begining");
//     color.unshift(z)
// }
// document.write("After adding two colors at beginning : "+ color +"<br>")
// color.shift(0,1);
// document.write("After deleting one color from beginning : "+ color +"<br>")
// color.pop()
// document.write("After deleting last color from end : "+ color +"<br>")
// var specificIndex = prompt("At which index you want to add a color");
// var addColor = prompt("Write color name you want to add")
// color.splice(specificIndex,0,addColor)
// document.write("After adding a color at specific index : "+ color +"<br>")

// var specificDel = prompt("From which index you want to delete a color");
// var removeColor = prompt("How many colors you want to delete")
// color.splice(specificDel,removeColor)
// document.write("After deleting a color from specific index : "+ color +"<br>")






//Task 10

// var score = [];
// for(var i = 0; i<4; i++){
// score[i] = prompt("Enter your score")
// }
// document.write("Before sorting "+score+"<br>")
// score.sort();
// document.write("After sorting "+score)




//Task 11

// var city = ["Islamabad","karachi","Quetta","Lahore","Peshawar"];
// document.write("Cities List : "+"<br>"+city+"<br>")
// var newarr = city.slice(2,4)
// document.write("Selected Cities : "+"<br>"+newarr+"<br>")




//Task 12

// var arr = ["This ", " is ", " my ", " cat"];
// var str = arr.join("");
// document.write("Array "+"<br>"+arr+"<br>");
// document.write("String "+"<br>"+str+"<br>");





//Task 13

// var arr = [];
// arr[0] = "Keyboard";
// document.write(arr[0]+"<br>")
// arr[1] = "Mouse";
// document.write(arr[1]+"<br>")
// arr[2] = "Printer";
// document.write(arr[2]+"<br>")
// arr[3] = "Monitor"
// document.write(arr[3]+"<br>")






//Task 14

// var arr = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("Devices "+arr+"<br>")
//     arr.reverse();
//     document.write(arr[0]+"<br>")
//     document.write(arr[1]+"<br>")
//     document.write(arr[2]+"<br>")
//     document.write(arr[3]+"<br>")











//CHAPTER 17 TO 20 

// ARRAYS AND LOOP




//Task 1

// var arr = [,];



//Task 2

// var arr = [];
// arr.push([0, 1, 2, 3]);
// arr.push([1, 0, 1, 2])
// arr.push([2, 1, 0, 1])
// console.log(arr)




//Task 3

// for(var i=1; i<=10; i++){
//     document.write(i+"<br>")
// }




//Task 4

// var mul = prompt("Enter a number to show it's multiplication table")
// var till = prompt("Till which number you want to print multiplication table")
// for (var i = 1; i<=till; i++){
//               var m = mul * i;
//              console.log(mul + "*" + i + "=" + m);
//           }




//Task 5

// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0; i<fruits.length; i++){
//       console.log(fruits[i])
     
// }  





//Task 6

// document.write("Counting : "+"<br>"+"<br>")
// for(var i=1; i<=15; i++){
//     document.write(i+", ")
// }
// document.write("<br>"+"<br>"+"Reverse Counting : "+"<br>"+"<br>")
// for(var i=10; i>=1; i--){
//     document.write(i+", ")
// }
// document.write("<br>"+"<br>"+"Even : "+"<br>"+"<br>")
// for(var i=0; i<=20; i=i+2){

//     document.write(i+", ")
// }

// document.write("<br>"+"<br>"+"Odd : "+"<br>"+"<br>")
// for(var i=1; i<=20; i=i+2){

//     document.write(i+", ")
// }
// document.write("<br>"+"<br>"+"Series : "+"<br>"+"<br>")
// for(var i=2; i<=20; i=i+2){

//     document.write(i+"k , ")
// }






//Task 7

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to abc bakery. What do you want to order sir/ma'am?")
// for(var i=0; i<= A.length; i++){
//     if(search == A[i]){
//         document.write(search+ " is available at index "+ i +" in our bakery")
//         break;
       
//     }
// } 
// if(search == !A){
//     document.write("We are sorry "+search+ " is not available in our bakery "+"<br>")
// }





//Task 8

// var array = [24, 53, 78, 91, 12];
// var largest= 0;
// document.write("Array items : "+ array+"<br>")
// for (var i=0; i<=array.length;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// document.write("The largest number is : "+ largest)





// Task 9

// var array = [24, 53, 78, 91, 12];
// var smallest= 91;
// document.write("Array items : "+ array+"<br>")
// for (var i=0; i<=array.length;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }

// document.write("The smallest number is : "+ smallest)




//Task 10

// for(var i = 5; i<=100; i = i+5){
//     document.write(i+" ")
// }










//CHAPTER # 21-25
//STRING METHODS



//Task 1

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + lastName;
// document.write(fullName);




//Task 2

// var phone = prompt("Enter your favourite Mobile Model")
// document.write("My favourite Mobile Model is : "+ phone)
// var z = phone.length;
// document.write("<br>"+z)



//Task 3

// var str = "Pakistani";
// document.write("String: "+ str + "<br>");
//  var n = str.indexOf("n");
//  document.write("Index of 'n' :" + n);



//Task 4

// var str = "Hello World";
// document.write("String : "+ str+"<br>");
// var n = str.lastIndexOf("l");
// document.write("Last Index of L :"+ n);



//Task 5

// var str = "Pakistani";
// document.write("String: "+ str + "<br>");
//  var n = str.charAt(3)
//  document.write("Character at Index 3 :" + n);


//Task 6

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(lastName);
// document.write(fullName);


//Task 7

// var str = "Hyderabad";
// document.write("City :"+ str+"<br>");
// var replace = str.replace("Hyder","Islam");
// document.write("After Replacement :"+replace);


//Task 8

// var message = "Ali and sami are best friends, They play cricket and football together. ";
// var replace = message.split("and").join("&");
// document.write(replace) ;


//Task 9

// var str = "472";
// document.write("Value :"+str+"<br>"+"Type : string"+"<br>");
// var num = parseInt(str);
// document.write("Value :"+num+"<br>"+"Type : number");



//Task 10

// var input = prompt("Enter string");
// document.write("User Input :"+input+"<br>");
// var upp = input.toUpperCase();
// document.write("Upper case :"+upp);


//Task 11

// var input = prompt("Enter string");
// document.write("User Input :"+input+"<br>");
// var title = input.charAt(0).toUpperCase();
// var wer = input.slice(1);
// document.write("Title case :"+title+wer);



//Task 12

// var num = 35.36 ;
// var str = Math.floor(num);
// var string = str.toString();
// document.write("Number :"+num+"<br>")
// document.write("Result :"+string)


//Task 13

// var username = prompt("Enter user name");
// var res = String.fromCharCode(33, 44, 46, 64);

// if(username === res){
//   var z = prompt("Enter valid username")
//   document.write(z);
// }
// document.write(username)



//Task 14

// var a  = ["cake","apple pie","cookie","chips","patties"];
// var input = prompt("Welcom to ABC Bakery. What do you want to order"+"\n"+"sir/ma'am?");
// var con = input.toLowerCase();
// for(var i =0; i<=a.length; i++){
// if(a[i] === con){
//     alert(a[i] + "is available at index "+i +" in our bakery")
// }
// else{
//     alert("We are sorry. "+con + " is not available in our bakery")
// }

// }



//Task 15

// var pass = prompt("Enter password: ");
// //var ser = pass.slice(0,1);
// if(pass.charAt(0) === Number.isInteger())
// {

//     alert("Password cannot begin with a number please enter a valid password")

// }
// else if(pass.length<5){
//     alert("Password must be atleat 6 characters long")
// }
// else{
//     document.write(pass)
// }




//Task 16

// var university = "University of Karachi";
// var arr = university.split('');
// for(var i =0; i<arr.length;i++){
//     document.write(arr[i]+"<br>")
// }




//Task 17

// var str = prompt("Enter your country");
// document.write("User Input: "+str)
// var last = str[str.length-1];
// document.write("<br>"+ "Last Character of Input: "+last)




//Task 18

// var temp = "the quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) || []).length;
// document.write(count);










//CHAPTER 26-30



//Task 1

// var num = prompt("Enter a positie integer number");
//if(num>0){
// document.write("Number : "+num+"<br>");
// var round = Math.round(num);
// document.write("Round off value : "+round+"<br>");
// var floor = Math.floor(num);
// document.write("Floor value : "+floor+"<br>")
// var cei = Math.ceil(num);
// document.write("Ceil value : "+cei)
//}
//else{
 //   prompt("Enter a valid positive integer value")
//}





//Task 2

// var num = prompt("Enter a Negative integer number");
// if(num<0){
// document.write("Number : "+num+"<br>");
// var round = Math.round(num);
// document.write("Round off value : "+round+"<br>");
// var floor = Math.floor(num);
// document.write("Floor value : "+floor+"<br>")
// var cei = Math.ceil(num);
// document.write("Ceil value : "+cei)
// }
// else{
//     alert("Enter a valid negative integer")
// }




//Task 3

// var number = prompt("Enter value");
// var absolute = Math.abs(number);
// document.write(absolute)



//Task 4

// var number = Math.random()*4;
// var ceil = Math.ceil(number)
// document.write("Random dice value : "+ceil+"<br>");
// var num = Math.random()*6;
// var ceil2 = Math.ceil(num)
// document.write("Random dice value : "+ceil2);




//Task 5

// var number = Math.random()*2;
// var ceil = Math.floor(number)
// if(ceil === 0){
// document.write(ceil+"<br>"+"Random coin value : "+"Heads"+"<br>");
// }
// else{
//     document.write(ceil+"<br>"+"Random coin value : "+"Tails"); 
// }




//Task 6

// var number = Math.random()*100;
// var floor = Math.floor(number);
// document.write("random number between 1 and 100 : "+floor);




//Task 7

// var weight = prompt("Enter your weight in kilograms");
// var int = parseInt(weight);
// document.write("The weight of user is "+int +"<br>");
// var float = parseFloat(weight)
// document.write("The weight of user is "+float +"<br>");
// var string = weight.toString();
// document.write("The weight of user is "+string );




//Task 8

// var number = Math.random()*10;
// var floor = Math.floor(number);
// var input = prompt("Enter a number between 1 and 10");
// if(floor === input){
//     alert("Congratulations you have won")
// }
// else{
//     alert("Try again")
// }











//CHAPTER 31-34


//Task 1

// var date = new Date();
// document.write(date)




//Task 2

// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var now   = new Date();
// var thisMonth = months[now.getMonth()]; 
// document.write("Current Month : "+thisMonth)



//Task 3

// var da = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var date = new Date();
// var day = da[date.getDay()];
// document.write("Today is "+day)




//Task 4

// var da = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var date = new Date();
// var day = da[date.getDay()];
// if(day === 'Sat' || 'Sun'){
//     alert("Its Fun day");
// }
// else{
//     alert(day);
//     }




//Task 5

// var date = new Date();
// var da = date.getUTCDate()

// if(da<15){
//     alert("First fifteen days of the Month")
// }
// else{
//     alert("Last fifteen days of the Month")
// }




//Task 6

// var date = new Date();
// document.write(date+"<br>")
// var mili = date.getTime();
// document.write("Elapsed miliseconds since January 1,1970: "+mili+"<br>")
// var minut = mili/1000;
// document.write("Elapsed minutes since January 1,1970: "+minut)




//Task 7

// var date = new Date();
// var time = date.getHours();
// if(time<12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }





//Task 8

// var month = 0; 
// var date = 1;
// var d = new Date(2020, month + 11, date + 30);
// alert("Last Date: "+d); 




//Task 9

// var d = new Date(2020, 3, 25);
// var ramadanDate = d.getTime();
// var n = new Date();
// var today = n.getTime();
// var diff = today - ramadanDate;
// var difference = Math.floor(diff/(1000 * 3600 * 24));
// document.write(difference+" days have passed sice 1st Ramadan 2020")





//Task 10

// var d = new Date(2020, 0, 1);

// var ramadanDate = d.getTime();
// var n = new Date();
// var today = n.getTime();
// var diff = today - ramadanDate;
// var difference = Math.floor(diff/(1000 * 60 ));
// document.write(difference+" seconds had passed since beginning of 2020")




//Task 11

// var date = new Date();
// document.write("Current date: "+date+"<br>");
//  date.setHours(date.getHours()-1);
// document.write("1 hour ago it was, "+date);





//Task 12

// var date = new Date();
// document.write("Current date: "+date+"<br>");
// date.setFullYear(date.getFullYear()-100)
// document.write("100 years back it was, "+date);




//Task 14

// var name = prompt("Enter customer name");
// var month = prompt("Enter month ");
// var unit = prompt("Enter number of units");
// var charges = prompt("Enter charges per unit")
//  var netAmount = unit*charges;
//  var surcharge = 350;
//  var afterDuedate = unit*charges+surcharge;
//   document.write("Customer name : "+name + "<br>")
//   document.write("Month : "+month + "<br>")
//   document.write("Number of Units : "+unit + "<br>")
//   document.write("Charges per Units : "+charges + "<br>")
//   document.write("Net Amount payable (within Due Date) : "+netAmount + "<br>")
//   document.write("Late payment surcharge : "+surcharge + "<br>")
//   document.write("Gross amount payable (after Due Date) : "+afterDuedate)
  
  
  








//CHAPTER 35-38



//Task 1

// function date(){
//     var d= new Date();
//     document.write(d)
// }
// date();




//Task 2

// function greet(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter your last name");
//     alert("Welcom "+first+last)
// }
// greet();




//Task 3

// var num1  = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// function add(one,two){
//  var z = (+one) + (+two);
//  return z;
// }
// var x = add(num1,num2);
// document.write(x)




//Task 4

// var val1 = prompt("Enter first value");
// var val2 = prompt("Enter second value");
// var op = prompt("Enter operator");

// function calc(num1,operator,num2){
// if(operator === '+'){
//     alert((+num1)+(+num2))
// }
// else if(operator === '-'){
//     alert(num1-num2)
// }
// else if(operator === '*'){
//     alert(num1*num2)
// }
// else if(operator === '/'){ 
// alert(num1/num2)
// }
// }

// calc(val1,op,val2);







//Task 5

// function square(x){
// var z = x*x;
// document.write(z)
// }
// square(3);




//Task 6

// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }
// var answer = factorial(3)
// document.write(answer);





//Task 7

// var start = prompt("Enter start number");
// var end = prompt("Enter end number ");

// function counting(x,y){
//     for(var i=x;i<=y;i++){
//         document.write(i+"<br>")
//     }
// }
// counting(start,end);





//Task 9

// function area(width,height){
//     var A = width*height;
//     document.write(A)
// }
// var a;
// function area1(f,g){
//   var w = f*g;
//   a=w;
//   document.write(a)
// }
// area(3,3)
// area1(3,4)




//Task 10

// var word = prompt("Enter your name");
// function palindrome(x){
// var check="";
//  for(var i = word.length-1; i>=0; i--){
//          check+=word[i];
//  }
//  if(check===word){
//      document.write(word+" is a palindrome word");
//  }
//  else{
//     document.write(word+" is a NOT a palindrome word");

//  }

// }
// palindrome(word)






//Task 11


// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// var z = capitalize_Words('the quick brown fox');
// document.write(z)





//Task 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var z = find_longest_word('Web Development Tutorial');
// document.write(z)









//  CHAPTER 38 - 42

//  | Functions | Switch | While.. DO-While |




// Task 1

// function power(a,b){
// var c = Math.pow(a, b);
// return c
// }

// var d = power(2,3);
// console.log(d);




//Task 2

// function leapYear(year)
// {
//   if( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//       alert("it is a leap year")
//   }
//   else{
//       alert("Not a leap year")
//   }
// }

// var y = prompt("Enter a year");
// var result = leapYear(y);
// console.log(result)




//Task 3

// function triangle(x,y,z){
// const a = x; 
// const b = y; 
// const c = z; 
// const perimeter = (a + b + c)/2;
// const area =  Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
// console.log(area);
// }

// triangle(5,6,7);




//Task 4


// var eng = prompt("Enter the marks of English out of 100");
// var math = prompt("Enter the marks of Math out of 100");
// var science = prompt("Enter the marks of Science out of 100");

// function mainFunction(){
// var averageoftotalNumbers =  avg(eng,math,science);
// var percentageofNumbers = percentage(eng,math,science);
// console.log(averageoftotalNumbers);
// console.log(percentageofNumbers);
// }

// mainFunction();

// function avg(x,y,z){

//     var totlaNum = 3;
//     var sumNum = +x + +y + +z;
//   var averageNumbers = sumNum/totlaNum
//     return averageNumbers;
// }

// function percentage(a,b,c){
//     var totalMarks = 300;
//     var sum = +a + +b + +c;
//     var per = (sum/totalMarks)*100;
//     return per;
// }




//Task 5

// var str = "Hello World";
// var ch = str.indexOf("o");
// console.log(ch)




//Task 6

// hasVowels("My name is Arslan Shabbir");

// function hasVowels(string){
//      var str = string.replace(/[aeiou]/gi, '');
//      console.log(str)
     
//     }




//Task 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());






//Task 8

// var distance = prompt("Enter distance in kilometers")
// meters(distance);
// feet(distance);
// inches(distance);
// centimeters(distance);

// function meters(x){
// var y = x * 1000;
// console.log(y)
// }

// function feet(x){
//     var y = x *1000 *3;
//     console.log(y)
// }

// function inches(x){
//     var y = x*1000 * 3 * 12;
//     console.log(y)
// }

// function centimeters(x){
//     var y = x * 1000 * 3 * 12 * 10;
//     console.log(y)
// }






//Task 9

// var overtime = prompt("Enter total hours worked");

// var totalHours = 0;

// if(overtime > 40){
//     for(var i = 41; i <= overtime ; i++){
//           totalHours = totalHours + 12;
//     }
//     console.log("Your total overtime bonus is "+ totalHours+ "PKR");
// }
// else{
//     console.log("No Overtime ")
// }






//Task 10













//  CHAPTER 43 TO 48

//  EVENTS



//Task 1

// in html file




// Task 2

// other content is in html and css files
// function clickImage(){
//     alert("Thanks for purchasing a phone from us")

// }





//Task 3

// other content is in html and css
// function deleteRow(){
//     var del = document.getElementById("deleteBtn");
//     del.closest('tr').remove()
// }




//Task 4

// function changeImage(){
// var img = document.getElementById("phoneImage")
// img.src = 'images/oppo.png'

// }

// function changeAgain(){
//     var img = document.getElementById("phoneImage")
//     img.src = 'images/samsung.png'
// }





//Task 5

// var x = 0;
// var span = document.querySelector('span'); 
// var increment = document.getElementById('increment'); 
// var decrement = document.getElementById('decrement'); 

// increment.addEventListener('click', function () {
  
//   span.textContent = ++x;
// });

// decrement.addEventListener('click', function () {
//   span.textContent = --x;
// });












//  CHAPTER 49 TO 52

//   ENENTS



// Task 1

// function showData(){
//     var val1 = document.getElementById("emailAddress")
//     var val2 = document.getElementById("pass")
//     document.write("Your email address is "+val1.value+"<br>")
//     document.write("Your password is "+val2.value)
   
// }




//  Task 2

// function readmore(){
//     var txt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, qui accusantium dolores labore omnis quaerat consequatur minima repellat distinctio saepe optio cupiditate nemo impedit quam consectetur quasi ipsam animi nobis."
//     var cont = document.getElementById("para");
//     cont.innerHTML = txt;  
// }




//Task 3

// function insertRecord(){
//     var table = document.getElementById('results');
//     var form = document.getElementById('recordForm');
//     form.style.display="none";

//     var row = document.createElement('tr');
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var td4 = document.createElement('button')
//     var td5 = document.createElement('button')

//     td1.innerHTML = document.getElementById('fname').value;
//     td2.innerHTML = document.getElementById('lname').value;
//     td3.innerHTML = document.getElementById('grade').value;
//     td4.innerHTML = "Delete";
//     td5.innerHTML = "Update";

    
//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);
//     row.appendChild(td4);
//     row.appendChild(td5);

//     table.appendChild(row);
   
     
//     td4.addEventListener ("click", function() {
//             row.remove();
//       });

//       td5.addEventListener("click", function(this){
//         var val  =  this.parentNode.firstChild.nodeValue;
//         var editValue = prompt("Enter updated value", val)
//         f.parentNode.firstChild.nodeValue = editValue; 
          
//       }); 
// }











// CHAPTER  58 TO 67

//  DOM



// Task 1

// var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5];




//Task 2

// var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[1];
// var e =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[3];
// var f =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[5];
// var g =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[7];
// var h =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[9];
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)






//Task 3

//var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[1].innerHTML;
// var e =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[3].innerHTML;
// var f =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[5].innerHTML;
// var g =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[7].innerHTML;
// var h =document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[9].innerHTML;
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)




//Task 4

// var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[3].value = "Hello";
// document.write(a)




//Task 5

//  var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[7].value = "World";
//  document.write(a)

//  var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[11].value = "hello@world.com";
//  document.write(a)




// Task 2 part 1

//  var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].nodeName
//  console.log(a)





// Task 2 part 2

//   var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[3].nodeName
//   console.log(a)

//   var b = document.childNodes[1].childNodes[2].childNodes[3].childNodes[5].childNodes[5].nodeName
//   console.log(b)




// Task 2 part 3

//   var a = document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[7].value = "Khan";
//   document.write(a)




// Task 2 part 4

//  var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[4].firstChild.innerHTML;
//  var e =document.childNodes[1].childNodes[2].childNodes[3].childNodes[4].lastChild.innerHTML;





//Task 2 part 5

// var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[7].nextSibling.innerHTML;
// console.log(d)

// var x =document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[7].previousSibling.innerHTML;
// console.log(x)




//Task 2 part 6

// var d =document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].childNodes[11].parentNode.nodeName
// console.log(d)









