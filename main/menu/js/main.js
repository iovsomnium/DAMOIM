$(function(){
    var duration = 300;

    var $side = $('#sidebar');
    var $sidebt = $side.find('button').on('click', function(){
        $side.toggleClass('open');

        if($side.hasClass('open')) {
            $side.stop(true).animate({right:'0px'}, duration);
            $sidebt;
        }else{
            $side.stop(true).animate({right:'-200px'}, duration);
            $sidebt.find('span');
        };
    });
});