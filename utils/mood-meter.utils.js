// => Matriz de Emociones [Energy, Valence]
const moodMeter = [
  // 0 a < 0.1
  [
    { position: 1, emotion: "Devastado", img: "" },
    { position: 2, emotion: "Deseperanzado", img: "" },
    { position: 3, emotion: "Desolado", img: "" },
    { position: 4, emotion: "Consumido", img: "" },
    { position: 5, emotion: "Agotado", img: "" },
    { position: 6, emotion: "Somnoliento", img: "" },
    { position: 7, emotion: "Complaciente", img: "" },
    { position: 8, emotion: "Tranquilo", img: "" },
    { position: 9, emotion: "Afable", img: "" },
    { position: 10, emotion: "Sereno", img: "" },
  ],

  // >= 0.1 a < 0.2
  [
    { position: 1, emotion: "Desalentado", img: "" },
    { position: 2, emotion: "Deprimido", img: "" },
    { position: 3, emotion: "Huraño", img: "" },
    { position: 4, emotion: "Exhausto", img: "" },
    { position: 5, emotion: "Fatigado", img: "" },
    { position: 6, emotion: "Apacible", img: "" },
    { position: 7, emotion: "Reflexivo", img: "" },
    { position: 8, emotion: "En Paz", img: "" },
    { position: 9, emotion: "Cómodo", img: "" },
    { position: 10, emotion: "Desenfadado", img: "" },
  ],

  // >= 0.2 a < 0.3
  [
    { position: 1, emotion: "Enajenado", img: "" },
    { position: 2, emotion: "Infeliz", img: "" },
    { position: 3, emotion: "Solitario", img: "" },
    { position: 4, emotion: "Descorazonado", img: "" },
    { position: 5, emotion: "Canasado", img: "" },
    { position: 6, emotion: "Relajado", img: "" },
    { position: 7, emotion: "Distendido", img: "" },
    { position: 8, emotion: "Descansado", img: "" },
    { position: 9, emotion: "Afortunado", img: "" },
    { position: 10, emotion: "Equilibrado", img: "" },
  ],

  // >= 0.3 a < 0.4
  [
    { position: 1, emotion: "Pesimista", img: "" },
    { position: 2, emotion: "Malhumorado", img: "" },
    { position: 3, emotion: "Desanimado", img: "" },
    { position: 4, emotion: "Triste", img: "" },
    { position: 5, emotion: "Aburrido", img: "" },
    { position: 6, emotion: "Calmado", img: "" },
    { position: 7, emotion: "Seguro", img: "" },
    { position: 8, emotion: "Satisfecho", img: "" },
    { position: 9, emotion: "Agradecido", img: "" },
    { position: 10, emotion: "Conmovido", img: "" },
  ],

  // >= 0.4 a < 0.5
  [
    { position: 1, emotion: "Rechazado", img: "" },
    { position: 2, emotion: "Taciturno", img: "" },
    { position: 3, emotion: "Decepcionado", img: "" },
    { position: 4, emotion: "Decaido", img: "" },
    { position: 5, emotion: "Apático", img: "" },
    { position: 6, emotion: "A Gusto", img: "" },
    { position: 7, emotion: "Despreocupado", img: "" },
    { position: 8, emotion: "Contento", img: "" },
    { position: 9, emotion: "Amoroso", img: "" },
    { position: 10, emotion: "Realizado", img: "" },
  ],

  // >= 0.5 a < 0.6
  [
    { position: 1, emotion: "Indignado", img: "" },
    { position: 2, emotion: "Afligido", img: "" },
    { position: 3, emotion: "Afectado", img: "" },
    { position: 4, emotion: "Intranquilo", img: "" },
    { position: 5, emotion: "Molesto", img: "" },
    { position: 6, emotion: "Agradable", img: "" },
    { position: 7, emotion: "Alegre", img: "" },
    { position: 8, emotion: "Esperanzado", img: "" },
    { position: 9, emotion: "Juguetón", img: "" },
    { position: 10, emotion: "Dichosos", img: "" },
  ],

  // >= 0.6 a < 0.7
  [
    { position: 1, emotion: "Ansioso", img: "" },
    { position: 2, emotion: "Aprensivo", img: "" },
    { position: 3, emotion: "Preocupado", img: "" },
    { position: 4, emotion: "Irritado", img: "" },
    { position: 5, emotion: "Enojado", img: "" },
    { position: 6, emotion: "Complacido", img: "" },
    { position: 7, emotion: "Centrado", img: "" },
    { position: 8, emotion: "Feliz", img: "" },
    { position: 9, emotion: "Orgulloso", img: "" },
    { position: 10, emotion: "Illusionado", img: "" },
  ],

  // >= 0.7 a < 0.8
  [
    { position: 1, emotion: "Exasperado", img: "" },
    { position: 2, emotion: "Asustado", img: "" },
    { position: 3, emotion: "Enfadado", img: "" },
    { position: 4, emotion: "Nervioso", img: "" },
    { position: 5, emotion: "Agitado", img: "" },
    { position: 6, emotion: "Enérgico", img: "" },
    { position: 7, emotion: "Animado", img: "" },
    { position: 8, emotion: "Emocionado", img: "" },
    { position: 9, emotion: "Optimista", img: "" },
    { position: 10, emotion: "Entusiasta", img: "" },
  ],

  // >= 0.8 a < 0.9
  [
    { position: 1, emotion: "Desesperado", img: "" },
    { position: 2, emotion: "Furioso", img: "" },
    { position: 3, emotion: "Frustado", img: "" },
    { position: 4, emotion: "Tenso", img: "" },
    { position: 5, emotion: "Atónito", img: "" },
    { position: 6, emotion: "Hiperactivo", img: "" },
    { position: 7, emotion: "Jovial", img: "" },
    { position: 8, emotion: "Motivado", img: "" },
    { position: 9, emotion: "Inspirado", img: "" },
    { position: 10, emotion: "Exultante", img: "" },
  ],

  // >= 0.9 a <= 1
  [
    { position: 1, emotion: "Enfurecido", img: "" },
    { position: 2, emotion: "Aterrado", img: "" },
    { position: 3, emotion: "Estresado", img: "" },
    { position: 4, emotion: "Inquieto", img: "" },
    { position: 5, emotion: "Impactado", img: "" },
    { position: 6, emotion: "Sorprendido", img: "" },
    { position: 7, emotion: "Encantado", img: "" },
    { position: 8, emotion: "Festivo", img: "" },
    { position: 9, emotion: "Eufórico", img: "" },
    { position: 10, emotion: "Extasiado", img: "" },
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
