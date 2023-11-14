const conversation = {
      npc: "Gustavo",
      first: "first",
      NPC_options: {
        first: {
          text: "Buenos días, en que le puedo colaborar",
          pointers: ["a_optA", "a_optB" ,"a_optC"],
        },
        no_entrevista: {
            text: "No me gustan las preguntas y me cuentro ocupada. Vuelva otro día",
            pointers: ["b_optA", "b_optB", "b_optC"],
        },
        no_insista: {
          text: "No insista, retírese de mi establecimiento",
          pointers: ["entendido"],
        },
        me_indico: {
          text: "Inicialmente me indico que era una encuesta, por lo cual entiendo que son preguntas, no estoy interesada, buen día.",
          pointers: ["entendido"],
        },
        nevera: {
          text: "Necesito una nevera nueva de Coca-Cola ya que la que tengo consume mucha energía. Voy a llamar al vendedor para verificar. Me indico que es mentira.",
          pointers: ["entendido"]
        },
        finalidad_a: {
          text: "¿Y esto para que me sirve?",
          pointers: ["para_optA", "para_optB", "para_optC"]
        },
        finalidad_b: {
          text: "¿Y esto para que me sirve?",
          pointers: ["para_optD", "para_optE", "para_optF"]
        },
        demora: {
          text: "¿Y Cuanto se demora? espero no sea mucho",
          pointers: ["cuanto_demoraA", "cuanto_demoraB"]
        },
        seguro: {
          text: "¿Esta seguro de esta información y aumentaré mis ventas? No estoy del todo segura.",
          pointers: ["despedirse"]
        },
        de_acuerdo: {
          text: "De acuerdo, puede continuar solo si no me realiza ninguna pregunta.",
          pointers: ["despedirse"]
        },
        no_preguntas: {
          text: "Desde que no me pregunté nada puede continuar",
          pointers: ["despedirse"]
        },
        no_fotos: {
          text: "Lo puedo permitir, pero no tome fotografías",
          pointers: ["si_fotos", "sin_fotos"]
        },
        bueno_siga: {
          text: "Bueno si, siga.",
          pointers: ["continuar"]
        },
        bueno_continue: {
          text: "Bueno continue, no demoré",
          pointers: ["despedirse"]
        },
        no_quiero: {
          text: "No quiero que una empresa le venda información de mi tienda a otra. Muchas gracias, retírese",
          pointers: ["despedirse"]
        },
        no_creo: {
          text: "No creó que con esto obtenga mejores ventas, ya han vendió con esta información y continuó igual. Retírese o llamo a la Policía.",
          pointers: ["despedirse"]
        },
        de_acuerdoF: {
          text: "De acuerdo siga, pero no me pregunté o tome fotos, no me gustan.",
          pointers: ["si_fotos", "sin_fotos"]
        },
        positive : {
            text: "Por supuesto sigue y realiza lo que debes hacer, cualquier duda o inquietud con mucho gusto me comentas y te ayudo",
            pointers: ["agradecerin", "despedirse"],
        },
        adelante : {
            text: 'Un gusto adelante!',
            pointers: ["continuar", "despedirse"],
        },
        negatrive: {
          text: "No me gustan las preguntas y me cuentro ocupada. Vuelva otro día",
          pointers: ["entendido", "despedirse"],
        },
        adios: {
            text: 'Adios!',
            pointer: ['despedirse']
        }
      },
      user_options: {
        a_optA: {
          text: "Buenos días, espero se encuentre bien. Vengo de Premise a realizar unas encuesta y validar su punto de venta para un estudio de mercado que estamos realizando, ¿me permite ingresar?",
          emote: 'mad',
          pointer: 'no_entrevista'
        },
        a_optB: {
            text: "Buenos días, espero tenga un excelente día y buenas ventas hoy, vengo de Premise. Anteriormente puede que lo hayamos visitado, nuestra empresa se dedica a realizar estudios de mercado para las diferentes marcas y empresas, el día de hoy nos encontramos en el sector realizando esta labor ¿me permite ingresar?",
            emote: 'surprised',
            pointer: 'finalidad_a'
        },
        a_optC: {
          text: "Buenos días, tenga usted un excelente día. ¿Me permite ingresar? vengo de Premise, venimos realizando un estudio de mercado para todas las tiendas del sector, con el fin de que usted sea más visible ante las empresas o marcas, para que puedan tomar decisiones a favor de usted y sus clientes",
          emote: 'standar',
          pointer: 'finalidad_b'
        },
        b_optA: {
          text: "Le agradezco su apoyo y me pueda comprender que no me voy a demorar mucho, mis actividades van a ser 80% visual sin ninguna molestia a usted y sus clientes",
          emote: 'mad',
          pointer: 'no_insista'
        },
        b_optB: {
            text: "Permítame le explico, mi trabajo es 90% visual y no me tardaré mucho en el establecimiento. Este estudio de mercado le permite a las grandes empresas a que su punto de venta sea más visible y pueda conseguir más ventas.",
            emote: 'mad',
            pointer: 'me_indico'
        },
        b_optC: {
          text: "Si me permite ingresas Premise puede hacer visible  su establecimiento ante Coca-Cola - Femsa, con el fin de que pueda brindarle beneficios como promociones o neveras si su negocio lo requiere.",
          emote: 'standarB',
          pointer: 'nevera'
        },
        entendido: {
          text: "Entiendo disculpe la molestia.",
          emote: 'mad',
          event: 'reset'
        },
        solicitud: {
            text: 'Estamos haciendo un estudio de mercado para mejorar su ventas, quisiera saber si puedo pasar a relalizar el estudio en su tienda?',
            emote: 'surprised',
            pointer: 'positive'
        },
        para_optA: {
          text: "Premise se dedica a hacer visible el canal tradicional ante las grandes empresas, esto le ayuda a que las diferentes empresas puedan llegar a lugares donde no tienen presencia, lanzar productos o incluso lanzar beneficios para usted y sus clientes si así lo deciden ellos. Nos encargamos de hacer visible su PDV",
          emote: "standar",
          pointer: "demora"
        },
        para_optB: {
          text: "Premise le permite llegar a más clientes con ayuda de las grandes empresas, por medio de promociones, descuentos o beneficios, lo que resultaría para ustedes una mayor cantidad de venta y más clientes felices.",
          pointer: "seguro",
          emote: "standar"
        },
        para_optC: {
          text: "Esto le permite a las grandes empresas saber con que productos cuenta de su marca o de la competencia, con el fin de tomar decisiones que puedan favorecer a usted y sus clientes. Solamente me tocaré unos pocos minutos para validar sin preguntarle o molestarle en algún momento.",
          pointer: "de_acuerdo",
          emote: "standarB"
        },
        para_optD: {
          text: "Por medio de las fotos y preguntas Premise puede entregarle esta información a las grandes compañías con el fin de que pueda tomar excelentes decisiones que le favorezcan a usted y sus clientes en un futuro cercano.",
          pointer: "no_quiero",
          emote: "mad"
        },
        para_optE: {
          text: "Le sirve a usted y sus clientes para que en un futuro alguna de las grandes empresas pueda brindarle mejores beneficios y productos, para que usted obtenga mejores ventas",
          pointer: "no_creo",
          emote: "mad"
        },
        para_optF: {
          text: "Premise se dedica a hacer visible el canal tradicional ante las grandes empresas, esto le ayuda a que las diferentes empresas puedan llegar a lugares donde no tienen presencia, lanzar productos o incluso lanzar beneficios para usted y sus clientes si así lo deciden ellos. Nos encargamos de hacer visible su PDV",
          pointer: "de_acuerdoF",
          emote: "standar"
        },
        cuanto_demoraA: {
          text: "Mi trabajo es 90% visual, lo que hago es validar las referencias de las diferentes marcas y registrarlas en la aplicación, al finalizar tomaré unas fotografías para asegurar la calidad de mi trabajo.",
          pointer: "no_preguntas",
          emote: "mad"
        },
        cuanto_demoraB: {
          text: "Mi trabajo es 80% visual, lo que realizo es validar las referencias de las diferentes marcas y registrarlas en la aplicación, al finalizar le haré unas pequeñas preguntas y tomaré unas fotografías para asegurar la calidad de mi trabajo",
          pointer: "no_fotos",
          emote: "standarB"
        },
        si_fotos: {
          text: "Las fotografías son necesarias ya que con ellas garantizamos la calidad de nuestro trabajo y la veracidad de la información que registramos",
          pointer: "bueno_siga",
          emote: "positive"
        },
        sin_fotos: {
          text: "No se preocupe, no realizaré ninguna pregunta y las fotografías son opcionales, por lo cual espero no demorarme mucho tiempo. Muchas gracias",
          pointer: "bueno_continue"
        },
        agradecerin: {
            text: 'Agradezco la oportunidad una vez termine mi reocorrido le dejaré un obsequio de la empresa, gracias!',
            emote: 'surprised',
            pointer: 'adelante'
        },
        continuar: {
            text: 'Gracias!, permiso.',
            event: 'nextScene',
        },
        despedirse: {
          text: "Vale muchas gracias.",
          event: 'reset'
        },
        TERMINAR: {
            text: '***REINICIAR CONVERSACION VOLVER A INTENTARLO***',
            event: 'reset'
        }
  },
  };

  export default conversation