// => Matriz de Emociones [Energy, Valence]
const moodMeter = [
  // 0 a < 0.1
  [
    {
      position: 1,
      emotion: "Devastado",
      img: "https://i.pinimg.com/564x/20/eb/03/20eb0356401b68679964309407c73a56.jpg",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Deseperanzado",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nArXiSG5RZoXwB4yy_hcHvBO79pqUBTJFbhe05FjZucEiuBtFI6H97nCyb6sGujTGo4&usqp=CAU",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Desolado",
      img: "https://steamuserimages-a.akamaihd.net/ugc/382036172069762982/0354D4CCE23FB390FECADC8E55832A832DB899C3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Consumido",
      img: "https://media.tenor.com/T1QjLw5bPFAAAAAC/depressed-sad.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Agotado",
      img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTA4bDh0dm9zZmh0MDdpeTVhcjQ2Njlrbjh5NWVzdTJtazJsa3VqNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xchUhdPj5IRyw/giphy.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Somnoliento",
      img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWV4anZoZnFoaHdpeGp2cWJmZmZ1MDZkeTNqdTAwYThoY3VodWtwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKS1pHGiUUZ2g/giphy.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Complaciente",
      img: "https://media.tenor.com/yqYYqMv24g4AAAAd/attack-of-seals-seals.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Tranquilo",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDRyeGFibnd1eXRxZWs3OWl6NGJ1bmZuaW01OGhjaGhjbXIzeDF3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMHoU66sBXqqLqYvGO/giphy.gif",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Afable",
      img: "https://heraldodemexico.com.mx/u/fotografias/m/2021/2/25/f850x638-327241_404730_5050.jpg",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Sereno",
      img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHRwNm9sN2dqN3M5YXlqbWF6eWRoa2E3ajU4Y2NzZDZscThlMzcxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iAn1Wh7Fdnh6rKg4Tq/giphy.gif",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.1 a < 0.2
  [
    {
      position: 1,
      emotion: "Desalentado",
      img: "https://i.kym-cdn.com/photos/images/original/002/383/318/a24.gif",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Deprimido",
      img: "https://i.pinimg.com/originals/0c/f5/17/0cf51749e9299a7345bf23d0f7dc44e8.gif",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Huraño",
      img: "https://media.tenor.com/46lAWM-p0eYAAAAC/kermit-falling.gif",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Exhausto",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGVleDE3azl0YTRrZWpjaWlxYTh1anB6a2F1eTRldXpkNnM4OW9yMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FWi8eqEsIB8w8/giphy.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Fatigado",
      img: "https://pbs.twimg.com/media/FrwI2NQWYAIpoGy.jpg",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Apacible",
      img: "https://pbs.twimg.com/media/EfPiVaLWkAAFL3q.jpg",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Reflexivo",
      img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmF3ZW00N2QzMHlpNG40Zml6a3podGVkZ2cwNWVvZmdhOTB3NTk2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eePSFNBFv2W9owZ4Sh/giphy.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "En Paz",
      img: "https://pa1.aminoapps.com/6417/81c3ab3a33ea821fabfc78ecb079cd3a4df2b15e_hq.gif",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Cómodo",
      img: "https://i.pinimg.com/originals/73/95/a0/7395a0785163793adb7589af9455878b.gif",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Desenfadado",
      img: "https://pbs.twimg.com/media/FA4srvvWYAQbbYu.jpg",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.2 a < 0.3
  [
    {
      position: 1,
      emotion: "Enajenado",
      img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/119166110_2559193324392729_4374524729630579770_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=755d08&_nc_ohc=0qF7Uo5P_aUAX9HGfun&_nc_ht=scontent-bog1-1.xx&oh=00_AfAqBCBx_T4TgMdD8fVk9FPrIh-5Z0dW_e_lXVCUqPLJpw&oe=65725244",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 2,
      emotion: "Infeliz",
      img: "https://i.pinimg.com/originals/e9/70/c7/e970c7424f5ab880229bfa05a9961dd1.jpg",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 3,
      emotion: "Solitario",
      img: "https://media.tenor.com/JRJPU6H35PwAAAAC/spider-man-spider-man-web-of-shadows.gif",
      mood: "9) Poco Energética y Negativa",
    },
    {
      position: 4,
      emotion: "Descorazonado",
      img: "https://i.pinimg.com/564x/c7/27/e9/c727e99fd08611c38ca827d3ca970396.jpg",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Canasado",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWpvYmIzbGthdmNueDNkZm5lcTg3d3M4cndoNHk3NnI1a2J5YmRhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vMbC8xqhIf9ny/giphy.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Relajado",
      img: "https://media.tenor.com/zjV889xpMgYAAAAd/relaxed-cat.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Distendido",
      img: "https://i.pinimg.com/originals/d8/2e/1a/d82e1a2a4d5927866b4a8e2f027b9cbb.gif",
      mood: "6) Poco Energetica y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Descansado",
      img: "https://imagekit.androidphoria.com/wp-content/uploads/Estoy-cansado-jefe-meme-origen-TikTok.jpg",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Afortunado",
      img: "https://media.tenor.com/VD-L5aopcuoAAAAd/mr-incredible-becoming-canny.gif",
      mood: "3) Poco Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Equilibrado",
      img: "https://pbs.twimg.com/media/Efe3futXYAAv7qq.jpg",
      mood: "3) Poco Energética y Positividad Alta",
    },
  ],

  // >= 0.3 a < 0.4
  [
    {
      position: 1,
      emotion: "Pesimista",
      img: "https://i.pinimg.com/originals/c6/6e/82/c66e82fcb2da0dfdf66935496eb050cd.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Malhumorado",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2E0N2xubjQxaWY2b2x4b3hia2Zic3dybm5kamJqZXdwYzM3cXhkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5LU6ZcEGBbhVS/giphy.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Desanimado",
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczRrZmhscTIzdnRrMWQxa2w3dDk0cWE0Y2V5OWRmNnRjamMwZzN5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iJJ6E58EttmFqgLo96/giphy.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Triste",
      img: "https://media.tenor.com/jMZOZmoIwIcAAAAd/naruto-cry.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Aburrido",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3p3eXNwdGVoM3Z3eHNvb3J5ZTN0N2VpejExdXdiNjg3NHQ3cGxrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NQr9CR7KooV7G/giphy.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Calmado",
      img: "https://media.tenor.com/EHpQyFzthQ4AAAAd/kalm-calm.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Seguro",
      img: "https://media.tenor.com/8__xPkuenv4AAAAd/cat-shade.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Satisfecho",
      img: "https://i.pinimg.com/1200x/30/a1/ef/30a1ef08b10aded942dc5d2b1c2f5504.jpg",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Agradecido",
      img: "https://media.tenor.com/mlmGkt4lxoYAAAAC/agradecido-con-el-de-arriba.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Conmovido",
      img: "https://www.elfinanciero.com.mx/resizer/DdjA6z4rSsTo-Bvgc-MWY_VrwIM=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/2MRUWLTB5BG6VNXYKLNXYLDY3U.jpg",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.4 a < 0.5
  [
    {
      position: 1,
      emotion: "Rechazado",
      img: "https://retceteras.files.wordpress.com/2015/07/verano8.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Taciturno",
      img: "https://pauutopia.files.wordpress.com/2016/07/tumblr_o5djj2bfzh1r9mx3qo1_540.gif?w=620",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Decepcionado",
      img: "https://media0.giphy.com/media/FP5TqFN6FtrJ6/giphy.gif?cid=ecf05e47x222amb3k90z3vlaxbaq9iwc9wawjdkohyczt9cv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Decaido",
      img: "https://i.ytimg.com/vi/YkUDVMDVHNw/hqdefault.jpg?sqp=-oaymwElCOADEOgC8quKqQMZ8AEB-AGGAYACeIoCDAgAEAEYSCBHKFkwDw==&rs=AOn4CLCA5kAYKeh-Uaj91J7QaT7AIPXxQg",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Apático",
      img: "https://www.hogarmania.com/archivos/201801/mascotas-gatos-tristes-1280x720x80xX.jpg",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "A Gusto",
      img: "https://i.pinimg.com/originals/43/78/55/437855c8c4fdd9903e5f324fe019f3ec.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Despreocupado",
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHVsMW44cDQ4ZTg5NWJ3c2ZzdjZ1ZGUyM3d1NGRzamprcmVwY21pNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j6ZlX8ghxNFRknObVk/giphy.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Contento",
      img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGhjMzA3Z2UybDhjbzhqdGwyZGFpdWcxdjdzODl1b2QwMDB6aWl3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Amoroso",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdzcTlhZnMzdnE1bmk3bHhxdGcycTZjaGxpNnoyNHJhY2Y1eWZ2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pR8zHItvQDvBC/giphy.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Realizado",
      img: "https://assets.change.org/photos/6/su/tl/bvSutlXnYYsSkKk-800x450-noPad.jpg?1550834497",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.5 a < 0.6
  [
    {
      position: 1,
      emotion: "Indignado",
      img: "https://media.tenor.com/JeJ_T-sfkEAAAAAC/south-park.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Afligido",
      img: "https://lh5.googleusercontent.com/iPK4C8ChwzT5NjGY9UG261uBGgs9D2DspxEjmlBEC9anRTYFsj2wYRKUGSBfFR2yhu5rVIzn1NRsMzx4i7Dif9oI4-MEFANNns2d8H1iVcLkJ1D6yl1PCQ4tNO6bjtPjxihimbZ9",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Afectado",
      img: "https://www.mkgifs.com/wp-content/uploads/2022/05/Anime-Sad-GIF.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Intranquilo",
      img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm0yaThhNnl2dTJuODB2djlmcmlrbG9qYzhlNXhxMGJpMTk2enc4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U2nN0ridM4lXy/giphy.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Molesto",
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThtaGVsbnRmeGVpZzEyYzB4amNpanVtazdjZDF3Y3Jpb3g2MHN5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kHU8W94VS329y/giphy.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Agradable",
      img: "https://i.pinimg.com/originals/e9/b6/7d/e9b67de65bdcfb71036821cf0e642988.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Alegre",
      img: "https://media.tenor.com/2zMiN2MUJWwAAAAd/dance-gru.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Esperanzado",
      img: "https://i.pinimg.com/564x/11/8d/bf/118dbfb6d9493d69b0bb3fdd8164cb27.jpg",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Juguetón",
      img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2w1OWk3c295MTQ5Y2l5anFlNHpqeW5zMHdxNmV0ajN3Z3V5ejl5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/elhmwUMsAUbScKLLzl/giphy.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Dichosos",
      img: "https://media3.giphy.com/media/x5tkvJq9k28s8/giphy.gif?cid=ecf05e47ok7gc0zvczka4ux5foqpiv5jgya7745233pjdc96&ep=v1_gifs_related&rid=giphy.gif&ct=g",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.6 a < 0.7
  [
    {
      position: 1,
      emotion: "Ansioso",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ZiMWl3NXh2eHpob2I4Zm1xNXBxenJnY2Y5NDRhY3hnbThvOHJvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/29SqSyXlyO6WI/giphy.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Aprensivo",
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGljejlscDJlMzU5MHd2c3I5amw3aXF4cG54cjVxcGd5Y3ptbHBsZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2A3ESxHRLjE9kPc1ON/giphy.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Preocupado",
      img: "https://gifdb.com/images/high/sesame-street-kermit-suicide-hanging-from-ceiling-fan-8187gvt1qal25w4c.gif",
      mood: "8) Moderadamente Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Irritado",
      img: "https://media.tenor.com/ilGS4b269RYAAAAC/on-fire.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 5,
      emotion: "Enojado",
      img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanlyeWNrdTVrZWl1Ym12Zjk2ejdhMWszOGZ5YTRzdDMxMXlnNnY3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 6,
      emotion: "Complacido",
      img: "https://ih1.redbubble.net/image.5226118883.3248/raf,360x360,075,t,fafafa:ca443f4786.jpg",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 7,
      emotion: "Centrado",
      img: "https://media.tenor.com/Q9I1LkA0v6QAAAAC/pepe-poli.gif",
      mood: "5) Moderadamente Energética y Positiva",
    },
    {
      position: 8,
      emotion: "Feliz",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBodm4ybzFwNnRkbjZ2NGxpcTJncHQxbXQzZWNmYWw3Nm96ZGIybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/THlB4bsoSA0Cc/giphy.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 9,
      emotion: "Orgulloso",
      img: "https://media.tenor.com/I2QstjF59LEAAAAC/seven-deadly-sins-escanor.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
    {
      position: 10,
      emotion: "Illusionado",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2g2aWozY296dnRsYmcyY2hlcW4xZGU0ZXBmMGZkMjdqZGRncGZ1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/70XY5U7YIYh2w/giphy.gif",
      mood: "2) Moderadamente Energética y Positividad Alta",
    },
  ],

  // >= 0.7 a < 0.8
  [
    {
      position: 1,
      emotion: "Exasperado",
      img: "https://media.tenor.com/vxamgxzaqhwAAAAC/gordon-ramsay-chef-ramsay.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Asustado",
      img: "https://media.tenor.com/Hx3XUdtgAy8AAAAC/afraid-scared.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Enfadado",
      img: "https://media.tenor.com/lTe5PjawzRAAAAAC/furia-intensamente.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Nervioso",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnAyMDlqemgya2oxbndzNDdhcGN2bXRraDBuMWR1bXdjdDFmeXlzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pDdzX4l9jqA80/giphy.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Agitado",
      img: "https://media.tenor.com/NByu_s5MkXwAAAAd/mort-crying.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Enérgico",
      img: "https://i.giphy.com/media/rsf33kKU6WdA4/giphy.webp",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Animado",
      img: "https://i.giphy.com/media/s384SHekNXXqg/giphy.webp",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Emocionado",
      img: "https://media.tenor.com/c_05__3v6zkAAAAC/me-toca.gif",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Optimista",
      img: "https://i.ytimg.com/vi/0JQqMcBSOUs/maxresdefault.jpg",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Entusiasta",
      img: "https://media.tenor.com/pQKpuY8fWVgAAAAC/school-of-rock-jack-black.gif",
      mood: "1) Energética y Positiva",
    },
  ],

  // >= 0.8 a < 0.9
  [
    {
      position: 1,
      emotion: "Desesperado",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGwyanQwajZzdnp5Y21meDU5bmJicDk0OXNtMjBmMDRkMmIwZnZsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SF9Z0shNT07T2/giphy.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Furioso",
      img: "https://media.tenor.com/zaHXmwu5fiYAAAAC/clown-mad.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Frustado",
      img: "https://media.tenor.com/ERRMt_jEhzcAAAAd/tense1983-tense.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Tenso",
      img: "https://media.tenor.com/HHbDUjAOYE0AAAAC/worried-kermit.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Atónito",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa9b7e5c-00f7-4204-a206-4c45cb68db5f/dbrozsg-f6609f00-99e4-4c0d-a962-2690d562695d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhOWI3ZTVjLTAwZjctNDIwNC1hMjA2LTRjNDVjYjY4ZGI1ZlwvZGJyb3pzZy1mNjYwOWYwMC05OWU0LTRjMGQtYTk2Mi0yNjkwZDU2MjY5NWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x53fa6UTyN2osmehky9ooZHXiSdCAeQFFxUUEoOTrlo",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Hiperactivo",
      img: "https://i.pinimg.com/originals/99/dd/04/99dd04b0969fee7c946d18b242cb5e97.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Jovial",
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTZjaDltamNnZzZ5b2wyeWlpMDFtZjJtNTZjMmMwNHJ1b2E5a285ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsX3YMWYzDPjAARfeg/giphy.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Motivado",
      img: "https://steamuserimages-a.akamaihd.net/ugc/965367743354218089/75A741709A38E4D2ADF5C4ADA0CB65C2F3D465F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Inspirado",
      img: "https://media.tenor.com/QAOm7a_ieUgAAAAC/meme-monsters-inc.gif",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Exultante",
      img: "https://www.icegif.com/wp-content/uploads/2023/07/icegif-869.gif",
      mood: "1) Energética y Positiva",
    },
  ],

  // >= 0.9 a <= 1
  [
    {
      position: 1,
      emotion: "Enfurecido",
      img: "https://media.tenor.com/exTZBxFB6iMAAAAC/tyler1-loltyler1.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 2,
      emotion: "Aterrado",
      img: "https://i.pinimg.com/originals/11/9b/d8/119bd8a40a0e4df6dce5695be9ee8bc6.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 3,
      emotion: "Estresado",
      img: "https://media.tenor.com/8LedFyXIYOYAAAAC/pokemon-psyduck.gif",
      mood: "7) Energética y Positividad Baja",
    },
    {
      position: 4,
      emotion: "Inquieto",
      img: "https://scontent.fmty4-1.fna.fbcdn.net/v/t39.30808-6/361917031_762078895917178_8406110203509941321_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6IyUajSP7QoAX-2ChRh&_nc_ht=scontent.fmty4-1.fna&oh=00_AfCnt1iokVzOBq-JCGneGKTKZgXMobwR9gQ4WzTPjh8KLQ&oe=655EE676",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 5,
      emotion: "Impactado",
      img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb20yaGxudmd5cDkxbWRncGVtc3k2dG8zeXpkNTMzbjJ4MmU5ZW1xbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KrLqtbe8PGEDe/giphy.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 6,
      emotion: "Sorprendido",
      img: "https://media.tenor.com/WrT1CQ9Ul4QAAAAC/shaq-hot-wings.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 7,
      emotion: "Encantado",
      img: "https://media.tenor.com/Ox4UiJ-1TIAAAAAC/the-mask-jim-carrey.gif",
      mood: "4) Energética y Positividad Moderada",
    },
    {
      position: 8,
      emotion: "Festivo",
      img: "https://media.tenor.com/6EUQjvG-IrQAAAAC/ganon-ganondorf.gif",
      mood: "1) Energética y Positiva",
    },
    {
      position: 9,
      emotion: "Eufórico",
      img: "https://i.giphy.com/media/Qd7F5NcMFcTio/giphy.webp",
      mood: "1) Energética y Positiva",
    },
    {
      position: 10,
      emotion: "Extasiado",
      img: "https://media.tenor.com/V0Q8WxmzBSUAAAAC/drogo-drogadicto.gif",
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

export const getDanceability = (danceability) => {
  if (danceability) {
    if (danceability > 0.85) {
      return "Altamente Apto para Bailar";
    } else if (danceability > 0.75 && danceability <= 0.85) {
      return "Bueno para Bailar";
    } else if (danceability > 0.65 && danceability <= 0.75) {
      return "Adecuado para Bailar";
    } else if (danceability > 0.55 && danceability <= 0.65) {
      return "Moderadamente Apto para Bailar";
    } else if (danceability > 0.45 && danceability <= 0.55) {
      return "Menos Propicio para Bailar";
    } else if (danceability <= 0.45) {
      return "Bajo para Bailar";
    } else {
      return "N/A";
    }
  }
};

export const getEnergy = (energy) => {
  if (energy) {
    if (energy > 0.9) {
      return "Muy Alta";
    } else if (energy > 0.75 && energy <= 0.9) {
      return "Alta";
    } else if (energy > 0.6 && energy <= 0.75) {
      return "Moderadamente Alta";
    } else if (energy > 0.45 && energy <= 0.6) {
      return "Moderada";
    } else if (energy > 0.3 && energy <= 0.45) {
      return "Moderadamente Baja";
    } else if (energy <= 0.3) {
      return "Baja";
    } else {
      return "N/A";
    }
  }
};

export const getValence = (valence) => {
  if (valence) {
    if (valence > 0.85) {
      return "Muy Positivo";
    } else if (valence > 0.65 && valence <= 0.85) {
      return "Positivo";
    } else if (valence > 0.5 && valence <= 0.65) {
      return "Moderadamente Positivo";
    } else if (valence > 0.35 && valence <= 0.5) {
      return "Neutral";
    } else if (valence > 0.2 && valence <= 0.35) {
      return "Moderadamente Negativo";
    } else if (valence <= 0.2) {
      return "Negativo";
    } else {
      return "N/A";
    }
  }
};

export const getKey = (key) => {
  if (key || key === 0) {
    const keys = [
      "C",
      "C♯/D♭",
      "D",
      "D♯/E♭",
      "E",
      "F",
      "F♯/G♭",
      "G",
      "G♯/A♭",
      "A",
      "A♯/B♭",
      "B",
    ];

    const labels = [
      "Do",
      "Do sostenido/Re bemol",
      "Re",
      "Re sostenido/Mi bemol",
      "Mi",
      "Fa",
      "Fa sostenido/Sol bemol",
      "Sol",
      "Sol sostenido/La bemol",
      "La",
      "La sostenido/Si bemol",
      "Si",
    ];

    return { key: keys[key], text: labels[key] };
  }
};

export const getMode = (mode) => {
  if (!mode && !mode === 0) return "N/A";
  const modes = ["Minor", "Major"];
  return modes[mode];
};

export const getBPM = (time_signature) => {
  if (!time_signature) return null;

  const output = Math.round(time_signature);
  return output;
};

export const getTimeSignature = (time_signature) => {
  if (!time_signature) return "N/A";
  return `${time_signature}/4`;
};
