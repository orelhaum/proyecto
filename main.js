// Objeto usuario
let usuario = {
  usuario: "ramiro",
  activado: true,
  baneado: false,
  tokenRegistro: "",
  fechaNacimiento: new Date("1983-09-09"),
  email: "ramiro@ramiro.es",
  lenguaje: "es-ES",
  prefijoTelefonoMovil: 34,
  telefonoMovil: 630170687,
  tipo: "admin",
  dni: "53271880Q",
  tarjeta: 1111111111111111,
  dniFoto: "",
  referalId: "alex",
  loginIp: "",
  registroIp: "",
  fechaUltimoLogin: new Date(),
  passwordSha: "",
  ventas: [],
  compras: [],
  fondos: {
    "ONJ": 4,
    "WTC": 3
  },
  recibidos: [],
  enviados: [],
  realCash: 500000
}
//Objeto Moneda
let monedaBTC = {
  symbol: "BTC",
  conversion: "USDT",
  historico: [{
      precioUltimo: 12000,
      precioApertura: 11950,
      precioCierre: 12500,
      precioMedio: 11975,
      precioMasAlto: 13000,
      fechaUltimaActualizacion: new Date(),
      volumen: 13450958
    },
    {
      precioUltimo: 15000,
      precioApertura: 11950,
      precioCierre: 12500,
      precioMedio: 11975,
      precioMasAlto: 13000,
      fechaUltimaActualizacion: new Date(),
      volumen: 13450958
    }
  ],
  mediasMoviles: [],
  osciladores: []
}

let monedaWTC = {
  symbol: "WTC",
  conversion: "BTC",
  historico: [{
    precioUltimo: 0.085,
    precioApertura: 0.075,
    precioCierre: 0.095,
    precioMedio: 0.95,
    precioMasAlto: 0.12,
    fechaUltimaActualizacion: new Date(),
    volumen: 13450958
  }],
  mediasMoviles: [],
  osciladores: []
}

let monedaONJ = {
  symbol: "ONJ",
  conversion: "BTC",
  historico: [{
    precioUltimo: 0.085,
    precioApertura: 0.075,
    precioCierre: 0.095,
    precioMedio: 0.95,
    precioMasAlto: 0.12,
    fechaUltimaActualizacion: new Date(),
    volumen: 13450958
  }],
  mediasMoviles: [],
  osciladores: []
}


let monedas=[monedaBTC,monedaWTC,monedaONJ];

//1. función para ingresar dólares
/*
function ingresarDolares(usuario,dolares=0){

if ("realCash" in usuario)
{
  usuario.realCash+=dolares;
}
else
{
  usuario.realCash=dolares;
}
// prueba de otra forma con operador ternario
//usuario.realCash=("realCash" in usuario) ? usuario.realCash+dolares : dolares;
}
*/
ingresarDolares = (usuario, dolares = 0) => {
  usuario.realCash = ("realCash" in usuario) ? usuario.realCash + dolares : dolares;
}


//2.función para ingresar fondo (dolar-bitcoin))
function ingresarFondos(usuario, monedaBTC, bitcoinsToComprar) {

  //Primero comprobar que tiene $ suficientes para comprar esos bitcoins
  let len = monedaBTC.historico.length;
  let precioBitcoin = monedaBTC.historico[len - 1].precioUltimo;
  let total = precioBitcoin * bitcoinsToComprar;
  if (usuario.realCash >= total) {
    //resta los dolares que le cuesta
    usuario.realCash -= total;

    //si ya tenia comprados bitcoins se le suman
    let symbol = monedaBTC.symbol;

    usuario.fondos[symbol] = (symbol in usuario.fondos) ? usuario.fondos[symbol] + bitcoinsToComprar : usuario.fondos[symbol] = bitcoinsToComprar;


    return true;
    /*
      if (monedaBTC.symbol in usuario.fondos) {
        usuario.fondos[monedaBTC.symbol] += bitcoinsToComprar;
      }
      //si no se le asigna
      else {
        usuario.fondos[monedaBTC.symbol] = bitcoinsToComprar;
      }
      return true;
      */
  } else {
    //no tiene suficiente cantidad de dólares
    console.log("No dispone de dinero suficiente para realizar la compra.")
    return false;
  }

}

//3.función para retirar fondo (bitcoin-dolar)
function retirarFondos(usuario, monedaBTC, bitcoinsToRetirar) {

  //Primero comprobar que tiene BTC suficientes para retirar
  let len = monedaBTC.historico.length;
  let precioBitcoin = monedaBTC.historico[len - 1].precioUltimo;
  let total = precioBitcoin * bitcoinsToRetirar;

  let symbol = monedaBTC.symbol;

  if ((!symbol in usuario.fondos) || (usuario.fondos[symbol] >= bitcoinsToRetirar)) {
    //resta los dolares que le cuesta
    usuario.realCash += total;

    //si ya tenia comprados bitcoins se le suman
    usuario.fondos[symbol] -= bitcoinsToRetirar;


    return true;
  } else {
    //no tiene suficiente cantidad de dólares
    console.log("No dispone de Bitcoins suficiente para realizar la retirada.")
    return false;
  }

}


//función para obtener el último precio de una moneda

function obtenerPrecioUltimoMonedaBTC(monedas=[],symbolMoneda){
  let lenMonedas=monedas.length;

  for (let i=0;i<lenMonedas;i++)
  {
    if (monedas[i].symbol ===symbolMoneda)
    {
      let lenMoneda=monedas[i].historico.length;
      return monedas[i].historico[lenMoneda-1].precioUltimo;
    }
  }
  return undefined;
}


//4.función para listar fondos (ver el total de tus monedas)

function listarFondos(usuario,monedas){
  let realCash=0;
  let btcTotales=0;

  let lenFondos=usuario.fondos.length;

  for (let nombreMoneda in usuario.fondos )
  {
    let precioMonedaBTC=obtenerPrecioUltimoMonedaBTC(monedas,nombreMoneda);
    let cantidaDolares = usuario.fondos[nombreMoneda] *precioMonedaBTC;
    realCash+=cantidaDolares;
    console.log(`${nombreMoneda}: ${usuario.fondos[nombreMoneda]} (${cantidaDolares}$)` );
  }
  console.log(`Total en cryptomendas: ${realCash}$`);
  console.log(`Total en dinero real: ${usuario.
    realCash}$`);}

//función para obtener el precio último del BTC
function obtenerPrecioBTC(){
  let len = monedaBTC.historico.length;

  return monedaBTC.historico[len-1].precioUltimo;
}

//5.función para comprar moneda

//6.función para vender moneda

//7.función para listar compras

//8.función para listar ventas

//9.función para insertar dato histórico para una moneda

//10.enviar mensaje

//11.recibir mensaje

//12.borrar mensaje


ingresarFondos(usuario,monedaBTC,4);

retirarFondos(usuario,monedaBTC,1);

listarFondos(usuario,monedas);