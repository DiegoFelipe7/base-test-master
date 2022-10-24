
export class MetodosCondicionales {



  numeroMayor(num1: number, num2: number, num3: number): number {
    if (num1 > num2) {
      if (num1 > num3) {
        return num1;
      } else {
        return num3;
      }
    } else {
      if (num2 > num3) {
        return num2
      } else {
        return num3;
      }
    }
  }

  numeroPar(num1: number): string {
    if (num1 % 2 === 0) {
      return "par";
    } else {
      return "impar"
    }
  }

}
