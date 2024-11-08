

let resultContainer = $('#result')

function resetDefaultCss(){
    var style = {
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontWeight: '',
        fontFamily: '',
        margin: '',
        padding: '',
        border: '',
    }
    resultContainer.css(style)
}


$('input, select').on('change', function(){
    resetDefaultCss()

    let inputValue = $(this).val();
    let inputType = $(this).attr('id');

    let inputStyle = {
        [inputType]: (inputType === 'padding' || inputType === 'margin') ? inputValue + 'px' : inputValue
    };

    if (inputType === 'padding' || inputType === 'margin'){
        inputStyle.border = '1px solid black';
    }
    
    resultContainer.css(inputStyle)
    console.log(inputStyle)
})

