//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.//

document.querySelector('button').addEventListener('click', even_or_odd)



function even_or_odd(number) {
 number = document.querySelector('input').value

  let eod = number % 2
 if (eod === 0) {
    document.getElementById("Result").innerText= "Even"
    
  } else {
    document.getElementById("Result").innerText= "Odd"
  };
  
 
}
console.log(even_or_odd())


