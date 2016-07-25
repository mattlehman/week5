

$(document).ready(function() {
  if $('.readmore').click(function(){
    $('#show-this-on-click').slideDown("slow");
      $('.readmore').hide(500);
      $('.readless').show(500);
    } 
  else {
    $('#show-this-on-click').hide();
  }
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
