function readIn() {
    return document.getElementById('ingresar').value;
  }

send1.addEventListener('click', () => {
    let valid = validDate(readIn());
    if (valid) {
      result.innerHTML += '<p>> La cadena ingresada contiene una fecha (dd/mm/aaaa)</p>';
    } else {
      result.innerHTML += '<p>> La cadena ingresada <strong>NO</strong> contiene una fecha (dd/mm/aaaa)</p>';
    }
  });
  
  /** Validar que una cadena tenga una fecha*/
  function validDate(t) {
    result.innerHTML += '<p>> Se ingresó: \"' + t + '\"</p>';
    let arrayText = t.split(' ');
    for (i in arrayText) {
      if (/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(arrayText[i]))
      return true;
    }
    return false;
  }