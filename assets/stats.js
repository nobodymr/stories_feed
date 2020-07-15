$.fn.jQuerySimpleCounter=function(t){var e=$.extend({start:0,end:100,easing:"swing",duration:400,complete:""},t),n=$(this);$({count:e.start}).animate({count:e.end},{duration:e.duration,easing:e.easing,step:function(){var t=Math.ceil(this.count);n.text(t)},complete:e.complete})};

$('#number1').jQuerySimpleCounter({end: 810,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 47,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 74,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 576,duration: 3000});
$('#number5').jQuerySimpleCounter({end: 139,duration: 3000});
$('#number6').jQuerySimpleCounter({end: 105,duration: 3000});
$('#number7').jQuerySimpleCounter({end: 850,duration: 3000});
$('#number8').jQuerySimpleCounter({end: '{{ current_year|add:"-2009" }}',duration: 3000});
$('#number9').jQuerySimpleCounter({end: 778,duration: 3000});
