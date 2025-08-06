let length;
let width;
function calculateArea() {
    //parseFloat() function converts string value retrieved from input field to a floating-point unmber
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

