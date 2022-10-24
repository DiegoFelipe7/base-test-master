import { MetodosCondicionales } from "./Metodos-etc"

describe("prueba de metodos", () => {
    let componente: MetodosCondicionales;
    beforeEach(() => {
        componente = new MetodosCondicionales;
    })

    it("Numero final mayor", () => {
        const data = componente.numeroMayor(4, 2, 5);
        expect(data).toEqual(5);
    })

    it("Numero inicial mayor", () => {
        const data = componente.numeroMayor(4, 2, 3);
        expect(data).toEqual(4);
    })

    it("Numero central mayor", () => {
        const data = componente.numeroMayor(4, 6, 3);
        expect(data).toEqual(6);
    })
    it("Numero final ", () => {
        const data = componente.numeroMayor(1, 2, 3);
        expect(data).toEqual(3);
    })

    it("Numero par", () => {
        const data = componente.numeroPar(2);
        expect(data).toEqual("par")
    })
    it("Numero impar", () => {
        const data = componente.numeroPar(5);
        expect(data).toEqual("impar")
    })
})
