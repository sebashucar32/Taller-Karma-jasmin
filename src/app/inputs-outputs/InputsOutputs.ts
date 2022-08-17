import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'app-input',
    templateUrl: './InputsOutputs.html',
    styleUrls: ['./InputOutputs.scss']
})

export class InputsOutputsComponent {
    @Input('entrada') entrada: string = 'default';
    @Output() salida: EventEmitter<string>;

    constructor() {
        this.salida = new EventEmitter<string>();
    }

    public emitirAlgo(arg: string): void {
        this.salida.emit(arg);
    }

    public borrarentrada(): void {
        this.entrada = '';
    }
}