// Current Date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

// keeps track of current time so that inputting scheduled tasks stays accurate
function timeBlock() {
  var hour = moment().hours()

  console.log(timeBlock)

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"))
    if (currentHour > hour) {
      $(this).addClass("future")
    } else if (currentHour === hour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("past")
    }
  })
}

// save button that will store information even if you leave page
var saveBtn = $(".saveBtn")

saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text()
  var data = $(this).siblings(".data").val()

  localStorage.setItem(time, data)
})


function saveInput() {

  console.log(saveInput)

  $(".hour").each(function () {
    var currentHour = $(this).text()
    var currData = localStorage.getItem(currentHour)

    if (currData !== null) {
      $(this).siblings(".data").val(currData)
    }
  })
}

timeBlock()
saveInput()