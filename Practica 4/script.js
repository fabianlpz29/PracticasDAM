const bitacora = [
    {
        id:1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos en la tabla persona'

    },
    {
        id:1,
        titulo: 'ModificaciÃ³n',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez'
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juann Carlos',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se modificaron datos en la tabla persona'

    }
]

for (const entrada of bitacora) {
    const { titulo, detalles: { fecha, hora }, descripcion } = entrada;
    console.log(`Título: ${titulo}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Hora: ${hora}`);
    console.log(`Descripción: ${descripcion}`);
  }

  
  function desempacarCampos(objeto) {
    const { Berlin, Jucuapa, Mercedes } = objeto; 
    console.log(`Ciudad 1: ${Berlin}`);
    console.log(`Ciudad 2: ${Jucuapa}`);
    console.log(`Ciudad 3: ${Mercedes}`);
  }
  
  const desempacar = {
    Berlin: 'Berlin',
    Jucuapa: 'Jucuapa',
    Mercedes: 'Mercedes'
  };
  desempacarCampos(desempacar);

  if (bitacora.length > 1) {
    const [, segundaEntrada] = bitacora; 
    const { detalles: { campos: { anterior, actual } } } = segundaEntrada;
  
    console.log('Campos Anteriores:');
    for (const campo of anterior) {
      console.log(`  ID: ${campo.id}, Nombres: ${campo.nombres}, Apellidos: ${campo.apellidos}`);
    }
  
    console.log('Campos Actuales:');
    console.log(`  ID: ${actual.id}, Nombres: ${actual.nombres}, Apellidos: ${actual.apellidos}`);
  }
  
  