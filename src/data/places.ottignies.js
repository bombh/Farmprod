/* 
-----------------------------------
Data for places
-----------------------------------
Array of all places
Kind of static DB
*/

const param = {
   mapCenter: {
      lat: 50.663720072820254,
      lng: 4.573531510499429,
   },
   delta: 0.022,
}

const points = [
   /* ****************************
    Fresh Paint Ottignies
    **************************** */
   {
      name: "Normal(MR)",
      place: "Avenue des Combattants x rue Lucas",
      address: "",
      geo: {
         lat: 50.668459487269665,
         lng: 4.568891396833357,
      },
      image: "ott_fp_1.jpg",
      group: "fpolln",
   },

   {
      name: "Iota(BE)",
      place: "Rue de la Station 9",
      address: "",
      geo: {
         lat: 50.661021833380744,
         lng: 4.565712634966017,
      },
      image: "ott_fp_2.jpg",
      group: "fpolln",
   },

   {
      name: "Adec(FR)",
      place: "Rue du Bauloy (P’tit Maga)",
      address: "",
      geo: {
         lat: 50.66465317563184,
         lng: 4.581056072133174,
      },
      image: "ott_fp_3.jpg",
      group: "fpolln",
   },

   {
      name: "FARMPROD(Collectif) Alexis Corrand(FR) Arno Debal(BE) Fred Lebbel(BE) Guillaume Desmarets(BE) Nelson Dos Reis(BE)",
      place: "Rue des Deux-Ponts (Maison de la Citoyenneté)",
      comment: "",
      address: "",
      geo: {
         lat: 50.66865034075364,
         lng: 4.572387903492116,
      },
      image: "placeholder.png",
      group: "fpolln",
   },

   {
      name: "Fresque collective de la jeune scène locale: Juno Semesa Alex Romain Lateaz Gob.R Thyl",
      place: "Chaussée de La Croix",
      address: "",
      geo: {
         lat: 50.668479047971914,
         lng: 4.578474004996354,
      },
      image: "ott_fp_5.jpg",
      group: "fpolln",
   },
]

export { param, points }
