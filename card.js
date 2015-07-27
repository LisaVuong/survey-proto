$(document).ready(function(){
  var i = 1;
  var cardLength = $('li.card').size();
  $('.button').click(function(){
   /* for (n = 0; n < $('li.card').size(); n++){*/
    $('.card-'+i).addClass('removed');
    $('.card-'+ (i+1)).addClass('front');
    $('.card-'+ (i+2)).addClass('back-2');
    $('.card-'+ (i+3)).addClass('back-3');
    $('.card-'+ (i+4)).addClass('back-4');
    $('.card-'+ (i+5)).addClass('back-5');
    
     $('.button-set-'+i).addClass('removed');
    $('.button-set-'+ (i+1)).addClass('active');
    $('.card-'+ (i+2)).addClass('back-2'); 
    
    i++;
    
   /*}*/
  })
  $('.yellow-bg').click(function(){
      $(this).addClass("yellow-click")
    })
    
    $('.green-bg').click(function(){
      $(this).addClass("green-click")
    })

     $('.purple-bg').click(function(){
      $(this).addClass("purple-click")
    })

      $('.blue-bg').click(function(){
      $(this).addClass("blue-click")
    })

       $('.red-bg').click(function(){
      $(this).addClass("red-click")
    })

})