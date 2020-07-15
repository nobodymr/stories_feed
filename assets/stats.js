$.fn.jQuerySimpleCounter=function(t){var e=$.extend({start:0,end:100,easing:"swing",duration:400,complete:""},t),n=$(this);$({count:e.start}).animate({count:e.end},{duration:e.duration,easing:e.easing,step:function(){var t=Math.ceil(this.count);n.text(t)},complete:e.complete})};

$('#number_hatmkarda').jQuerySimpleCounter({end: 810,duration: 3000});
$('#number_jahon').jQuerySimpleCounter({end: 47,duration: 3000});
$('#number_jumhuri').jQuerySimpleCounter({end: 74,duration: 3000});
$('#number_viloyat').jQuerySimpleCounter({end: 576,duration: 3000});
$('#number_koriilmi').jQuerySimpleCounter({end: 139,duration: 3000});
$('#number_kormand').jQuerySimpleCounter({end: 105,duration: 3000});
$('#number_honanda').jQuerySimpleCounter({end: 850,duration: 3000});
$('#number_sol').jQuerySimpleCounter({end: 11,duration: 3000});
