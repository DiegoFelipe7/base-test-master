export function saludo(): string {
  return "Hola mundo"
}

export function arreglo(equipo: string): string[] {
  const data = ["America", "Cali", "Medellin"]
  data.push(equipo)
  return data;
}