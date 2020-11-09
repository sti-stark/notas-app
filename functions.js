
const MisNotas = [
    {
        titulo: 'truco de VSCode',
        cuerpo: 'usar snippets para todo'
    },
    {
        titulo: 'la función filter',
        cuerpo: 'genera un nuevo array según un criterio'
    },
    {
        titulo: 'la función map',
        cuerpo: 'genera un nuevo array a partir de otro'
    },
    {
        titulo: 'la función foreach',
        cuerpo: 'permite ejecutar código para cada elemento de un array'
    },
    {
        titulo: 'la función sort',
        cuerpo: 'ordena según un criterio cualquiera'
    }
]

/*Buscar nota a partir de un texto*/
const BuscarNota = (notas, texto) => {
    const encontrarNota = notas.findIndex((nota) => {
        return nota.titulo.toLowerCase().includes(texto) || nota.cuerpo.toLowerCase().includes(texto);
    })
    if (encontrarNota) {
        console.log(notas[encontrarNota]);
        return encontrarNota
    } else {
        console.log('la nota no existe');
        return {}
    }
}

/*Incluir una nueva nota*/
const IncluirNota = (notas, titulo, cuerpo) => {
    const comprobarNota = notas.findIndex((nota) => {
        return nota.titulo.toLowerCase().includes(titulo) || nota.cuerpo.toLowerCase().includes(cuerpo);
    });
    if (comprobarNota === -1) {
        console.log('Nota creada con exito');
        notas.push({ titulo: titulo, cuerpo: cuerpo });
        return console.log(`Titulo: ${titulo} Cuerpo: ${cuerpo}`);
    } else {
        console.log(comprobarNota);
        return console.log('la nota ya existe');
    }

}

/*Borrar nota existente*/
const borrarNotaEx = (notas, tituloI, cuerpoI) => {
    const checkExists = notas.findIndex((nota) => {
        return nota.titulo.toLowerCase().includes(tituloI) && nota.cuerpo.toLowerCase().includes(cuerpoI);
    })
    console.log(checkExists);

    if (checkExists === -1) {
        return console.log('La nota no existe');
    } else {
        notas.splice(checkExists, 1);
        return console.log(`La nota (Titulo: ${tituloI}  Cuerpo: ${cuerpoI}.) se ha borrado con éxito`);
    }
}

/*Ordenar las Notas*/
const orderlist = (notas,option) => {
    //option: titulo, cuerpo
    if (option === 'titulo') {
        return notas.sort((nota1, nota2) => {
            if (nota1.titulo.toLowerCase() < nota2.titulo.toLowerCase()) {
                return -1
            } else if (nota1.titulo.toLowerCase() > nota2.titulo.toLowerCase()) {
                return 1
            }
        })
    } else {
        return notas.sort((nota1,nota2)=>{
            if(nota1.cuerpo.toLowerCase() < nota2.cuerpo.toLowerCase()){
                return -1
            }else if(nota1.cuerpo.toLowerCase() > nota2.cuerpo.toLowerCase()){
                return 1
            }else{
                return 0
            }
        })

    }
}

module.exports ={
    BuscarNota,
    IncluirNota,
    borrarNotaEx,
    orderlist,
    MisNotas
}


/*MisNotas.forEach(element => {
    console.log(element);
});*/

//orderlist(MisNotas,'titulo');
//borrarNotaEx(MisNotas, 'la función','permite  elemento de un array');
//BuscarNota(MisNotas,'ordena según un criterio cualquiera');
//IncluirNota(MisNotas, 'Método length', 'permite ver la dimensión del array');