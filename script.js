(function() {
    console.warn('Script linked correctly to the web page');

    let options = document.forms[0].elements.option; // nodelist with the first 2 options

    let otherCheckbox = document.forms[0].elements.other_checkbox; // other checkbox

    let otherTextbox = document.getElementById('other-text');   // other text

    otherTextbox.className = "hidden";  // hides the other textbox as the page loads
    
    // clicking on the "other" option makes the textbox visible
    otherCheckbox.addEventListener('change', function () {
        otherTextbox.className = 'visible';
        Array.from(options).forEach(item => {
            item.checked = false;
        });
    });
    
    // assigning event listeners to the first 2 options 
    options.forEach(item => {
        item.addEventListener('change', function() {
            otherTextbox.value = '';
            otherTextbox.className = "hidden";
            otherCheckbox.checked = false;
        });
    });
})();