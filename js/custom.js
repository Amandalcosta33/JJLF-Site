
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  
    
    //Modal de competição
    $(document).ready(function () {
      $("#membershipcompetition form").submit(function (event) {
          event.preventDefault();
          validateForm();
      });
  });
  
  function validateForm() {
    var name = $("#membershipcompetition input[name='cf-name']").val();
    var email = $("#membershipcompetition input[name='cf-email']").val();
    var phone = $("#membershipcompetition input[name='cf-phone']").val();
    var peso = $("#membershipcompetition input[name='cf-peso']").val();
    var idade = $("#membershipcompetition input[name='cf-idade']").val();
    var faixa = $("#membershipcompetition input[name='cf-faixa']").val();
    var codigo = $("#membershipcompetition input[name='cf-codigo']").val();
  
    if (name === '' || email === '' || phone === '' || peso === '' || idade === '' || faixa === '' || codigo === '') {
      $("#alert-inscricao-msg").text("É necessário o preenchimento de todos os campos.");
      $("#alert-inscricao").show();
      return;
    }
  
    if (codigo !== 'y871lxr2') {
      $("#alert-inscricao-msg").text("Você não faz parte do TIME. Agende sua matrícula e faça parte dessa competição.");
      $("#alert-inscricao").show();
    } else {
      showAlert("Inscrição bem-sucedida! Bem-vindo ao time.", "success");
      $('#membershipcompetition').modal('hide');
      // Aqui você pode adicionar a lógica para redirecionar ou fazer qualquer outra coisa após uma inscrição bem-sucedida
    }
  }

  
  
  });


    

