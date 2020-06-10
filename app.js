
let importarModuloTarea=require("./tareas.js");
//capturar palabras de la terminal
let comando=process.argv[2];

switch(comando)
{
    case "listar":
        {   
            //Llamo al metodo mostrarDatos que se encuentra en la variable que importa las 
            // funcionalidades del archivo que se llama tareas.js
            importarModuloTarea.mostrarDatos();
        }
        break;
    case "listarEstado":
        {
            let estadoConsola=process.argv[3];
            importarModuloTarea.listarPorEstado(estadoConsola);
        }
        break;
    case "agregar":
        {
            //declaro dos variables para capturar los datos que me pase el usuario por consola
            // los cuales son pasado como parametro dentro de la funcion agregarDatos
            let tituloC=process.argv[3];
            let estadoC=process.argv[4];
            importarModuloTarea.agregarDatos(tituloC,estadoC);
        }
        break;
    case "eliminar":
        {
            //declaro una variable para capturar el titulo del objeto a eliminar que luego 
            //es pasado por parametro en la funcion eliminarPorTitulo
            tituloConsola=process.argv[3];
            importarModuloTarea.eliminarPorTitulo(tituloConsola);
        }
        break;
    case "modificarEstados":
        {
            let estadoAnterior=process.argv[3];
            let estadoNuevo=process.argv[4];
            importarModuloTarea.cambiarEstado(estadoAnterior,estadoNuevo);
        }
        break;
    
    default:
        console.log("ingrese una opcioin valida");
        break;
}


//console.log(isNaN((parseInt(comando))));
