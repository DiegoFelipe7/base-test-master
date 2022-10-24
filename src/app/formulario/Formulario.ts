import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class unFormulario {
  public form: FormGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group(
      {
        email: ['diegofelipem99@gmail.com', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    );

  }
}
