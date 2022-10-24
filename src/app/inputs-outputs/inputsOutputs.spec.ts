import { InputComponent } from "./InputsOutputs";
describe("Pruebas a inputs y outputs", () => {
    let componente: InputComponent
    beforeEach(() => {
        componente = new InputComponent();
    })
    it("Prueba input", () => {
        expect(componente.entrada).toBe("default")
        componente.borrarEntrada();
        expect(componente.entrada).toBe("");
    })

    it("Prueba ouput", () => {
        const arg = "emitiendo"
        componente.salida.subscribe(ele => {
            expect(ele).toBe(arg);
        });
        componente.emitirAlgo(arg)
    })

})