/*$.getJSON('../Content/Fauna.json', function (data) {
    console.log(data);
});*/
/*$(document).ready(function () {

    // vars
    var score = 0;
    var numBoxesDropped = 0;
    var numBoxes = $('.box').length;


    // create sound object
    var correctSound = document.createElement('audio');
    correctSound.setAttribute('src', 'http://www.orangefreesounds.com/wp-content/uploads/2017/06/Ting-sound-effect.mp3');

    var errorSound = document.createElement('audio');
    errorSound.setAttribute('src', 'http://soundbible.com/mp3/Buzz-SoundBible.com-1790490578.mp3');


    // make boxed draggable
    $('.box').draggable({
        revert: true
    });

    // make drop area droppable
    // only accepts items with class items of '.box'
    $('.droparea').droppable({
        accept: '.box',
        drop: handleBoxDrop
    });

    // function that handles the box being dropped
    function handleBoxDrop(event, ui) {

        // vars
        var box = ui.draggable;

        var boxNumType = box.attr('data-numtype');

        var dropArea = $(this);

        var dropAreaNumType = dropArea.attr('data-area-numtype');

        // check if box number type matches number type of drop area
        if (boxNumType == dropAreaNumType) {
            box.addClass('correct');
            correctSound.play();
            score++;
        } else {
            // num type does NOT match
            box.addClass('incorrect');
            errorSound.play();
        }
        // disable dragging
        box.draggable('disable').draggable('option', 'revert', false);
        numBoxesDropped++;


        // console.log(score);
        $('#score').text(score);

        // check if game has ended
        if (numBoxesDropped == numBoxes) {
            // game finished
            alert("Game Finished!");
        }
    }


});*/