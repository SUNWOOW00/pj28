var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function () {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'survey_options');
    newField.setAttribute('size', 50); // Changed 'siz' to 'size'
    newField.setAttribute('placeholder', 'Another Field');
    survey_options.appendChild(newField);

    var inputTags = survey_options.getElementsByTagName('input');
    if (inputTags.length > 2) { // Changed 'input tags' to 'inputTags'
        remove_fields.style.visibility = "visible"; // Fixed the visibility assignment syntax
    }
};

remove_fields.onclick = function () {
    var inputTags = survey_options.getElementsByTagName('input');
    if (inputTags.length > 2) { // Changed 'input tags' to 'inputTags'
        survey_options.removeChild(inputTags[inputTags.length - 1]); // Fixed the index for removing last input
    }

    if (inputTags.length <= 2) { // Changed '=' to '<=' for comparison
        remove_fields.style.visibility = "hidden"; // Fixed the visibility assignment syntax
    }
};
