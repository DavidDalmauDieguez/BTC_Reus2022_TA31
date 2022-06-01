function readIn() {
    return document.getElementById('ingresar').value;
  }

send2.addEventListener('click', () => {
    let mail = readIn();
    result.innerHTML += '<p>> Se ingresó: \"' + mail + '\"</p>';
    if (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))
    result.innerHTML += '<p>> Se ingresó formato de email correcto</p>';else
  
    result.innerHTML += '<p>> <strong>NO</strong> se ingresó formato de email correcto</p>';
  });