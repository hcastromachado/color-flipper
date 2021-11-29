const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const colorField = document.getElementById("colors")
const button = document.getElementById("button")



button.addEventListener('click', () =>  {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[generateRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor; 
  colorField.textContent = hexColor
  document.body.style.transition = '0.4s'
  


})


function generateRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

