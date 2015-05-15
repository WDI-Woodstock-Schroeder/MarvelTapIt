// selector: `button` with an id attribute of `playSoundBtn`
$('#playSoundBtn').on('click', function(event) {

    // get the audio element by Id and play() it
    document.getElementById('kablam!').play();

});
