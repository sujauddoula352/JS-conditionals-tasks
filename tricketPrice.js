/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 60;
const ticket=1000;
const student=false;
const seniorCitizen=true


if ( age <= 10){
    console.log('Free ticket')
}
else if (student){
    // 50% discount
  const discount = ticket*50/100;
    payAmount= ticket - discount;
    console.log('Student Ticket Price',payAmount);
}
else if (seniorCitizen){
    if( age >= 60){
         // 15% discount
  const discount = ticket*15/100;
  payAmount= ticket - discount;
  console.log('Student Ticket Price',payAmount);
}

}
else {
    console.log('Your Ticket price:',ticket)
}
   
