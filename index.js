function scuberGreetingForFeet(somevalue){
  if (somevalue<=400) {
   return"This one is on me!";
 } else if (
   somevalue >400 && somevalue <= 2000) {
   return "That will be twenty bucks.";
 } else if (somevalue > 2000 && somevalue <= 2500){
   return "I will gladly take your thirty bucks.";
 } else {
   return "No can do.";
 }
   // Write your code here!
 }
 
 function ternaryCheckCity(city){
 return city ==="NYC"? "Ok, sounds good.":"No go.";
 }
 {
   // Write your code here!
 }
 
 function switchOnCharmFromTip(tip) {
   switch (tip) {
       case "generous":
           return "Thank you so much.";
       case "not as generous":
           return "Thank you.";
       default:
           return "Bye.";
   }
 }
 