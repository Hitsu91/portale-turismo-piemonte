export interface Evento {
  img: { src: string; alt: string };
  date: { day: number; month: string };
  title: string;
  place: string;
  content: string;
}

export function chunkArray(myArray: any[], chunkSize: number): Evento[][] {
  const results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunkSize).reverse());
  }

  return results;
}
