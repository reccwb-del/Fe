export interface QuizQuestion {
  p: string;
  o: string[];
  correcta: number;
}

export interface DayData {
  dia: number;
  tema: string;
  versiculo: {
    ref: string;
    texto: string;
  };
  oracion: string;
  quiz: QuizQuestion[];
  mision: string;
}

export const days: DayData[] = [
  { dia:1, tema:"La Creación",
    versiculo:{ref:"Génesis 1:1", texto:"En el principio creó Dios los cielos y la tierra."},
    oracion:"Gracias Diosito por crear el sol, la luna, los animalitos y a mí. Te amo. Amén.",
    quiz:[
      {p:"¿Quién creó el mundo?", o:["Dios","Un mago","Nadie"], correcta:0},
      {p:"¿En cuántos días creó Dios el mundo?", o:["3","7","30"], correcta:1},
      {p:"¿Qué creó Dios primero?", o:["Los cielos y la tierra","Los autos","Las galletas"], correcta:0}
    ],
    mision:"Sal afuera y dale gracias a Dios por algo bonito que veas en la naturaleza."
  },
  { dia:2, tema:"Noé y el arca",
    versiculo:{ref:"Génesis 6:22", texto:"Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó."},
    oracion:"Diosito, ayúdame a obedecer como Noé. Amén.",
    quiz:[
      {p:"¿Qué construyó Noé?", o:["Una casa","Un arca","Un castillo"], correcta:1},
      {p:"¿Qué metió Noé en el arca?", o:["Animales","Juguetes","Dulces"], correcta:0},
      {p:"¿Qué apareció después del diluvio?", o:["Un arcoíris","Una nube","Un dragón"], correcta:0}
    ],
    mision:"Dibuja un arcoíris y regálaselo a alguien de tu familia."
  },
  { dia:3, tema:"Abraham, amigo de Dios",
    versiculo:{ref:"Génesis 15:6", texto:"Y creyó a Jehová, y le fue contado por justicia."},
    oracion:"Diosito, quiero confiar en ti como Abraham. Amén.",
    quiz:[
      {p:"¿Cómo se llamaba el amigo de Dios?", o:["Abraham","Pedro","Juan"], correcta:0},
      {p:"¿En qué confió Abraham?", o:["En Dios","En el dinero","En sí mismo"], correcta:0},
      {p:"¿Cómo se llamaba la esposa de Abraham?", o:["María","Sara","Ana"], correcta:1}
    ],
    mision:"Cuéntale a un amiguito que Dios siempre cumple sus promesas."
  },
  { dia:4, tema:"Moisés y el mar Rojo",
    versiculo:{ref:"Éxodo 14:14", texto:"Jehová peleará por vosotros, y vosotros estaréis tranquilos."},
    oracion:"Diosito, sé que tú peleas por mí. Amén.",
    quiz:[
      {p:"¿Quién abrió el mar?", o:["Moisés con el poder de Dios","Un pez","El viento"], correcta:0},
      {p:"¿De qué país salió el pueblo?", o:["Egipto","Brasil","España"], correcta:0},
      {p:"¿Qué usaba Moisés en la mano?", o:["Una vara","Una espada","Un libro"], correcta:0}
    ],
    mision:"Cuando tengas miedo hoy, di: '¡Dios pelea por mí!'."
  },
  { dia:5, tema:"David y Goliat",
    versiculo:{ref:"1 Samuel 17:47", texto:"De Jehová es la batalla."},
    oracion:"Diosito, dame la valentía de David. Amén.",
    quiz:[
      {p:"¿A quién venció David?", o:["A un gigante","A un león","A un rey"], correcta:0},
      {p:"¿Con qué venció David?", o:["Una honda y una piedra","Una espada","Un arco"], correcta:0},
      {p:"¿Qué cuidaba David?", o:["Ovejas","Vacas","Gallinas"], correcta:0}
    ],
    mision:"Haz algo valiente hoy: saluda a alguien nuevo."
  },
  { dia:6, tema:"Daniel en el foso de los leones",
    versiculo:{ref:"Daniel 6:22", texto:"Mi Dios envió su ángel, el cual cerró la boca de los leones."},
    oracion:"Diosito, cuídame como cuidaste a Daniel. Amén.",
    quiz:[
      {p:"¿Dónde echaron a Daniel?", o:["Foso de leones","Río","Cueva"], correcta:0},
      {p:"¿Quién cerró la boca de los leones?", o:["Un ángel","Un guardia","El rey"], correcta:0},
      {p:"¿Qué hacía Daniel todos los días?", o:["Orar","Cantar","Bailar"], correcta:0}
    ],
    mision:"Ora hoy 3 veces, como Daniel."
  },
  { dia:7, tema:"Jonás y el gran pez",
    versiculo:{ref:"Jonás 2:2", texto:"Invoqué en mi angustia a Jehová, y él me oyó."},
    oracion:"Diosito, cuando me equivoque ayúdame a obedecer. Amén.",
    quiz:[
      {p:"¿Qué se tragó a Jonás?", o:["Un gran pez","Una ballena de juguete","Un tiburón"], correcta:0},
      {p:"¿Cuántos días estuvo dentro?", o:["3","10","30"], correcta:0},
      {p:"¿A qué ciudad debía ir Jonás?", o:["Nínive","Jerusalén","Belén"], correcta:0}
    ],
    mision:"Pide perdón hoy si has hecho algo mal."
  },
  { dia:8, tema:"El nacimiento de Jesús",
    versiculo:{ref:"Lucas 2:11", texto:"Os ha nacido hoy un Salvador, que es Cristo el Señor."},
    oracion:"Gracias Diosito por enviar a Jesús. Amén.",
    quiz:[
      {p:"¿Dónde nació Jesús?", o:["Belén","Nazaret","Roma"], correcta:0},
      {p:"¿Cómo se llamaba su mamá?", o:["María","Ana","Sara"], correcta:0},
      {p:"¿Dónde lo acostaron?", o:["En un pesebre","En una cuna","En una cama"], correcta:0}
    ],
    mision:"Canta una canción a Jesús hoy."
  },
  { dia:9, tema:"Jesús niño en el templo",
    versiculo:{ref:"Lucas 2:52", texto:"Jesús crecía en sabiduría y en estatura."},
    oracion:"Diosito, ayúdame a crecer como Jesús. Amén.",
    quiz:[
      {p:"¿Dónde encontraron a Jesús niño?", o:["En el templo","En el mercado","En el río"], correcta:0},
      {p:"¿Cuántos años tenía?", o:["12","5","20"], correcta:0},
      {p:"¿Qué hacía allí?", o:["Hablaba con maestros","Jugaba","Dormía"], correcta:0}
    ],
    mision:"Aprende un versículo nuevo hoy."
  },
  { dia:10, tema:"El bautismo de Jesús",
    versiculo:{ref:"Mateo 3:17", texto:"Este es mi Hijo amado, en quien tengo complacencia."},
    oracion:"Diosito, gracias porque también soy tu hijo amado. Amén.",
    quiz:[
      {p:"¿Quién bautizó a Jesús?", o:["Juan","Pedro","Pablo"], correcta:0},
      {p:"¿En qué río?", o:["Jordán","Nilo","Amazonas"], correcta:0},
      {p:"¿Qué bajó del cielo?", o:["Una paloma","Un águila","Una nube"], correcta:0}
    ],
    mision:"Dile a alguien: '¡Dios te ama!'."
  },
  { dia:11, tema:"Jesús calma la tormenta",
    versiculo:{ref:"Marcos 4:39", texto:"Calla, enmudece. Y cesó el viento."},
    oracion:"Diosito, calma mis miedos. Amén.",
    quiz:[
      {p:"¿Qué calmó Jesús?", o:["La tormenta","Un león","Un fuego"], correcta:0},
      {p:"¿Dónde estaban?", o:["En una barca","En la playa","En casa"], correcta:0},
      {p:"¿Qué sintieron los discípulos?", o:["Miedo","Hambre","Sueño"], correcta:0}
    ],
    mision:"Cuando sientas miedo hoy, respira y di: 'Jesús está conmigo'."
  },
  { dia:12, tema:"Jesús alimenta a 5000",
    versiculo:{ref:"Juan 6:11", texto:"Y tomó Jesús los panes, y habiendo dado gracias, los repartió."},
    oracion:"Gracias Diosito por la comida. Amén.",
    quiz:[
      {p:"¿Cuántos panes había?", o:["5","2","10"], correcta:0},
      {p:"¿Cuántos peces?", o:["2","5","7"], correcta:0},
      {p:"¿A cuántos alimentó?", o:["5000","100","50"], correcta:0}
    ],
    mision:"Comparte tu merienda con alguien hoy."
  },
  { dia:13, tema:"El buen pastor",
    versiculo:{ref:"Juan 10:11", texto:"Yo soy el buen pastor."},
    oracion:"Jesús, gracias por cuidarme como un pastor. Amén.",
    quiz:[
      {p:"¿Quién es el buen pastor?", o:["Jesús","Moisés","David"], correcta:0},
      {p:"¿A quién cuida?", o:["A sus ovejas","A los lobos","A nadie"], correcta:0},
      {p:"¿Las ovejas son…?", o:["Nosotros","Los animales","Las nubes"], correcta:0}
    ],
    mision:"Cuida hoy de un hermanito o mascota."
  },
  { dia:14, tema:"El hijo pródigo",
    versiculo:{ref:"Lucas 15:20", texto:"Cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia."},
    oracion:"Diosito, gracias porque siempre me perdonas. Amén.",
    quiz:[
      {p:"¿Qué hizo el papá al ver al hijo?", o:["Lo abrazó","Lo regañó","Lo ignoró"], correcta:0},
      {p:"¿Quién es el papá en la historia?", o:["Dios","Un rey","Un maestro"], correcta:0},
      {p:"¿El hijo pidió…?", o:["Perdón","Dinero","Comida"], correcta:0}
    ],
    mision:"Pide perdón a alguien y dale un abrazo."
  },
  { dia:15, tema:"El buen samaritano",
    versiculo:{ref:"Lucas 10:27", texto:"Amarás a tu prójimo como a ti mismo."},
    oracion:"Diosito, ayúdame a amar a los demás. Amén.",
    quiz:[
      {p:"¿Quién ayudó al herido?", o:["El samaritano","Un sacerdote","Un rey"], correcta:0},
      {p:"¿Qué nos enseña?", o:["A ayudar","A pelear","A correr"], correcta:0},
      {p:"¿A quién debemos amar?", o:["Al prójimo","Solo a amigos","A nadie"], correcta:0}
    ],
    mision:"Ayuda hoy a alguien que lo necesite."
  },
  { dia:16, tema:"Zaqueo",
    versiculo:{ref:"Lucas 19:10", texto:"El Hijo del Hombre vino a buscar y a salvar lo que se había perdido."},
    oracion:"Jesús, gracias por buscarme siempre. Amén.",
    quiz:[
      {p:"¿A qué subió Zaqueo?", o:["A un árbol","A una casa","A un caballo"], correcta:0},
      {p:"¿Por qué subió?", o:["Era bajito","Tenía calor","Le gustaba"], correcta:0},
      {p:"¿Qué hizo después?", o:["Devolvió lo robado","Se escondió","Lloró"], correcta:0}
    ],
    mision:"Devuelve algo que hayas tomado sin permiso."
  },
  { dia:17, tema:"Jesús bendice a los niños",
    versiculo:{ref:"Mateo 19:14", texto:"Dejad a los niños venir a mí."},
    oracion:"Gracias Jesús porque me amas. Amén.",
    quiz:[
      {p:"¿A quiénes bendijo Jesús?", o:["A los niños","A los reyes","A los soldados"], correcta:0},
      {p:"¿Qué dijo Jesús?", o:["Dejen venir a los niños","Váyanse","Silencio"], correcta:0},
      {p:"¿Cómo nos ve Jesús?", o:["Importantes","Pequeños","Molestos"], correcta:0}
    ],
    mision:"Dile a un amigo que Jesús lo ama."
  },
  { dia:18, tema:"La oración del Padre Nuestro",
    versiculo:{ref:"Mateo 6:9", texto:"Padre nuestro que estás en los cielos."},
    oracion:"Padre nuestro, santificado sea tu nombre. Amén.",
    quiz:[
      {p:"¿Quién enseñó esta oración?", o:["Jesús","Moisés","Pedro"], correcta:0},
      {p:"¿A quién oramos?", o:["Al Padre","Al sol","A los ángeles"], correcta:0},
      {p:"¿Dónde está el Padre?", o:["En los cielos","En el mar","En la luna"], correcta:0}
    ],
    mision:"Reza el Padre Nuestro con tu familia."
  },
  { dia:19, tema:"La última cena",
    versiculo:{ref:"Lucas 22:19", texto:"Haced esto en memoria de mí."},
    oracion:"Jesús, gracias por darte por mí. Amén.",
    quiz:[
      {p:"¿Qué compartió Jesús?", o:["Pan y vino","Frutas","Pescado"], correcta:0},
      {p:"¿Con quiénes?", o:["Sus discípulos","Los romanos","Sus papás"], correcta:0},
      {p:"¿Cuántos discípulos eran?", o:["12","5","20"], correcta:0}
    ],
    mision:"Comparte una comida con alguien hoy."
  },
  { dia:20, tema:"Jesús resucita",
    versiculo:{ref:"Mateo 28:6", texto:"No está aquí, pues ha resucitado."},
    oracion:"¡Gracias Jesús porque estás vivo! Amén.",
    quiz:[
      {p:"¿Qué pasó al tercer día?", o:["Resucitó","Durmió","Se fue"], correcta:0},
      {p:"¿Quién movió la piedra?", o:["Un ángel","Un soldado","María"], correcta:0},
      {p:"¿Está Jesús vivo hoy?", o:["Sí","No","Tal vez"], correcta:0}
    ],
    mision:"Cuenta a alguien: '¡Jesús está vivo!'."
  },
  { dia:21, tema:"El Espíritu Santo",
    versiculo:{ref:"Hechos 1:8", texto:"Recibiréis poder cuando haya venido sobre vosotros el Espíritu Santo."},
    oracion:"Espíritu Santo, lléname de tu amor. Amén.",
    quiz:[
      {p:"¿Quién nos da poder?", o:["El Espíritu Santo","La tele","El dinero"], correcta:0},
      {p:"¿Cómo apareció?", o:["Como fuego","Como agua","Como viento solo"], correcta:0},
      {p:"¿Para qué nos da poder?", o:["Para hablar de Jesús","Para pelear","Para correr"], correcta:0}
    ],
    mision:"Pide al Espíritu Santo que te ayude hoy."
  },
  { dia:22, tema:"El amor de Dios",
    versiculo:{ref:"Juan 3:16", texto:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito."},
    oracion:"Diosito, gracias por amarme tanto. Amén.",
    quiz:[
      {p:"¿A quién amó Dios?", o:["Al mundo","Solo a unos","A nadie"], correcta:0},
      {p:"¿A quién envió?", o:["A su Hijo","A un ángel","A un rey"], correcta:0},
      {p:"¿Cuánto te ama Dios?", o:["Muchísimo","Poco","Nada"], correcta:0}
    ],
    mision:"Dile 'te amo' a tu familia."
  },
  { dia:23, tema:"El perdón",
    versiculo:{ref:"Efesios 4:32", texto:"Sed benignos unos con otros, perdonándoos."},
    oracion:"Diosito, ayúdame a perdonar. Amén.",
    quiz:[
      {p:"¿Qué debemos hacer?", o:["Perdonar","Pelear","Gritar"], correcta:0},
      {p:"¿Por qué perdonamos?", o:["Dios nos perdona","Por miedo","Por premio"], correcta:0},
      {p:"¿Cómo nos sentimos al perdonar?", o:["Felices","Tristes","Enojados"], correcta:0}
    ],
    mision:"Perdona a alguien hoy y dale un abrazo."
  },
  { dia:24, tema:"La gratitud",
    versiculo:{ref:"1 Tesalonicenses 5:18", texto:"Dad gracias en todo."},
    oracion:"Gracias Diosito por todo lo que me das. Amén.",
    quiz:[
      {p:"¿Cuándo damos gracias?", o:["En todo","Solo en fiestas","Nunca"], correcta:0},
      {p:"¿A quién?", o:["A Dios","A nadie","A juguetes"], correcta:0},
      {p:"¿Por qué?", o:["Él nos cuida","Por obligación","Por costumbre"], correcta:0}
    ],
    mision:"Haz una lista de 5 cosas por las que das gracias."
  },
  { dia:25, tema:"La valentía",
    versiculo:{ref:"Josué 1:9", texto:"Esfuérzate y sé valiente."},
    oracion:"Diosito, hazme valiente. Amén.",
    quiz:[
      {p:"¿Qué dijo Dios a Josué?", o:["Sé valiente","Ten miedo","Corre"], correcta:0},
      {p:"¿Quién está con nosotros?", o:["Dios","Nadie","El miedo"], correcta:0},
      {p:"¿Debemos temer?", o:["No","Sí","A veces"], correcta:0}
    ],
    mision:"Haz algo bueno hoy aunque te dé un poquito de miedo."
  },
  { dia:26, tema:"La amistad",
    versiculo:{ref:"Proverbios 17:17", texto:"En todo tiempo ama el amigo."},
    oracion:"Gracias Diosito por mis amigos. Amén.",
    quiz:[
      {p:"¿Cuándo ama el amigo?", o:["En todo tiempo","A veces","Nunca"], correcta:0},
      {p:"¿Quién es nuestro mejor amigo?", o:["Jesús","La tele","El dinero"], correcta:0},
      {p:"¿Cómo tratamos a los amigos?", o:["Con amor","Con gritos","Mal"], correcta:0}
    ],
    mision:"Llama o abraza a un amigo hoy."
  },
  { dia:27, tema:"La obediencia",
    versiculo:{ref:"Efesios 6:1", texto:"Hijos, obedeced a vuestros padres en el Señor."},
    oracion:"Diosito, ayúdame a obedecer. Amén.",
    quiz:[
      {p:"¿A quién obedecemos?", o:["A los papás","A nadie","A juguetes"], correcta:0},
      {p:"¿Por qué?", o:["Agrada a Dios","Por miedo","Por premio"], correcta:0},
      {p:"¿Es fácil siempre?", o:["No, pero Dios ayuda","Sí","Nunca"], correcta:0}
    ],
    mision:"Obedece a tus papás a la primera hoy."
  },
  { dia:28, tema:"La fe",
    versiculo:{ref:"Hebreos 11:1", texto:"La fe es la certeza de lo que se espera."},
    oracion:"Diosito, aumenta mi fe. Amén.",
    quiz:[
      {p:"¿Qué es la fe?", o:["Confiar en Dios","Tener miedo","Dudar"], correcta:0},
      {p:"¿Vemos a Dios?", o:["No, pero existe","Sí siempre","No existe"], correcta:0},
      {p:"¿La fe agrada a…?", o:["Dios","Nadie","Solo a mamá"], correcta:0}
    ],
    mision:"Cuéntale a Dios algo que necesites con fe."
  },
  { dia:29, tema:"La esperanza",
    versiculo:{ref:"Romanos 15:13", texto:"El Dios de esperanza os llene de todo gozo."},
    oracion:"Diosito, llena mi corazón de esperanza. Amén.",
    quiz:[
      {p:"¿Quién da esperanza?", o:["Dios","La suerte","Nadie"], correcta:0},
      {p:"¿Con qué nos llena?", o:["Gozo y paz","Tristeza","Miedo"], correcta:0},
      {p:"¿Qué es esperanza?", o:["Confiar en lo bueno","Llorar","Pelear"], correcta:0}
    ],
    mision:"Sonríe hoy a 3 personas."
  },
  { dia:30, tema:"¡Aventurero campeón!",
    versiculo:{ref:"Filipenses 4:13", texto:"Todo lo puedo en Cristo que me fortalece."},
    oracion:"Gracias Diosito por estos 30 días contigo. Te amo por siempre. Amén.",
    quiz:[
      {p:"¿En quién todo lo podemos?", o:["En Cristo","En nosotros","En nadie"], correcta:0},
      {p:"¿Quién nos fortalece?", o:["Jesús","La comida","El sueño"], correcta:0},
      {p:"¿Eres aventurero de la fe?", o:["¡Sí!","No","Tal vez"], correcta:0}
    ],
    mision:"Celebra con tu familia: ¡terminaste tu aventura de 30 días! 🎉"
  }
];
