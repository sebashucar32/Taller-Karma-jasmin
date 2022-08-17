import { FormBuilder } from "@angular/forms";
import { unFormulario } from "./formulario"

describe('Probando formulario', () => {
    const componente = new unFormulario(new FormBuilder());

    it('primera prueba formulario', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('probando validador email es requerido', () => {
        const control = componente.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });

    it('probando validador email es tipo email', () => {
        const control = componente.form.get('email');
        control?.setValue('sofka@sofka.com.co');
        expect(control?.valid).toBeTruthy();
    });
})