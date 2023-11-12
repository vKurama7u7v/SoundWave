// => Matriz de Emociones [Energy, Valence]
const moodMeter = [
  // 0 a < 0.1
  [
    {
      position: 1,
      emotion: "Devastado",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Deseperanzado",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Desolado",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Consumido",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Agotado",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Somnoliento",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Complaciente",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Tranquilo",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Afable",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Sereno",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.1 a < 0.2
  [
    {
      position: 1,
      emotion: "Desalentado",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Deprimido",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Huraño",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Exhausto",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Fatigado",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Apacible",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Reflexivo",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "En Paz",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Cómodo",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Desenfadado",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.2 a < 0.3
  [
    {
      position: 1,
      emotion: "Enajenado",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Infeliz",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Solitario",
      img: "",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Descorazonado",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Canasado",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Relajado",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Distendido",
      img: "",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Descansado",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Afortunado",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Equilibrado",
      img: "",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.3 a < 0.4
  [
    {
      position: 1,
      emotion: "Pesimista",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Malhumorado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Desanimado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Triste",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Aburrido",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Calmado",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Seguro",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Satisfecho",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Agradecido",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Conmovido",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.4 a < 0.5
  [
    {
      position: 1,
      emotion: "Rechazado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Taciturno",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Decepcionado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Decaido",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Apático",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "A Gusto",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Despreocupado",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Contento",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Amoroso",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Realizado",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.5 a < 0.6
  [
    {
      position: 1,
      emotion: "Indignado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Afligido",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Afectado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Intranquilo",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Molesto",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Agradable",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Alegre",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Esperanzado",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Juguetón",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Dichosos",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.6 a < 0.7
  [
    {
      position: 1,
      emotion: "Ansioso",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Aprensivo",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Preocupado",
      img: "",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Irritado",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Enojado",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Complacido",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Centrado",
      img: "",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Feliz",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Orgulloso",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Illusionado",
      img: "",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.7 a < 0.8
  [
    {
      position: 1,
      emotion: "Exasperado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Asustado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Enfadado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Nervioso",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Agitado",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Enérgico",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Animado",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Emocionado",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Optimista",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Entusiasta",
      img: "",
      mood: "1) Energética y Positiva",
    },
  ],

  // >= 0.8 a < 0.9
  [
    {
      position: 1,
      emotion: "Desesperado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Furioso",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Frustado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Tenso",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Atónito",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Hiperactivo",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Jovial",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Motivado",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Inspirado",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Exultante",
      img: "",
      mood: "1) Energética y Positiva",
    },
  ],

  // >= 0.9 a <= 1
  [
    {
      position: 1,
      emotion: "Enfurecido",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Aterrado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Estresado",
      img: "",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Inquieto",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Impactado",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Sorprendido",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Encantado",
      img: "",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Festivo",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Eufórico",
      img: "",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Extasiado",
      img: "",
      mood: "1) Energética y Positiva",
    },
  ],
];

/*

Enfurecido	Aterrado	    Estresado	    Inquieto	    Impactado	Sorprendido	    Encantado	    Festivo	    Eufórico	Extasiado
Desesperado	Furioso	        Frustrado	    Tenso	        Atónito	    Hiperactivo	    Jovial	        Motivado	Inspirado	Exultante
Exasperado	Asustado	    Enfadado	    Nervioso	    Agitado	    Enérgico	    Animado	        Emocionado	Optimista	Entusiasta
Ansioso	    Aprensivo	    Preocupado	    Irritado	    Enojado	    Complacido	    Centrado	    Feliz	    Orgulloso	Ilusionado
Idignado	Afligido	    Afectado	    Intranquilo	    Molesto	    Agradable	    Alegre	        Esperanzado	Juguetón	Dichoso
Rechazado	Taciturno	    Decepcionado	Decaído	        Apático	    A Gusto	        Despreocupado	Contento	Amoroso	    Realizado
Pesimista	Malhumorado	    Desanimado	    Triste	        Aburrido	Calmado	        Seguro	        Satisfecho	Agradecido	Conmovido
Enajenado	Infeliz	        Solitario	    Descorazonado	Cansado	    Relajado	    Distendido	    Descansado	Afortunado	Equilibrado
Desalentado	Deprimido	    Huraño	        Exhausto	    Fatigado	Apacible	    Reflexivo	    En Paz	    Cómodo	    Desenfadado
Devastado	Desesperanzado	Desolado	    Consumido	    Agotado	    Somnoliento	    Complaciente	Tranquilo	Afable	    Sereno

*/

const getPostion = (num) => {
  if (num) {
    const result = Math.trunc(num * 10);

    if (result == 10) {
      return result - 1;
    }

    return result;
  } else {
    return 0;
  }
};

export const getMoodTrack = (energy, valence) => {
  try {
    if (energy != null && valence != null) {
      const row = getPostion(energy);
      const column = getPostion(valence);

      return moodMeter[row][column];
    }
  } catch (error) {
    console.log("getMoodTrack", error);
    return "No se identifico la emoción";
  }
};
