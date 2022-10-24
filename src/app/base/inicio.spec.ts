import { arreglo, saludo } from "./Inicio"

describe("Pruebas de inicio", () => {
    it("Saludo", () => {
        const data = saludo();
        expect(data).toEqual("Hola mundo")
    })
    it("Numero de elementos arreglo", () => {
        const data = arreglo("Nacional").length
        expect(data).toEqual(4)
    })
    it("Elemento en arreglo", () => {
        const data = arreglo("Nacional")
        expect(data).toContain("Medellin")
    })
})