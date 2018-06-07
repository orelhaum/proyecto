// Objeto usuario
let usuario ={
  usuario:"ramiro",
  activado:true,
  baneado:false,
  tokenRegistro:"",
  fechaNacimiento:new Date("1983-09-09"),
  email:"ramiro@ramiro.es",
  lenguaje:"es-ES",
  prefijoTelefonoMovil:34,
  telefonoMovil:630170687,
  tipo:"admin",
  dni:"53271880Q",
  tarjeta:1111111111111111,
  dniFoto:"",
  referalId:"alex",
  loginIp:"",
  registroIp:"",
  fechaUltimoLogin:new Date(),
  passwordSha:"",
  ventas:[],
  compras:[],
  fondos:[],
  recibidos:[],
  enviados:[],
  realCash:10000
  }
  //Objeto Moneda
let moneda1={
  symbol:"BTC",
  conversion:"USDT",
  historico:[{
    precioUltimo:12000,
    precioApertura:11950,
    precioCierre:12500,
    precioMedio:11975,
    precioMasAlto:13000,
    fechaUltimaActualizacion:new Date(),
    volumen:13450958
  }],
  mediasMoviles:[],
  osciladores:[]
}

let moneda2={
  symbol:"WTCDTC",
  conversion:"BTC",
  historico:[{
    precioUltimo:0.085,
    precioApertura:0.075,
    precioCierre:0.095,
    precioMedio:0.95,
    precioMasAlto:0.12,
    fechaUltimaActualizacion:new Date(),
    volumen:13450958
  }],
  mediasMoviles:[],
  osciladores:[]
}

//3.función para ingresar fondo (meter dinero real)

//4.función para retirar fondo (sacar dinero real)

//5.función para listar fondos (ver el total de tus monedas)

//6.función para comprar moneda

//7.función para vender moneda

//8.función para listar compras

//9.función para listar ventas

//10.función para insertar dato histórico para una moneda

//11.enviar mensaje

//12.recibir mensaje

//13.borrar mensaje