$(function(){
    var date = new Date('34:54:23').getHours()
    var now = new Date().getHours()
    var distance = date - now

    $('#time span').html(
        setInterval(function(){
        }, 1000)
    )
})