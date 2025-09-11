const partidos = [
  { 
    juego :1,
    equipo1: "Argentina", 
    equipo2: "Brasil",
    goles1: 3,
    goles2: 2 
  },
  { 
    juego :2,
    equipo1: "Chile", 
    equipo2: "Perú", 
    goles1: 1, 
    goles2: 1 
  },
  {
    juego :3,
    equipo1: "Colombia", 
    equipo2: "Uruguay", 
    goles1: 0, 
    goles2: 2
  },
  {
    juego :4,
    equipo1: "Ecuador", 
    equipo2: "Venezuela", 
    goles1: 4, 
    goles2: 3
  },
  { 
    juego :5,
    equipo1: "Paraguay", 
    equipo2: "Bolivia", 
    goles1: 2, 
    goles2: 2
  },
  {
    juego :6,
    equipo1: "Argentina", 
    equipo2: "Chile", 
    goles1: 1, 
    goles2: 0
  },
  {
    juego :7,
    equipo1: "Brasil", 
    equipo2: "Colombia",
    goles1: 2, 
    goles2: 1 
  }
];


const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
  const p = partidos.shift();
  console.log(`Resultado del primer partido: ${p.equipo1} ${p.goles1} - ${p.goles2} ${p.equipo2}`);
}

console.log("Partidos",partidos);


const p1 = partidos.shift();

console.log(`Resultado del primer partido: ${p1.equipo1} ${p1.goles1} - ${p1.goles2} ${p1.equipo2}`);

const p2 = partidos.shift();

console.log(`Resultado del segundo partido: ${p2.equipo1} ${p2.goles1} - ${p2.goles2} ${p2.equipo2}`);

const p3 = partidos.shift();

console.log(`Resultado del tercer partido: ${p3.equipo1} ${p3.goles1} - ${p3.goles2} ${p3.equipo2}`);

const p4 = partidos.shift();

console.log(`Resultado del cuarto partido: ${p4.equipo1} ${p4.goles1} - ${p4.goles2} ${p4.equipo2}`);

const p5 = partidos.shift();

console.log(`Resultado del quinto partido: ${p5.equipo1} ${p5.goles1} - ${p5.goles2} ${p5.equipo2}`); 

const p6 = partidos.shift();

console.log(`Resultado del sexto partido: ${p6.equipo1} ${p6.goles1} - ${p6.goles2} ${p6.equipo2}`);

const p7 = partidos.shift();

console.log(`Resultado del séptimo partido: ${p7.equipo1} ${p7.goles1} - ${p7.goles2} ${p7.equipo2}`);

console.log("Partidos",partidos);

