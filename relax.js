

$(document).ready(function() {
// Your attempt
  if $('.readmore').click(function(){
    $('#show-this-on-click').slideDown("slow");
      $('.readmore').hide(500);
      $('.readless').show(500);
    }
  else {
    $('#show-this-on-click').hide();
  }
  });

// Try to code the first click function with the instructions together
// This way it executes in one pass of the function, both showing and hiding what is necessary at the same time.
// See if you can fix the other functions up to match this one.
$('.readmore').click(function(){
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  event.preventDefault();
});


  if $('.readless').click(function(){
    $('#show-this-on-click').slideUp('slow');
      $('.readless').hide();
      $('readmore').show();
  }
  });
  else {
    $('#show-this-on-click').show(500);
  }

  if $('.learnstuff').click(function(){
    $('#learnmoretext').slideDown('slow');
      $('.learnstuff').hide(500);
    }
    else{
      $('#learnmoretext').hide();
    }
  });
});
