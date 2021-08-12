function calculadora() {
    let tipoNafta = document.getElementById("select1").value;
    let l_km = document.getElementById("l/km").value;
    let km = document.getElementById("km").value;
    let precioNafta = 0;
  
    switch (tipoNafta) {
      case "1":
        precioNafta = 65.47;
        break;
      case "2":
        precioNafta = 67.80;
        break;
      case "3":
        precioNafta = 45.29;
        break;
      case "4":
        precioNafta = 67.87;
        break;
    }
  
    let naftaRequerida = (km * 1) / l_km;
    document.getElementById(
      "naftaNecesaria"
    ).innerHTML = `${naftaRequerida} litros de nafta`;
  
    let costoViaje = naftaRequerida * precioNafta;
    document.getElementById(
      "costoViaje"
    ).innerHTML = `<strong>$</strong>${costoViaje}`;
  }