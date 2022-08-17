import { dos, Primeros, Tres } from "./Inicio";

describe('Probando Inicio', () => {
    it('Probando Primeros', () => {
        const resultado = Primeros();
        expect(resultado).toEqual('Hola que hace');               // toEqual para verificar que los datos sean exactamente iguales
    });

    it('debe retornar una cadena que contenga el argumento', () => {
        const resultado = dos('Sofka');
        expect(resultado).toEqual('Hola Sofka');
        expect(resultado).toContain('Sofka');                     // toContain es para verificar si contiene parte de la cadena que necesita
    });

    it('se debe agregar el argumento al arreglo', () => {
        const resultado = Tres('SofkU');
        expect(resultado).toContain('SofkU');
        expect(resultado.length).toBe(3);                          // toBe es para validar en este caso que el arreglo tenga la cantidad de elementos de 3 despues del agregado
    })
})