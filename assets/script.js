// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {


  // Sets dateEL as the current date using dayjs
  // Sets hourNumber as the current hour using dayjs

  var dateEL = dayjs().format("dddd MM/DD/YYYY");
  var hourNumber = dayjs().hour();

  $("#currentDay").text(dateEL);


  

  // Hides the confirm message after 5 seconds

  function myGreeting() {
    document.getElementById("confirm").style.display = "none";
  }

// Code for click function. Saves text to local storage

  $(parent).on("click", function (saveBTN) {
    if (
      saveBTN.target.nodeName === "I" ||
      saveBTN.target.nodeName === "BUTTON"
    ) {
      timeMessage = $(saveBTN.target).closest("div").attr("id");
      appT = document.getElementById(timeMessage + "1").value;
      localStorage.setItem(timeMessage + "1", appT);

      // display confirm message

      (document.getElementById("confirm").style.display = "inline"),
        (myTimeout = setTimeout(myGreeting, 3000));
    } else {
      return;
    }
  });



  // This code compares each time block against the current hour using dayjs. Based on the time,
  // the block is assigned the class of past, present or future.

  function updateTime() {
    for (let i = 9; i < 18; i++) {
      if (i < hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block past");
        console.log("past " + i);
        console.log(hourNumber);
      } else if (i > hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block future");
        console.log("past " + i);
        console.log(hourNumber);
      } else if (i === hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block present");
        console.log("present " + i);
        console.log(hourNumber);
      }
    }
  }

  updateTime();

  
  // This code is used to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  function getStorage() {
    for (i = 91; i < 181; i += 10) {
      document.getElementById("hour-" + i).value = localStorage.getItem(
        "hour-" + i
      );
    }
  }

  getStorage();
});
