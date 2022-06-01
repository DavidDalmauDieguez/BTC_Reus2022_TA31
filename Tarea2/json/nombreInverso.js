function readIn() {
    return document.getElementById('ingresar').value;
  }

  send4.addEventListener('click', () => {
    let input = readIn();
    result.innerHTML += '<p>> Se ingresó: ' + input + '</p>';
    if (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(input)) {
      let array = input.split(' ');
      let output = '';
      for (let i = array.length - 1; i >= 0; i--) {
        if (i == array.length - 1)
        output = array[i] + ', ';else
  
        output += array[i];
      }window.CP.exitedLoop(0);
      result.innerHTML += '<p>> ' + output + '</p>';
    } else {
      result.innerHTML += '<p>> No se ingreso \"Nombre Apellido\"</p>';
    }
  });
      