//modulo que sirve para leer traer y escribir archivos externos
//inractuar con los archivos de la computadora 
const fs=require("fs");

let archivo= "./tareas.json";
let listaDeTarea=fs.readFileSync(archivo,"utf-8");

let parseListaDeJSON=JSON.parse(listaDeTarea);
let actualizarListaOL;

let moduloTareas=
{
    // Esta funcion retorna la array de objetos literales con los cuales puedo
    //trabajar en otras funciones
    listaDeObjetosLiterales:function()
    {
        return parseListaDeJSON;
    },

    //Esta funcion lo que hace es imprimir por consola los elementos del array  
    mostrarDatos: function()
    {
        //En esta variable listaDeOL almaceno el array de Objetos literales que
        //debuelve el metodo listaDeObjetosLiterales
        let listaDeOL=this.listaDeObjetosLiterales();
        //El ciclo for lo utilizo para recorrer el array y poder acceder a los 
        //elemento del mismo
        console.log("\n Los Datos son: \n");
        listaDeOL.forEach(function(iterador){
            //en cada iteracion del ciclo forEach cambia el etitulo y el estado
            console.log("Titulo: "+iterador.titulo+" , "+" Estado: "+iterador.estado);
        }); 
                
    },
    
    //Esta funcion agrega un objeto literal con los datos que recibe por parametro
    agregarDatos:function(tituloConsola,estadoConsola)
    {
        //creo una variable para guardar la lista de objetos literales que devuelve
        //la funcion listaDeObjetosLiterales
        let lista=this.listaDeObjetosLiterales();
        //creo una variable de un onjeto literal con sus dos propiedades titulo y
        // estado
        if(this.evaluacionDeDatosValida(tituloConsola) && this.evaluacionDeDatosValida(estadoConsola))
        {
            let nuevoObetoLiteral=
            {
            //a cada propiedad correspondiente le paso lo que el usuario escribe 
            // por consola 
                titulo:tituloConsola,
                estado:estadoConsola
            }
            //En la siguiente linea utilizo el metodo push para agregar el 
            //nuevo objeto literal
            lista.push(nuevoObetoLiteral);
             //Para actualizar la lista he crado un metodo que se llana actualizalista
            //que recibe como parametro la lista a actualizar con el nuevo objeto literal
            this.actualizalista(lista);
            //por ultimo un mensaje 
            console.log("\n El objeto fue agregado correctamente!\n");
        }
        else
            console.log("\nIngrese datos validos!")


    },
    //esta funcion se encarga de hacer la actualizacion del array original
    actualizalista:function(listaArgumento)
    {
        actualizarListaOL=JSON.stringify(listaArgumento);
        fs.writeFileSync(archivo,actualizarListaOL,"utf-8");
    },
    //Esta funcion elimina un elemento de la lista de objetos literales, recibiendo por parametro
    // el titulo ingresado por consola 
    eliminarPorTitulo(tiuloConsola)
    {
        let varLista=this.listaDeObjetosLiterales();
        let elDatoEstaIncluido=this.listaDeTitulos(varLista).includes(tituloConsola);

        if(elDatoEstaIncluido && this.evaluacionDeDatosValida(tiuloConsola))
        {
            for(let i=0;i<varLista.length;i++)
            {
                if(tituloConsola==varLista[i].titulo)
                {
                //splice es una funcion que te permite eliminar un objeto 
                //pasándole dos parámetros: 
                //el primero será el índice a partir del cual queremos 
                //borrar elementos y, el segundo, el número de elementos 
                //que queremos borrar a partir de la posición dada
                varLista.splice(i,1);
                this.actualizalista(varLista);
                console.log("\n Se elimino correctamente! \n");
                }
            }
            this.actualizalista(varLista);
    }
    else
        console.log("\n A ingresado un titulo invalido!");

    },

    listarPorEstado:function(estadoConsola)
    {
        let listaDeOL= this.listaDeObjetosLiterales();
        let elDatoEstaIncluido=this.listaDeEstados(listaDeOL).includes(estadoConsola);
        let listaFilter=listaDeOL.filter(filtrar => filtrar.estado==estadoConsola);

        if(elDatoEstaIncluido && this.evaluacionDeDatosValida(estadoConsola))
        {
            for(let i=0;i<listaFilter.length;i++)
            {
                console.log("Tutulo: "+listaFilter[i].titulo+" | "+"Estado: "+listaFilter[i].estado);
            }
        }
        else
            console.log("\n A ingresado un estado invalido!");   

    },
    evaluacionDeDatosValida:function(datoConsola,lista)
    {
        return(datoConsola!=undefined && (isNaN(parseInt(datoConsola))));
    },
    //Esta funcion devueve un array con todos los titulos
    listaDeTitulos:function(listaOL)
    {
        let listaRetur;
        for(let iterador of listaOL)
        {
            listaRetur=iterador.titulo;
        }
        return listaRetur;
    },
    //Esta funcion devueve un array con todos los Estados
    listaDeEstados:function(listaOL)
    {
        let listaRetur;
        for(let iterador of listaOL)
        {
            listaRetur=iterador.estado;
        }
        return listaRetur;
    },
    
    cambiarEstado: function(estadoAnterior, estadoNuevo)
    {

        let listaDeObjLit=this.listaDeObjetosLiterales();
        let elDatoEstaIncluido=this.listaDeEstados(listaDeObjLit).includes(estadoAnterior);
        let listafiltrada;
        
        if(elDatoEstaIncluido && this.evaluacionDeDatosValida(estadoAnterior) && this.evaluacionDeDatosValida(estadoNuevo))
        {
            listafiltrada=listaDeObjLit.map(function(iterador){

            if(iterador.estado==estadoAnterior)
            {
                return iterador.estado=estadoNuevo;
            }
            });
            this.actualizalista(listaDeObjLit);
            console.log("\n los Estados se actualizaron correctamente!");
            
        }
        else
            console.log("\n Ingrese un dato valido!");
        
    }

}

//Esta linea me permite exportar el moduloTareas
module.exports=moduloTareas;
