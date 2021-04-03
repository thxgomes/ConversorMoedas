function enviar() {
    var dolar = document.getElementById("textinput").value.replace(",",".")
    var real = parseFloat(dolar) * 5.50
    real = real.toFixed(2)
    document.getElementById("resultado").innerHTML = "R$" + (real);
    textinput.value = ''
  }
  
  function libra(){
    var dolar = document.getElementById("textinput2").value.replace(",",".")
    var libraDinheiro = parseFloat(dolar) * 0.7228
    libraDinheiro = libraDinheiro.toFixed(2)
    document.getElementById("resultado2").innerHTML = "£" + (libraDinheiro);
    textinput2.value = ''
  }
  
  function bitcoin(){
    var dolar = document.getElementById("textinput3").value.replace(",",".")
    var bitcoin = parseFloat(dolar) * 1.7 * Math.pow(10,-7)
    document.getElementById("resultado3").innerHTML = "BTC " + (bitcoin);
    textinput3.value = ''
  }
  
    
  