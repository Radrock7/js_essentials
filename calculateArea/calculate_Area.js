let length;
let width;
let groc1, groc2, groc3;
function calculateArea() {
    //parseFloat() function converts string value retrieved from input field to a floating-point unmber
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotal() {
    groc1 = parseFloat(document.getElementById('grocery1').value);
    groc2 = parseFloat(document.getElementById('grocery2').value);
    groc3 = parseFloat(document.getElementById('grocery3').value);
    let total_Amount = groc1 + groc2 + groc3;
    document.getElementById('result2').innerText = `The total amount is: ${total_Amount}`;
}
