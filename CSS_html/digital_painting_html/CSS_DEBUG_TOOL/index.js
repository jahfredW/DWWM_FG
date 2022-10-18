var reset = false;
var div = false;
var section = false;
var cache = "";
var border_color = "";
var pos_pointeur = false;
var pos_click = false;

/* Implémentation de la check Box */ 

checkBox();

function checkBox() {
  $("fieldset").click( (data) => {
    var name = data.target.name
    var activer = data.target.checked;
    
  switch (name) {
    case 'check_div':
      if (activer) {
        console.log('ici');
        $('div').css('border', '2px solid red');
      } else {
        $('div').css('border', '');
      }
      break;
    case 'check_p':
      if (activer) {
        $('p').css('border', '2px solid blue');
      } else {
        $('p').css('border', '');
      }
      break;
    case 'check_image':
      if (activer) {
        $('img').css('border', '2px solid yellow');
      } else {
        $('img').css('border', '');
      }
      break;
    case 'check_section':
      if (activer) {
        $('section').css('border', '2px solid green');
      } else {
        $('section').css('border', '');
      }
      break;
      default:
        break
    } 
  })
}

/*
$('fieldset').click( 
  (data) => {
    let check_type = data.target.name;
    checkBox(check_type);
  }
) */


$('nav').hide();


$('#close').click( function (event) {
  $('nav').hide();
  $('#open').show();
  
})

$("#open").click(function (event) {
  console.log('click');
  event.preventDefault();
  $('nav').show();
  $('#open').hide();
})


$("#position").click( function(event) {
  event.preventDefault;
  console.log($('#mouse-pos').length <= 1)
  if ($('#mouse-pos').length < 1) {
    $("#mouse-parent").append(
      $(document.createElement("span")).attr({id: "mouse-pos"}));
    }
  $('body').mousemove(function (e) { 
    const x = e.pageX;
    const y = e.pageY;
  $('#mouse-pos').text("pos-x: " + x.toString() + " " + "pos-y: " + y.toString());
  $("#mouse-pos").css('border-bottom', '1px solid black');
  $("#mouse-pos").css('line-height', '1vw');
  });
})

$("#hide").click( function(event) {
  $("#mouse-pos").remove();
})

$('#css_reset').click(function(e){
    e.preventDefault();
    if (!reset) {
        $('#screen').remove();
        $('#css_reset').html('restaurer_css');
        $("head").append(
      $(document.createElement("link")).attr({id: "reset", rel:"stylesheet", type:"text/css", href:"css_reset"})
    );
    reset = true;
    } else {
        $("#reset").remove();
        $('#css_reset').html('css_reset');
        $("head").append(
            $(document.createElement("link")).attr({id: "screen", rel:"stylesheet", type:"text/css", href:"css_debug_tool.css"})
          );
        reset = false;
    }
  });
  /* FREDERIC GRUWE 2022 */
  $('#border-select').change((event) => {
    event.preventDefault();
    $(`${cache}`).css('background-color', '');
    switch(event.target.value){
      case 'div':
        border_color = 'red';
        break;
      case 'section':
        border_color = 'blue';
        break;
      case 'p':
        border_color = 'green';
        break;
      case 'img':
        border_color = 'yellow';
        break;
      default:
        border_color = '';
    }
    $(`${event.target.value}`).css('background-color', border_color);
    cache = event.target.value;
  })
