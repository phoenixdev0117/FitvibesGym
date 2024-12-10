

export enum Page {
  JustClass = "just-class",
  FullFit = "full-fit",
  Estudiante = "estudiante",
  Trimestral = "trimestral",
  Semestral = "semestral",
  Anual = "anual",
}


export const planes = [
  {
    name: "Just Class",
    price: 549,
    select: 1,
  },
  {
    name: "Just Class",
    price: 549,
    select: 1,
  },
  {
    name: "Full Fit",
    price: 849,
    select: 2,
  },
  {
    name: "Estudiante",
    price: 599,
    select: 3,
  },
  {
    name: "Trimestral",
    price: 2299,
    select: 4,
  },
  {
    name: "Semestral",
    price: 4199,
    select: 5,
  },
  {
    name: "Anual",
    price: 7199,
    select: 6,
  },
];


export const getPlan = (plan: string) => {
  if (plan === "just-class") return planes[1];
  if (plan === "full-fit") return planes[2];
  if (plan === "estudiante") return planes[3];
  if (plan === "trimestral") return planes[4];
  if (plan === "semestral") return planes[5];
  if (plan === "anual") return planes[6];
  return planes[1];
};