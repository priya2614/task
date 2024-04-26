let inputImage = document.getElementById("input-field");
let inputName = document.getElementById("input-name");

let outputImage = document.getElementById("output-image");
let outputName = document.getElementById("output-name");

inputImage.onchange = (event) => {
  let imagePath = event.target.files[0];
  let path = URL.createObjectURL(imagePath);

  outputName.innerHTML = inputName.value;
  outputImage.src = path;
  inputName.value = "";

  outputName.innerHTML = inputName.value;
  outputImage.src = path;
  inputName.value = "";
};
