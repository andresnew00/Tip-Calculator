//function
function calculateTip() {
  // Storing data from input
  let billAmount = document.getElementById("billAmount").value;
  let totalPeople = document.getElementById("totalPeople").value;
  let serviceQuality = document.getElementById("serviceQuality").value;

  //validation
  if (billAmount === "" || serviceQuality == 0) {
    window.alert("please add values to the form to get your tip amount");
    return; //prevents function from continuing
  }
  //check if this input is empty, less than or equal to 1
  if (totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //math
  let total = (billAmount * serviceQuality) / totalPeople;
  //rounding result
  total = Math.round(total * 100) / 100;
  //make sure there are always 2 decimal places showing
  total = total.toFixed(2);

  //Display Tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

// Hide Tip ammount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//calling function onclick
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
