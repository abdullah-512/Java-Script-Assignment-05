
function start() {
    
    var arrays = [ ["Ali" , "Ahmed" , "Asif"] , [5 , 10 , 15] ]

    document.write("<h2>Question 01</h2>")
    document.write('<h4> Arrays of arrays = [ ["Ali" , "Ahmed" , "Asif"] , [5 , 10 , 15] ] </h4>')

}


function two() {

    var matrix = [ [0, 1, 2, 3] , [1, 0, 1, 2] , [2, 1, 0, 1] ]

    document.write("<h2>Question 02</h2>")
    document.write("<h4> Matrix <br> <br>" + matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2] + " </h4>")

}


function three() {

    var NumericCounting = ""

    for (var i = 1; i <= 10; i++) {
        NumericCounting += i + "<br>"
    }

    document.write("<h2>Question 03</h2>")
    document.write("<h4>" + NumericCounting + "</h4>")

}


function four() {

    var numberOfMultiplication = +prompt("Enter a number to show its multiplication table")
    var lengthOfMultiplication = +prompt("Enter length of multiplication table")
    
    document.write("<h2>Question 04</h2>")
    document.write("<h3>Multiplication table of " + numberOfMultiplication + " </h3><p>Length " + lengthOfMultiplication + "</p>")

    for (var i = 1; i <= lengthOfMultiplication; i++) {
        document.write(numberOfMultiplication + " x " + i + " = " +  numberOfMultiplication * i + "<br>")
    }

}


function five() {

    var Furits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"]

    document.write("<h2>Question 05</h2>")

    for (var i = 0; i < Furits.length; i++ + "<br>") {
        document.write("<h4>" + Furits[i] + "</h4>")
    }

    document.write("<h5> <br> Element at index 0 is " + Furits[0] + "</h5>")
    document.write("<h5> <br> Element at index 1 is " + Furits[1] + "</h5>")
    document.write("<h5> <br> Element at index 2 is " + Furits[2] + "</h5>")
    document.write("<h5> <br> Element at index 3 is " + Furits[3] + "</h5>")
    document.write("<h5> <br> Element at index 4 is " + Furits[4] + "</h5>")

}


function six() {

    var Counting = [1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    var ReverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    var Series = [2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20 + "K"]

    document.write("<h2>Question 06</h2>")
    document.write("<h2>Counting</h2>")
    document.write("<h4>" + Counting.join(" , ") + "</h4>")
    document.write("<h2>Reverse Counting</h2>")
    document.write("<h4>" + ReverseCounting.join(" , ")  + "</h4>")
    document.write("<h2>Even</h2>")
    document.write("<h4>" + Even.join(" , ")  + "</h4>")
    document.write("<h2>Odd</h2>")
    document.write("<h4>" + odd.join(" , ")  + "</h4>")
    document.write("<h2>Series</h2>")
    document.write("<h4>" + Series.join("K , ")  + "</h4>")

}


function seven() {

    var XYZ = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
    var bakery = prompt("Welcome to XYZ Bakery. What do you want to order sir/ma'am?");
    var index ;
    var found = false;

    for ( var i = 0; i <= XYZ.length ; i++){
        if (XYZ[i] === bakery){
            found = true; 
            index = i;
            break
        }
    }

    if (found){
        alert(bakery + " is available at index " + index + " in our bakery.")
    } else{
        alert("We are sorry. " + bakery + " is Not available " + "in our bakery.")
    }

}


function eight() {

    var A = [24, 53, 78, 91, 12]

    document.write("<h2>Question 08 & 9</h2>")
    document.write("<h4> Arrays = [" + A.join(" , ") + "]</h4>")
    document.write("<h4> The largest number is 91 </h4>")
    document.write("<h4> The smallest number is 12 </h4>")

}


function nine() {

    document.write("<h2>Question 10</h2>")
    document.write("<h3> Multiples of 5 </h3>")

    var multiples = []

    for (var i = 5; i <= 100; i += 5) {
        multiples.push(i)
    }

    document.write(multiples.join(" , "))

}