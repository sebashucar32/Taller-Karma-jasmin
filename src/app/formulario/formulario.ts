import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class unFormulario {
    public form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group(
            {
                email: ['Valor inicial', [Validators.required, Validators.email]],
                password: ['', Validators.required]
            }
        );
    }
}