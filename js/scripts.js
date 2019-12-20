$(window).on('scroll',function(){
        if($(window).scrollTop()){

          $('nav').removeClass('navbar-editar');
          $('nav').addClass('azul');
        }
        
      else{
        $('nav').removeClass('azul');
        $('nav').addClass('navbar-editar');
      }
})
