import { unFormulario } from "./Formulario"
import { FormBuilder } from "@angular/forms"
describe("Formularios", () => {

    const component = new unFormulario(new FormBuilder);
    it("prueba a fomularios", () => {
        expect(component.form.contains("email")).toBeTruthy();
        expect(component.form.contains("password")).toBeTruthy();
    })

    it("validador password", () => {
        const data = component.form.get("password");
        data?.setValue("")
        expect(data?.valid).toBeFalsy()
    })

    it("Mi email", () => {
        const data = component.form.getRawValue().email;
        expect(data).toEqual("diegofelipem99@gmail.com")
    })
    it("Mi password", () => {
        const data = component.form.getRawValue().password;
        expect(data).toEqual("")
    })
})