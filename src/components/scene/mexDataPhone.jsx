export const formData = [
  {
    id: 1,
    titulo: "¿A qué canal corresponde este punto de venta?",
    respuesta_correcta: ["Tienda"],
    arrayRespuestas: ["Cafetería", "Comida Rápida", "Fonda", "Tienda", "Viñatería"],
    tipo: "multiseleccion",
    segmento: "punto",
  },
  {
    id: 2,
    titulo: "Qué tipo de servicio ofrece este punto de venta?",
    respuesta_correcta: ["El cliente toma sus productos"],
    arrayRespuestas: ["El cliente toma sus productos", "Opera a través de una ventanilla", "Opera a través de un servicio de mesa con meseros", "Otro", "Ninguno"],
    tipo: "multiseleccion",
    segmento: "punto",
  },
  {
      id: 3,
      titulo: "¿Cuáles de las siguientes categorías de productos se venden en este punto de venta?",
      respuesta_correcta: ["Cerveza", "Sopas", "Cigarrillos", "Servilletas", "Pedialites", "Analgésicos", "Remedios para el resfriado/tos"],
      arrayRespuestas: ["Alimentos para bebés","Bebidas sin alcohol listas para beber"," Cerveza","Sopas","Papel higienico","Protección femenina", "Cigarrillos", "Servilletas", "Servitoallas", "Antiácidos", "Pedialites", "Preservativos", "Analgésicos", "Remedios para el resfriado/tos", "Ninguna de las anteriores"],
      tipo: "multiseleccion",
      segmento: "producto",
    },
    {
      id: 4,
      titulo: "¿Qué tipos de subcategorías de productos se venden en este punto de venta?",
      respuesta_correcta: ["Agua embotellada", "Mantequilla", "Dulces", "Refrescos carbonatados"," Goma de mascar", "Chiles", "Chocolates", "Detergente para ropa", "Fibras", "Condimentos"],
      arrayRespuestas: ["Talco para adultos","Fórmula para bebés","Toallitas húmedas para bebés","Blanqueador","Desodorante corporal","Agua embotellada","Mantequilla","Dulces","Refrescos carbonatados","Goma de mascar","Chiles","Chocolates","Detergente para ropa","Fibras","Condimentos"],
      tipo: "multiseleccion",
      segmento: "producto",
    },
    {
      id: 5,
      titulo: "¿Qué tipos de segmentos de productos se venden en este punto de venta?",
      respuesta_correcta: ["Pan empacado", "Tortillas", "Margarinas", "Dulces", "Atún", "Café soluble", "Crists/Chips", "Bebidas Isotónicas", "Bebidas Energéticas", "Leche Natural", "Leche Saborizada", "Avena", "Frijoles Secos", "Puro de tomate", "Aguas Saborizadas", "Jugos"],
      arrayRespuestas: ["Pan empacado", "Tortillas", "Margarinas", "Dulces", "Atún", "Café soluble", "Harina de Maíz Precocida", "Crists/Chips", "Harina de Trigo", "Bebidas Isotónicas", "Bebidas Energéticas", "Leche Natural", "Leche Saborizada", "Avena", "Frijoles Secos", "Puro de Tomate", "Aguas Saborizadas", "Jugos"],
      segmento: "segmento",
      tipo: "producto"
    },
    {
      id: 6,
      titulo: "Este establecimiento vende aguas?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },      
    {
      id: 7,
      titulo: "¿Que marcas de Agua se venden en este establecimiento",
      respuesta_correcta: ["Bonafont aguafiel"],
      arrayRespuestas: ["Canada Dry", "Schweppes", "Agua Pureza", "Aguafiel", "Aqua", "Bonafont aguafiel"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },      
    {
      id: 8,
      titulo: "Este establecimiento vende refrescos?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },      
    {
      id: 9,
      titulo: "Que marcas de Refrescos se venden en este establecimiento",
      respuesta_correcta: ["7up", "Pepsi", "Sprite", "Squirt"],
      arrayRespuestas: ["Otros", "7up", "Barrilitos", "Big Cola", "Canada Dry", "Jarritos", "Lulu", "Manzanita Sol", "Mexicana", "Mirinda", "Pato Pascual", "Pepsi", "Red Cola", "Sangria Casera", "Sangria Señorial", "Schweppes", "Sidral Aga", "Sidral Mundet", "Sprite", "Squirt"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },            
    {
      id: 13,
      titulo: "Hay enfriadores en este punto de venta",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },      
    {
      id: 14,
      titulo: "¿Cuantos enfriadores hay en este punto de venta?",
      respuesta_correcta: ["2"],
      arrayRespuestas: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      segmento: "enfriadores",
      tipo: "multiseleccion"
    },      
    {
      id: 15,
      titulo: "Enfriador #1 ¿El enfriador que reportas está patrocinado?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 16,
      titulo: "¿Enfriador #1 ¿Cuantas puertas tiene este enfriador?",
      respuesta_correcta: [""],
      arrayRespuestas: ["1", "2", "3", "4", "Más de 5"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 17,
      titulo: "Enfriador #1 ¿Que marca aparece en el enfriador?",
      respuesta_correcta: ["Pepsi"],
      arrayRespuestas: ["Coca Cola", "Jarritos", "Pepsi", "Red Cola", "Bonafont", "Peñafiel", "Boing", "Del Valle", "Powerade", "Lala"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 18,
      titulo: "Enfriador #1¿El enfriador que estás reportando está conectado a la electricidad?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 19,
      titulo: "Enfriador #1 ¿En este enfriador patrocinado hay algún producto de la competencia o otros productos que no corresponden?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 20,
      titulo: "Enfriador #1 ¿Cuantas caras de otros productos de la competencia y/u otros productos que no pertenecen hay en este refrigerador?",
      respuesta_correcta: ["5 o menos"],
      arrayRespuestas: ["5 o menos", "6 - 12", "12 - 24", "Más de 24"],
      segmento: "enfriador_a",
      tipo: "multiseleccion"
    },      
    {
      id: 21,
      titulo: "Enfriador #1: Toma una foto del enfriador que estas reportando",
      respuesta_correcta: ["imgEnfriador"],
      arrayRespuestas: ["imgEnfriador"],
      segmento: "img_enfriador",
      tipo: "foto"
    },            
    {
      id: 22,
      titulo: "Enfriador #2 ¿El enfriador que reportas está patrocinado?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_b",
      tipo: "multiseleccion"
    },      
    {
      id: 23,
      titulo: "Enfriador #2 ¿Cuantas puertas tiene este enfriador?",
      respuesta_correcta: [""],
      arrayRespuestas: [],
      segmento: "enfriador_b",
      tipo: "multiseleccion"
    },      
    {
      id: 24,
      titulo: "Enfriador #2 ¿Que marca aparece en el enfriador?",
      respuesta_correcta: ["Pepsi"],
      arrayRespuestas: ["Coca Cola", "Jarritos", "Pepsi", "Red Cola", "Bonafont", "Peñafiel", "Boing", "Del Valle", "Powerade", "Lala"],
      segmento: "enfriador_b",
      tipo: "multiseleccion"
    },      
    {
      id: 25,
      titulo: "Enfriador #2 ¿El enfriador que estás reportando está conectado a la electricidad?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_b",
      tipo:"multiseleccion"
    },      
    {
      id: 26,
      titulo: "Enfriador #2 ¿En este enfriador patrocinado hay algún producto de la competencia o otros productos que no corresponden?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "enfriador_b",
      tipo: "multiseleccion"
    },      
    {
      id: 27,
      titulo: "Enfriador #2 ¿Cuantas caras de otros productos de la competencia y/u otros productos que no pertenecen hay en este refrigerador?",
      respuesta_correcta: ["5 o menos"],
      arrayRespuestas: ["5 o menos", "6 - 12", "12 - 24", "Más de 24"],
      segmento: "enfriador_b",
      tipo: "multiseleccion"
    },      
    {
      id: 28,
      titulo: "Enfriador #2: Toma una foto del enfriador que estas reportando",
      respuesta_correcta: ["imgPepsi"],
      arrayRespuestas: ["imgPepsi"],
      segmento: "imgPepsi",
      tipo: "foto"
    },            
    {
      id: 29,
      titulo: "Este punto de venta vende Detergente para Ropa en los estantes?",
      respuesta_correcta: ["No"],
      arrayRespuestas: ["Si", "No"],
      segmento: "detergentes",
      tipo: "multiseleccion"
    },
    {
      id: 30,
      titulo: "Pregunta al encargado del establecimiento: ¿Vende detergente para la ropa?",
      respuesta_correcta: ["Si"],
      arrayRespuestas: ["Si", "No"],
      segmento: "detergentes",
      tipo: "multiseleccion"
    },            
    {
      id: 31,
      titulo: "¿Que marcas de detergente para ropa se venden en este punto de venta?",
      respuesta_correcta: ["Roma", "Ariel", "Ace", "Salvo Multisos"],
      arrayRespuestas: ["Vide", "Arm & Hammer", "Vel Rosita", "Blanca Nieves", "Carisma", "Persil", "Viva", "Pinol", "Xpress", "Ace", "Ariel", "Salvo Multisos", "Doña Blanca", "Foca", "Puro Sol", "Roma", "Tepeyac", "1.2.3", "Mas"],
      segmento: "detergentes",
      tipo: "multiseleccion"
    },
    {
      id: 40,
      titulo: "Toma una foto de la secciòn de productos de limpieza.",
      respuesta_correcta: ["imgDetergente"],
      arrayRespuestas: ["imgDetergente"],
      segmento: "imgDetergente",
      tipo: "foto"
    },      
];
