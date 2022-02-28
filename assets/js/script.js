$(document).ready(function () {

  const test = false

  // get times from moment
  const now = moment().format('MMMM Do YYYY hh:mm:ss A')

  // commented out for test in non-standard hours
  let nowHour24 = moment().format('H')
  let nowHour12 = moment().format('h')

  // set times for tesitng after hours
  if (test) {
    nowHour24 = 13
    nowHour12 = 1
  }

  let $dateHeading = $('#navbar-subtitle')
  $dateHeading.text(now)

  // using font awesome icon https://fontawesome.com/license
  const saveIcon = "../../images/save-regular.svg'"

  // Get stored todos from localStorage
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"))

  if (test) { console.log(storedPlans) }

  // If plans were retrieved from localStorage, update the plan array to it
  if (storedPlans !== null) {
    planTextArr = storedPlans
  } else {
    planTextArr = new Array(9)
    planTextArr[4] = "Picnic lunch outside"
  }

  if (test) { console.log("full array of plned text", planTextArr) }

  // set variable referencing planner element
  let $plannerDiv = $('#plannerContainer')
  $plannerDiv.empty()

  if (test) { console.log("current time", nowHour12) }


  // build calendar by row for fix set of hours
  for (let hour = 9 hour <= 17 hour++) {
    let index = hour - 9

    // build row components
    let $rowDiv = $('<div>')
    $rowDiv.addClass('row')
    $rowDiv.addClass('plannerRow')
    $rowDiv.attr('hour-index', hour)

    // Start building Time box portion of row
    let $col2TimeDiv = $('<div>')
    $col2TimeDiv.addClass('col-md-2')

    const $timeBoxSpn = $('<span>')
    $timeBoxSpn.attr('class', 'timeBox')

    // format hours for display
    let displayHour = 0
    let ampm = ""
    if (hour > 12) {
      displayHour = hour - 12
      ampm = "pm"
    } else {
      displayHour = hour
      ampm = "am"
    }

    // populate timeBox with time
    $timeBoxSpn.text(`${displayHour} ${ampm}`)

    // insert into col inset into timebox
    $rowDiv.append($col2TimeDiv)
    $col2TimeDiv.append($timeBoxSpn)

    let $dailyPlanSpn = $('<input>')

    $dailyPlanSpn.attr('id', `input-${index}`)
    $dailyPlanSpn.attr('hour-index', index)
    $dailyPlanSpn.attr('type', 'text')
    $dailyPlanSpn.attr('class', 'dailyPlan')

    // access index from data array for hour 
    $dailyPlanSpn.val(planTextArr[index])

    // create col to control width
    let $col9IptDiv = $('<div>')
    $col9IptDiv.addClass('col-md-9')

    // add col width and row component to row
    $rowDiv.append($col9IptDiv)
    $col9IptDiv.append($dailyPlanSpn)

    let $col1SaveDiv = $('<div>')
    $col1SaveDiv.addClass('col-md-1')