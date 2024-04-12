/* 
-----------------------------------
Data for places
-----------------------------------

Array of all places
Kind of static DB

*/

const param = {
   mapCenter: {
      lat: 50.66915149532407,
      lng: 4.616661509260129,
   },
   delta: 0.019,
}

const points = [
   /* ****************************
    Fresh Paint LLN
    **************************** */

   {
      name: "Blue(BE-MX) Resto(BE) Les Crayons(BE) Johnny Boy(BE) Tones(CH) Delicious Brain(SW)",
      place: "Gare de Louvain-La-Neuve (Quai 1)",
      address: "",
      geo: {
         lat: 50.66998832911775,
         lng: 4.616327478759363,
      },
      image: "lln_fp_1.jpg",
      group: "fpolln",
      num: 1,
   },

   {
      name: "Pantonio(PR)",
      place: "Avenue Georges Lemaître (Antenne communale)",
      address: "",
      geo: {
         lat: 50.66976124864166,
         lng: 4.617135902834618,
      },
      image: "lln_fp_2.jpg",
      group: "fpolln",
      num: 2,
   },

   {
      name: "Taroe(FR)",
      place: "Rue des Bruyères X Rue René Magritte",
      address: "",
      geo: {
         lat: 50.66599032523246,
         lng: 4.610797750445644,
      },
      image: "placeholder.png",
      group: "fpolln",
      num: 3,
   },

   {
      name: "FARMPROD (Collectif)\nAlexis Corrand(FR) Arno Debal(BE) Fred Lebbel(BE) Johan Baggio(FR) Guillaume Desmarets(BE) Nelson Dos Reis(BE) Piotr Szlatcha(BE)",
      place: "Anneau central",
      comment: "Legally this spot is not accessible by foot ;-)",
      address: "",
      geo: {
         lat: 50.66865419877107,
         lng: 4.6086609324474175,
      },
      image: "lln_fp_4.jpg",
      group: "fpolln",
      num: 4,
   },

   /* ****************************
    KOSMO 12
    **************************** */

   {
      name: "Alz(FR) Bonga(BR) Keto(BR) Caat(BE) Besok(BE)",
      place: "Place des Wallons",
      address: "",
      geo: {
         lat: 50.66835913149912,
         lng: 4.616860037158862,
      },
      image: "lln_k12_1.jpg",
      group: "kosmo12",
      num: 1,
   },

   {
      name: "Denis Meyers(BE) Corn 79(IT) Zorkmade(IT) ",
      place: "Ruelle St-Eloi",
      address: "",
      geo: {
         lat: 50.668073713809484,
         lng: 4.618220723690154,
      },
      image: "lln_k12_2.jpg",
      group: "kosmo12",
      num: 2,
   },

   {
      name: "Shock(BR) Kongo(FR) Sonic(US) Colorz(FR) Binho(BR) Zumi(AR)",
      place: "Parking Sablon (Mur rose)",
      address: "",
      geo: {
         lat: 50.66856119856713,
         lng: 4.614176931169557,
      },
      image: "lln_k12_3.jpg",
      group: "kosmo12",
      num: 3,
   },

   {
      name: "Parole(BE) Obêtre(BE) Obic(ES) Poeta(ES)",
      place: "Grand-place",
      address: "",
      geo: {
         lat: 50.669087282256115,
         lng: 4.612146848375334,
      },
      image: "lln_k12_4.jpg",
      group: "kosmo12",
      num: 4,
   },

   /* ****************************
    KOSMO 15
    **************************** */

   {
      name: "Popay(FR) Kool Koor(US) Mart Aire(AR) Pelucas(MX) Bandi(CH) Eyes B(BE)",
      place: "Gare de Louvain-la-Neuve (étage et escalier)",
      address: "",
      geo: {
         lat: 50.66976223564554,
         lng: 4.616142406345172,
      },
      image: "lln_k15_1.jpg",
      group: "kosmo15",
      num: 1,
   },

   {
      name: "Mart Aires(AR) Zesär Bahamonte(ES)",
      place: "Place des Sciences (Point Culture)",
      address: "",
      geo: {
         lat: 50.66823258552362,
         lng: 4.61933591260172,
      },
      image: "lln_k15_2.jpg",
      group: "kosmo15",
      num: 2,
   },

   {
      name: "Psoman(BE) Cäät(BE)",
      place: "Parking cour des Borains",
      address: "",
      geo: {
         lat: 50.66825019669427,
         lng: 4.616495245737452,
      },
      image: "lln_k15_3.jpg",
      group: "kosmo15",
      num: 3,
   },

   {
      name: "Legz(FR)",
      place: "Place des Brabançons",
      address: "",
      geo: {
         lat: 50.6685785452872,
         lng: 4.616249298986236,
      },
      image: "lln_k15_4.jpg",
      group: "kosmo15",
      num: 4,
   },

   {
      name: "Ren’Art Collectif(FR) Mr Cana Pi Samy Lady Alezia",
      place: "Gare des bus",
      address: "",
      geo: {
         lat: 50.66765318559588,
         lng: 4.613359554391325,
      },
      image: "lln_k15_5.jpg",
      group: "kosmo15",
      num: 5,
   },

   {
      name: "FARMPROD Collectif(BE) Anyway/Collectif(FR) Grems Taroe Opera The Weird Collectif Rookie(DE) Frau Isa(AU) Cone(DE)",
      place: "Parking Sablon (Mur Bleu)",
      address: "",
      geo: {
         lat: 50.66845114836571,
         lng: 4.61379168498628,
      },
      image: "lln_k15_6.jpg",
      group: "kosmo15",
      num: 6,
   },

   {
      name: "Milu Corech(AR) Mariela Ajras(AR) Dourone(ES)",
      place: "Place Raymond Lemaire",
      address: "",
      geo: {
         lat: 50.669019362621526,
         lng: 4.610830346776209,
      },
      image: "lln_k15_7.jpg",
      group: "kosmo15",
      num: 7,
   },
   {
      name: "Tyrsa(FR) Ilk(FR) Delicious Brain(SW) 2 Shy(FR)",
      place: "Anneau Central Sud (Sous-sol)",
      address: "",
      geo: {
         lat: 50.668901178868,
         lng: 4.609989766306636,
      },
      image: "lln_k15_8.jpg",
      group: "kosmo15",
      num: 8,
   },

   {
      name: "Dogs(BE) Thia(FR) Solid(BE) Cimer(BE) Babs(FR) 2shy(FR) Cee Pil(BE) Fredone Fone(BR) Bandi(CH) Arno 2bal(BE) Amty(FR) Amen(FR) Lady Shove(FR)",
      place: "Boulevard de Wallonie (Sud)",
      address: "",
      geo: {
         lat: 50.67106066461308,
         lng: 4.617519667021901,
      },
      image: "placeholder.png",
      group: "kosmo15",
      num: 9,
   },

   {
      name: "Remed(ES) 3TT man(ES)",
      place: "Chaussée de Wavre",
      address: "",
      geo: {
         lat: 50.67316133268017,
         lng: 4.625009297551971,
      },
      image: "placeholder.png",
      group: "kosmo15",
      num: 10,
   },

   /* ****************************
    JAUNE
    **************************** */

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (1/9)",
      address: "",
      geo: {
         lat: 50.6677945383251,
         lng: 4.619330173515794,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (2/9)",
      address: "",
      geo: {
         lat: 50.66761339233951,
         lng: 4.618573639538944,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (3/9)",
      address: "",
      geo: {
         lat: 50.66834082011982,
         lng: 4.618234698421414,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (4/9)",
      address: "",
      geo: {
         lat: 50.66935806056609,
         lng: 4.616037043100741,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (5/9)",
      address: "",
      geo: {
         lat: 50.66977874137148,
         lng: 4.614655783787567,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (6/9)",
      address: "",
      geo: {
         lat: 50.6704353891689,
         lng: 4.614979073636246,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (7/9)",
      address: "",
      geo: {
         lat: 50.67055505413277,
         lng: 4.614186064380205,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (8/9)",
      address: "",
      geo: {
         lat: 50.669589585501065,
         lng: 4.612173883324753,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   {
      name: "Jaune(BE)",
      place: "Parcours Pochoirs (9/9)",
      address: "",
      geo: {
         lat: 50.66939639190592,
         lng: 4.611207263528883,
      },
      image: "jaune.jpg",
      group: "jaune",
   },

   /* ****************************
    STATUES
    **************************** */

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (1/8)",
      address: "",
      geo: {
         lat: 50.667962071253974,
         lng: 4.6115977665046035,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (2/8)",
      address: "",
      geo: {
         lat: 50.66878842741665,
         lng: 4.611700061477228,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (3/8)",
      address: "",
      geo: {
         lat: 50.668936528974655,
         lng: 4.612250906872914,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (4/8)",
      address: "",
      geo: {
         lat: 50.66890993446278,
         lng: 4.612439728591928,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (5/8)",
      address: "",
      geo: {
         lat: 50.6691055959188,
         lng: 4.614127749656513,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (6/8)",
      address: "",
      geo: {
         lat: 50.66891009795138,
         lng: 4.614583725201991,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (7/8)",
      address: "",
      geo: {
         lat: 50.66915149532407,
         lng: 4.614661509260129,
      },
      image: "statue.jpg",
      group: "statue",
   },

   {
      name: "Isaac Cordal(ES)",
      place: "Parcours Statues (8/8)",
      address: "",
      geo: {
         lat: 50.67051828231483,
         lng: 4.61600205040457,
      },
      image: "statue.jpg",
      group: "statue",
   },
]

export { param, points }
