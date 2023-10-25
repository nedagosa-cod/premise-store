const conversation = {
      npc: "Gustavo",
      first: "first",
      NPC_options: {
        first: {
          text: "Bienvenido a Smart Sport como se encuentra el dia de hoy?",
          pointers: ["saludar", "badSaludo" ,"despedirse"],
        },
        second: {
            text: "Igualmente, en que puedo ayudarte?",
            pointers: ["solicitud", "despedirse"],
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
          text: "No me gusta aceptar ese tipo de solicitudes puede servir para muchas cosas que me afecten",
          pointers: ["entendido", "despedirse"],
        },
        adios: {
            text: 'Adios!',
            pointer: ['TERMINAR']
        }
      },
      user_options: {
        saludar: {
          text: "Buen día, un placer saludarlo!",
          emote: 'standarB',
          pointer: 'second'
        },
        badSaludo: {
            text: "Hola será que me puede ayudar con un estudio de mercado.",
            emote: 'mad',
            pointer: 'negatrive'
        },
        entendido: {
          text: "Entiendo disculpe la molestia.",
          event: 'reset'
        },
        solicitud: {
            text: 'Estamos haciendo un estudio de mercado para mejorar su ventas, quisiera saber si puedo pasar a relalizar el estudio en su tienda?',
            emote: 'surprised',
            pointer: 'positive'
        },
        agradecerin: {
            text: 'Agradezco la oportunidad una vez termine mi reocorrido le dejaré un obsequio de la empresa, gracias!',
            emote: 'standar',
            pointer: 'adelante'
        },
        continuar: {
            text: 'Gracias!, permiso.',
            event: 'nextScene'
        },
        despedirse: {
          text: "Muchas gracias, adios!",
          event: 'reset'
        },
        TERMINAR: {
            text: '***REINICIAR CONVERSACION VOLVER A INTENTARLO***',
            event: 'reset'
        }
  },
  };

  export default conversation