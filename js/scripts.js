$(document).ready(function () {
  $("#button").click(function (event) {
    var name = $("input#name").val();
    var email = $("input#email1").val();
    var message = $("input#message").val();
    if ($("input#name").val() && $("input#email1").val() && $("input#message").val() != "") {
      alert(name + " we have received your message.Thank you for reaching out to us.");
    } else {
      alert("Missing Details")
    }


    preventDefault(event);
  });

  $("#show1").click(function () {
    $("#hide1").toggle();
    $("#show1").toggle();
  });
  $("#show2").click(function () {
    $("#hide2").toggle();
    $("#show2").toggle();
  });
  $("#show3").click(function () {
    $("#hide3").toggle();
    $("#show3").toggle();
  });
  $("#hide1").click(function () {
    $("#show1").toggle();
    $("#hide1").toggle();
  });
  $("#hide2").click(function () {
    $("#show2").toggle();
    $("#hide2").toggle();
  });
  $("#hide3").click(function () {
    $("#show3").toggle();
    $("#hide3").toggle();
  });

  //image hover effect
  $("#hover1").hover(function () {
    $("#imgtext1").toggle()
  })
  $("#hover2").hover(function () {
    $("#imgtext2").toggle()
  })
  $("#hover3").hover(function () {
    $("#imgtext3").toggle()
  })
  $("#hover4").hover(function () {
    $("#imgtext4").toggle()
  })
  $("#hover5").hover(function () {
    $("#imgtext5").toggle()
  })
  $("#hover6").hover(function () {
    $("#imgtext6").toggle()
  })
  $("#hover7").hover(function () {
    $("#imgtext7").toggle()
  })
  $("#hover8").hover(function () {
    $("#imgtext8").toggle()
  })
  // $("#form").click(function () {
  //   var name1 = ("#name").val;
  //   var email1 = ("email").val;
  //   var message1 = ("#message").val;
  //   input.addEventListener("keyup", function (event) {
  //     if (event.keyCode === 13) {
  //       event.preventDefault();
  //       document.getElementById("button").click();
  //     }
  //     alert("+ name1 + we have received your message.Thank you for reaching out to us.")
  //   });
  // })
  $(".hover").hovereffect(function () {

  });



  // $("#button").click(function (event) {
  //   var name = $("input#name").val();
  //   var email = $("input#email1").val();
  //   var message = $("input#message").val();
  //   if ($("input#name").val() && $("input#email1").val() && $("input#message").val() != "") {
  //     alert(name + " we have received your message.Thank you for reaching out to us.");
  //   } else {
  //     alert("Missing Details")
  //   }


  //   preventDefault(event);
  // });
});








