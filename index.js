function scuberGreetingForFeet(ride){
  // Write your code here!
  let code;

  if(ride <= 400){
    code = 'This one is on me!';
  }
  else if(ride > 2000 && ride <=2500){
    code = 'I will gladly take your thirty bucks.';
  }
  else{
    code = 'No can do.';
  }
  return code;
}

function ternaryCheckCity(city){
  // Write your code here!
  const City = city === "NYC" ? "Ok, sounds good." : "No go.";
  return City;
}

function switchOnCharmFromTip(greeting){
  // Write your code here!

  switch (greeting) {
    case "generous":
      return "Thank you so much.";
      break;
      case "not as generous":
        return "Thank you.";
        break;
        default:
          return "Bye."
  

  }
}