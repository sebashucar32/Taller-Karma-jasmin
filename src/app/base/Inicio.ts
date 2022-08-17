export function Primeros(): string {
    return 'Hola que hace';
}

export function dos(arg: string): string {
    return `Hola ${arg}`;
}

export function Tres(arg: string): string[] {
    const arreglo = ['hola', 'sofka'];
    arreglo.push(arg);
    return arreglo;
}