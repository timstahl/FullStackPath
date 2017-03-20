
var correct = 0;

var question1 = prompt("Question 1 -- What is the capital city of Colorado?");
    if (question1 === "Denver" || question1 === "denver") {
      correct +=1;
    }

var question2 = prompt("Question 2 -- What is the capital of Pennsylvania?");
  if (question2 === "Harrisburg" || question2 === "harrisburg") {
    correct +=1;
  }

  
var question3 = prompt("Question 3 -- What is the capital of South Dakota?");
  if (question3 === "Sioux Falls" || question3 === "sioux falls") {
    correct +=1;
   }
  

var question4 = prompt("Question 4 -- What is the capital of Minnesota?");
  if (question4 === "Minneapolis" || question4 === "minneapolis") {
    correct +=1;
   }
  

var question5 = prompt("Question 5 -- What is the capital of Illinois?");
  if (question5 === "Chicago" || question5 === "chicago") {
    correct +=1;
  }

// output result

document.write("<h2>You got " + correct + " out of 5 questions correct.</h2>");

// crowns won

if(correct === 5) {
  document.write("You won a gold crown.");
} else if (correct >= 3) {
  document.write("You won a silver crown.");
} else if (correct >= 1) {
   document.write("You won a bronze crown."); 
} else {
 document.write("No crowns for you."); 
}

