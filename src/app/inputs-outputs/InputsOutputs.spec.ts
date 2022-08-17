import { InputsOutputsComponent } from "./InputsOutputs";

describe('probando inputs y outputs', () => {
    let componente: InputsOutputsComponent;

    beforeEach(() => {
        componente = new InputsOutputsComponent();
    })

    it('probando input', () => {
        expect(componente.entrada).toBe('default');
        componente.borrarentrada();
        expect(componente.entrada).toBe('');
    });

    it('probando output', () => {
        const ARG: string = 'emitiendo';
        componente.emitirAlgo(ARG);
        componente.salida.subscribe(valor => {
            expect(valor).toBe(ARG);
        });
    })
});