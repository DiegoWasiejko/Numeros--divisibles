formulario = document.getElementById('impit');
formulario.onsubmit = (e) => {
  e.preventDefault();
  var num = document.getElementById('num');
  var num2 = num.value;
  num.value='';
  document.getElementById('mostrar2');
    mostrar2.innerHTML += '<p>' + num2 + '</p>';
  //console.log(num2)
  //primero hacemos la división para saber que numeros son divisibles
  valor = 0;
  resultado = [];
  while (valor < num2){
  let resto = num2 % valor;
    if (resto == 0){
      resultado.push(valor);
      valor++;
    }
    else{
      valor++;
    }
  }
  document.getElementById('mostrar3');
    mostrar3.innerHTML += '<p>' + resultado + '</p>';
  //console.log(resultado);
  //acá lo que hacemos es la suma del array para saber si la suma del dividor es igual al numero ingresado
  let total = resultado.reduce((a, b) => a + b, 0);
  if (total === valor){
    document.getElementById('mostrar1');
    mostrar2.innerHTML += '<p>' + "la suma del dividor es igual al numero ingresado" + '</p>';
    // console.log("la suma del dividor es igual al numero ingresado");
  }
  else{
    document.getElementById('mostrar1');
    mostrar2.innerHTML += '<p>' + "la suma del dividor NO es igual al numero ingresado" + '</p>';
    //console.log("la suma del dividor no es igual al numero ingresado");
  }
}

