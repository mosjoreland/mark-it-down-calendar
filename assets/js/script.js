// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // let saveBtn = document.querySelector('.saveBtn');
  // let note = document.querySelector('.description');

  // note.addEventListener('click', event => {
  //   localStorage.setItem('event', event.target.value);
  // });

$(function () {
  let currentTime = dayjs().hour();
  let currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let saveBtn = $('.saveBtn');
  // let savedNote = localStorage.getItem('savedNote');
  // if (savedNote !== null) {
  //   $('description').val(savedNote)
  // }

  saveBtn.click(function () {
    let note = $('.description').val();
    localStorage.setItem('savedNote', note);
    
    let savedNote = localStorage.getItem('savedNote');
      if (savedNote !== null) {
        $('description').val(savedNote)
      }

  });

  // saveBtn.click(funciton () {
  //   localStorage.value = $('.description').text('description')
  // });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  let timeBlocks = $('.time-block');
  console.log(timeBlocks)

  timeBlocks.each(function () {
    console.log(this.id);
    let blockId = parseInt(this.id.split('-')[1]);
    console.log(blockId);

    if (blockId < currentTime) {
      $(this).addClass('past');
    } else if (blockId === currentTime) {
      $(this).addClass('present');
    } else { 
      $(this).addClass('future');
    }

  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// jquery method to iterate over array of elements is .each and uses this 
// use split to extract part of a string and use the character you want the string to be broken up at in the quotes
// to only get the integer use parseInt