
//usando setAttriubute para poner un placeholder en el input del html 

let placeh = document.querySelector("input")

placeh.setAttribute("placeholder","ingrese su dinero")


//arreglo

let money = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

 

let select = document.getElementById("monedaEntrada")

let select2 = document.getElementById("monedaSalida")


//creamos las opciones de los select para cada elemento del arreglo

money.forEach(element => {
       let options = document.createElement("option")
       options.value =element
       options.innerHTML =element
       select.appendChild(options)
})


money.forEach(element => {
     let options = document.createElement("option") 
     options.value = element
     options.innerHTML= element
     select2.appendChild(options) 
});

//usando el addeventlistener (click) para almacenar los valores ingresados 

document.getElementById("enviar").addEventListener("click",function captura(){
      let dinero = document.getElementById("dinero")
      let entrada = document.getElementById("monedaEntrada")
      let salida = document.getElementById("monedaSalida")
      
       //console.log(dinero.value)
       //console.log(entrada.value)
       //console.log(salida.value)
       console.log(dinero.value+" "+entrada.value+" "+salida.value)


       //condicionales para las respectivas conversiones:

//Dolar
       if ((entrada.value=='Dolar') && (salida.value=='Peso Mexicano')){
              let result1= `${dinero.value*20.56}`;
              alert("son "+result1+" pesos mexicanos")
       }

       else if ((entrada.value=='Dolar') && (salida.value=='Peso Colombiano')){
              let result2= `${dinero.value*4000}`;
              alert("son "+result2+" pesos colombianos")
       }

       else if ((entrada.value=='Dolar') && (salida.value=='Euro')){
              let result3= `${dinero.value*0.88}`;
              alert("son "+result3+" Euros")
       }
       
       else if ((entrada.value=='Dolar') && (salida.value=='Libra Esterlina')){
              let result4= `${dinero.value*0.74}`;
              alert("son "+result4+" Libras Esterlinas")
       }
//pesos mexicanos, usando toFixed para limitar los decimales a 2 

       else if ((entrada.value=='Peso Mexicano') && (salida.value=='Dolar')){
              let result5= Number(`${dinero.value*0.049}`);
              alert("son "+result5.toFixed(2) +" Dolares")
       }

       else if ((entrada.value=='Peso Mexicano') && (salida.value=='Peso Colombiano')){
              let result6= Number(`${dinero.value*199}`);
              alert("son "+result6.toFixed(2) +" Pesos Colombianos")
       }

       else if ((entrada.value=='Peso Mexicano') && (salida.value=='Euro')){
              let result7= Number(`${dinero.value*0.043}`) ;
              alert("son "+result7.toFixed(2) +" Euros")
       }

       else if ((entrada.value=='Peso Mexicano') && (salida.value=='Libra Esterlina')){
              let result8= Number(`${dinero.value*0.036}`);
              alert("son "+result8.toFixed(2) +" Libras Esterlinas")
       }

//Peso Colombiano, aplicando toFixed para limitar el numero de decimales a 2

       else if ((entrada.value=='Peso Colombiano') && (salida.value=='Dolar')){
              let result9= Number(`${dinero.value*0.00025}`);
              alert("son "+ result9.toFixed(2) +" Dolares")
       }

       else if ((entrada.value=='Peso Colombiano') && (salida.value=='Peso Mexicano')){
              let result10= Number(`${dinero.value*0.005}`);
              alert("son "+ result10.toFixed(2) +" Pesos Mexicanos")
       }
       
       else if ((entrada.value=='Peso Colombiano') && (salida.value=='Euro')){
              let result11= Number(`${dinero.value*0.00022}`);
              alert("son "+ result11.toFixed(2) +" Euros")
       }

       else if ((entrada.value=='Peso Colombiano') && (salida.value=='Libra Esterlina')){
              let result12= Number(`${dinero.value*0.00018}`);
              alert("son "+ result12.toFixed(2) +" Libras Esterlinas")
       }
//Euros
       else if ((entrada.value=='Euro') && (salida.value=='Dolar')){
              let result13= `${dinero.value*1.3}`;
              alert("son "+ result13 +" Dolares")
       }

       else if ((entrada.value=='Euro') && (salida.value=='Peso Mexicano')){
              let result14= `${dinero.value*23.16}`;
              alert("son "+ result14 +" Pesos Mexicanos")
       }

       else if ((entrada.value=='Euro') && (salida.value=='Peso Colombiano')){
              let result15= `${dinero.value*4600}`;
              alert("son "+ result15 +" Pesos Colombianos")
       }

       else if ((entrada.value=='Euro') && (salida.value=='Libra Esterlina')){
              let result16= `${dinero.value*0.84}`;
              alert("son "+ result16 +" Libras Esterlinas")
       }
//Libra Esterlina

       else if ((entrada.value=='Libra Esterlina') && (salida.value=='Dolar')){
              let result17= `${dinero.value*1.35}`;
              alert("son "+ result17 +" Dolares ")
       }

       else if ((entrada.value=='Libra Esterlina') && (salida.value=='Peso Mexicano')){
              let result18= `${dinero.value*27.63}`;
              alert("son "+ result18 +" Pesos Mexicanos ")
       }

       else if ((entrada.value=='Libra Esterlina') && (salida.value=='Peso Colombiano')){
              let result19= `${dinero.value*5480}`;
              alert("son "+ result19 +" Pesos Colombianos ")
       }

       else if ((entrada.value=='Libra Esterlina') && (salida.value=='Euro')){
              let result20= `${dinero.value*1.19}`;
              alert("son "+ result20 +" Euros ")
       }

//en caso de asignar moneda del mismo valor:

       else {
              alert("ingrese diferentes divisas")
       }

})



