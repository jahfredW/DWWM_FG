var reset = false;

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
            $(document.createElement("link")).attr({id: "screen", rel:"stylesheet", type:"text/css", href:"style_desk.css"})
          );
        reset = false;
    }
  });