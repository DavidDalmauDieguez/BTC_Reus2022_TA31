function readIn() {
    return document.getElementById('in1').value;
  }
  
function escapeHTML(text) {
    var replacements = [
        ["&", "&amp;"],
        ["\"", "&quot;"],
        ["<", "&lt;"],
        [">", "&gt;"]
    ];

    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);

    });
    return text;
    tres.innerHTML = text;
}