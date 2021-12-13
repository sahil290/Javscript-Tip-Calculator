'use Strict'
//lets create a function for calculate  button
//This is function will triggered  when calculate button is clicked
window.onload = () => {
  document.querySelector("#calculate").onclick = calculateTip;
};
const calculateTip = () => {
  let amount = document.querySelector("#amount").value;
  let persons = document.querySelector("#persons").value;
  let service = document.querySelector("#services").value;
  console.log(services);
  if (amount === "" && service === "Select") {
    alert("Please enter valid values");
    return;
  }
  //Now we are checking is there is only one person then we don't want to display each.
  //else if there is more than one person then we will display each
  if (persons === "1") {
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }
  /*calculating the tip by multiplying total-bill and type of service;
     then dividing it by number of persons.*/
  //fixing the total amount upto 2 digits of decimal
  let total = (amount * service) / persons;
  total = total.toFixed(2);
  //finally displaying the tip value
  document.querySelector(".tip").style.display = "block";
  document.querySelector("#total").innerHTML = total;
};
