(function() {
    console.warn('Script linked correctly to the web page');

    // nodelist with the first 2 options
    let options = document.forms[0].elements.option;

    // other checkbox
    let otherCheckbox = document.forms[0].elements.other_checkbox;

    // other text
    let otherTextbox = document.getElementById('other-text');

    // hides the other textbox as the page loads
    otherTextbox.className = "hidden";

    otherCheckbox.addEventListener('change', function () {
        otherTextbox.className = 'visible';
    })
})();