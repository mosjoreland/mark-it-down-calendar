$(function () {
  // applying dayjs to fetch current hour and date
  let currentTime = dayjs().hour();
  let currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
  // added a variable for the container div to append the new elements to
  let containerEl = $('#container');
  // loops through a set number to add the desired number elements
  for (let i = 9; i <= 17; i++) {
    let timeBlockEl = $('<div>')
      .addClass('time-block row')
      .attr('id', 'hour-' + i);
    let hourLabelEl = $('<div>')
      .addClass('hour col-2 col-md-1 text-center py3')
      .text(dayjs().hour(i).format('hA'));
    let textAreaEl = $('<textarea>')
      .addClass('description col-8 col-md-10')
      .attr('id', 'note-' + i)
      .attr('rows', '3');
    let saveBtnEl = $('<button>')
      .addClass('btn saveBtn col-2 col-md-1')
      .attr('aria-label', 'save')
      .attr('id', 'saveBtn-' + i);
    let iconEl = $('<i>').addClass('fas fa-save').attr('aira-hidden', 'true');

    // the order of appending determines the layout provided by the styling classes added above
    saveBtnEl.append(iconEl);
    timeBlockEl.append(hourLabelEl);
    timeBlockEl.append(textAreaEl);
    timeBlockEl.append(saveBtnEl);
    containerEl.append(timeBlockEl);
  }
  // loops through the time block elements to apply the correct classes based on currentTime
  $('.time-block').each(function () {
    let blockId = parseInt(this.id.split('-')[1]);
    if (blockId < currentTime) {
      $(this).addClass('past');
    } else if (blockId === currentTime) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  // the method that is saving the values to the page after window is refreshed
  let savedNote9 = localStorage.getItem('savedNote-9');
  if (savedNote9 !== null) {
    $('#note-9').val(savedNote9);
  }
  // the method that saves the value of the text area corresponding to the button clicked
  // really need to figure how to use JSON or loop to shorten this code up
  $('#saveBtn-9').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-9', note);
  });

  let savedNote10 = localStorage.getItem('savedNote-10');
  if (savedNote10 !== null) {
    $('#note-10').val(savedNote10);
  }

  $('#saveBtn-10').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-10', note);
  });

  let savedNote11 = localStorage.getItem('savedNote-11');
  if (savedNote11 !== null) {
    $('#note-11').val(savedNote11);
  }

  $('#saveBtn-11').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-11', note);
  });

  let savedNote12 = localStorage.getItem('savedNote-12');
  if (savedNote12 !== null) {
    $('#note-12').val(savedNote12);
  }

  $('#saveBtn-12').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-12', note);
  });

  let savedNote13 = localStorage.getItem('savedNote-13');
  if (savedNote13 !== null) {
    $('#note-13').val(savedNote13);
  }

  $('#saveBtn-13').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-13', note);
  });

  let savedNote14 = localStorage.getItem('savedNote-14');
  if (savedNote14 !== null) {
    $('#note-14').val(savedNote14);
  }

  $('#saveBtn-14').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-14', note);
  });

  let savedNote15 = localStorage.getItem('savedNote-15');
  if (savedNote15 !== null) {
    $('#note-15').val(savedNote15);
  }

  $('#saveBtn-15').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-15', note);
  });

  let savedNote16 = localStorage.getItem('savedNote-16');
  if (savedNote16 !== null) {
    $('#note-16').val(savedNote16);
  }

  $('#saveBtn-16').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-16', note);
  });

  let savedNote17 = localStorage.getItem('savedNote-17');
  if (savedNote17 !== null) {
    $('#note-17').val(savedNote17);
  }

  $('#saveBtn-17').on('click', function () {
    let note = $(this).prev('.description').val();
    localStorage.setItem('savedNote-17', note);
  });
});

// jquery method to iterate over array of elements is .each and uses this
// use split to extract part of a string and use the character you want the string to be broken up at in the quotes
// to only get the integer use parseInt
