document.addEventListener("DOMContentLoaded", function () {
  const angleInput = document.getElementById("angle-input");
  const angleSlider = document.getElementById("angle-slider");
  const radioButtons = document.querySelectorAll('input[name="angle"]');

  // Update all controls when the input value changes
  angleInput.addEventListener("input", function () {
    let angleValue = parseInt(angleInput.value, 10);
    //check for the values which are out of range 0-360
    if (isNaN(angleValue)) {
      angleValue = 0;
    }

    if (angleValue < 0) {
      angleValue = 0;
    } else if (angleValue > 360) {
      angleValue = 360;
    }

    angleInput.value = angleValue;
    angleSlider.value = angleValue;
    updateRadioButtons(angleValue);
  });

  // Update all controls when the slider value changes
  angleSlider.addEventListener("input", function () {
    const angleValue = parseInt(angleSlider.value, 10);
    angleInput.value = angleValue;
    updateRadioButtons(angleValue);
  });

  // Update all controls when a radio button is selected
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const angleValue = parseInt(this.value, 10);
        angleInput.value = angleValue;
        angleSlider.value = angleValue;
      }
    });
  });

  function updateRadioButtons(value) {
    radioButtons.forEach((radio) => {
      if (parseInt(radio.value, 10) === value) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });
  }
});
