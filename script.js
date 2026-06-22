// 1. ÁRBOL DE DECISIONES ENFOCADO 100% EN ECOSISTEMA IPHONE (4 MÓDULOS DE APPLE)
const arbolTriage = {
    inicio: {
        pregunta: "Selecciona el bloque de síntomas primario reportado en el iPhone:",
        opciones: true,
        Rutas: {
            "🔌 Encendido o Carga": "apple_enc_01",
            "📱 Pantalla o Táctil": "apple_pant_01",
            "🔊 Audio o Micrófono": "apple_aud_01",
            "📸 Cámara o Face ID": "apple_cam_01"
        }
    },

    // ---- ESPECIALIDAD: ENERGÍA Y CARGA ----
    apple_enc_01: {
        pregunta: "Anomalía de Arranque: ¿El iPhone se encuentra atrapado en un bucle infinito mostrando el logo de la manzana sin llegar a iniciar el sistema?",
        si: "FIN_BOOTLOOP",
        no: "apple_enc_02"
    },
    apple_enc_02: {
        pregunta: "Anomalía de Celda: En Ajustes ➔ Batería ➔ Salud de la Batería, ¿la 'Capacidad Máxima' figura por debajo del 80% o se visualiza la alerta de 'Mantenimiento'?",
        si: "FIN_BATERIA_DEGRADADA",
        no: "apple_enc_03"
    },
    apple_enc_03: {
        pregunta: "Anomalía Térmica Eléctrica: ¿El dispositivo no reacciona al cable ni a la carga inalámbrica, pero recalienta intensamente en la zona posterior al conectarlo?",
        si: "FIN_PLACA_MADRE",
        no: "FIN_FLEX_CARGA"
    },

    // ---- ESPECIALIDAD: PANTALLA Y DIGITALIZADOR ----
    apple_pant_01: {
        pregunta: "Anomalía de Retroiluminación: ¿La pantalla permanece completamente negra pero el iPhone emite sonidos, vibra o es reconocido al conectarse a una PC?",
        si: "FIN_PANTALLA_NEGRA",
        no: "apple_pant_02"
    },
    apple_pant_02: {
        pregunta: "Anomalía de Panel: ¿El cristal externo está trizado o la pantalla proyecta líneas verticales verdes o blancas brillantes constantes?",
        si: "FIN_OLED_ROTO",
        no: "apple_pant_03"
    },
    apple_pant_03: {
        pregunta: "Anomalía Conductiva: ¿La pantalla no tiene roturas visibles pero el táctil ignora tus dedos o ejecuta 'toques fantasmas' de manera autónoma?",
        si: "FIN_TOUCH_IC",
        no: "FIN_SOFTWARE"
    },

    // ---- ESPECIALIDAD: AUDIO Y ACÚSTICA ----
    apple_aud_01: {
        pregunta: "Anomalía de Códec: Durante una llamada telefónica regular o en una nota de voz de WhatsApp, ¿el botón de 'Altavoz' se bloquea en color gris y queda inutilizable?",
        si: "FIN_CODEC_AUDIO",
        no: "apple_aud_02"
    },
    apple_aud_02: {
        pregunta: "Anomalía de Captación: ¿Tus notas de voz se escuchan con un siseo estático intolerable (ruido frito) o los demás usuarios indican que te oyes extremadamente lejos?",
        si: "FIN_MICROFONO_IPHONE",
        no: "FIN_SOFTWARE"
    },

    // ---- ESPECIALIDAD: CÁMARA Y BIOMETRÍA (MÓDULO AGREGADO SEGÚN SOPORTE OFICIAL) ----
    apple_cam_01: {
        pregunta: "Anomalía de Estabilizador: ¿Al abrir la aplicación de la cámara la pantalla se queda completamente en negro o la imagen vibra de forma mecánica impidiendo enfocar?",
        si: "FIN_MODULO_CAMARA",
        no: "apple_cam_02"
    },
    apple_cam_02: {
        pregunta: "Anomalía Biométrica: ¿El sistema te muestra un mensaje explícito de 'Face ID no disponible' inmediatamente después de un impacto severo o contacto con humedad?",
        si: "FIN_FACE_ID",
        no: "FIN_SOFTWARE"
    }
};

// TEXTOS Y NOTAS TÉCNICAS EXTENDIDAS (RESPALDADO POR INGENIERÍA)
const resultadosDiagnostico = {
    "FIN_BOOTLOOP": {
        titulo: "Bucle de Arranque del Sistema [ERR-SYS-BOOT]",
        nota: "Causado típicamente por saturación absoluta del almacenamiento NAND Flash o por filtración de líquido en el flex del sensor de proximidad superior (Face ID). Requiere herramientas de software profesional (DFU) o micro-soldadura limpia."
    },
    "FIN_BATERIA_DEGRADADA": {
        titulo: "Degradación Crítica de Celda de Batería [ERR-BATT-01]",
        nota: "La batería ha agotado su vida útil molecular. Para mantener la transparencia y evitar el mensaje de 'Pieza Desconocida' en iOS, el laboratorio seleccionado debe trasplantar el chip BMS original de tu batería antigua a la celda nueva mediante soldadura por puntos."
    },
    "FIN_FLEX_CARGA": {
        titulo: "Daño Estructural en Puerto de Carga Dock [ERR-CHRG-02]",
        nota: "Los pines internos de comunicación sufrieron desgaste físico o sulfatación. Se requiere el reemplazo modular del flex inferior de carga, asegurando componentes con certificación MFi para preservar la velocidad de transferencia."
    },
    "FIN_PLACA_MADRE": {
        titulo: "Cortocircuito en IC de Carga Tristar/Hydra [ERR-PMIC-03]",
        nota: "Daño severo en los circuitos integrados de regulación eléctrica debido al uso de cargadores de auto de baja calidad o cables sin certificación Apple. Requiere reparación microscópica en placa base e intervención con multímetro."
    },
    "FIN_PANTALLA_NEGRA": {
        titulo: "Falla en Circuito de Retroiluminación (Backlight) [ERR-BACK-04]",
        nota: "El procesador y el sistema están operativos, pero la placa no envía voltaje al panel de luz. Un técnico calificado debe verificar si es una desconexión por impacto antes de cotizar un cambio de pantalla completo."
    },
    "FIN_OLED_ROTO": {
        titulo: "Fisura Interna de Matriz Gráfica OLED [ERR-DISP-05]",
        nota: "Daño físico irreversible en el panel orgánico. El reemplazo requiere un programador especial (como la herramienta QianLi) para clonar el número de serie de la pantalla original a la nueva, preservando la función TrueTone."
    },
    "FIN_TOUCH_IC": {
        titulo: "Línea de Datos del Integrado de Táctil Interrumpida [ERR-TCH-06]",
        nota: "Muy común ante micro-torsiones en el chasis del iPhone. Si el módulo de pantalla es original, el problema radica en la placa, requiriendo un reballing o puenteo en el microchip controlador de touch."
    },
    "FIN_SOFTWARE": {
        titulo: "Inestabilidad Crítica del Kernel de iOS [ERR-SOFT-07]",
        nota: "Fallo lógico puro. El hardware no presenta anomalías. El dispositivo debe ser flasheado con la última firma digital IPSW de Apple a través de Apple Devices o iTunes para restablecer los sectores daños."
    },
    "FIN_CODEC_AUDIO": {
        titulo: "Fisura Estructural en el IC Códec de Audio [ERR-AUD-08]",
        nota: "Dolor crónico clásico en hardware de iPhone. El chip pierde contacto con la placa debido a caídas acumuladas. Requiere reconstrucción de micro-pistas soldadas bajo microscopio. Un taller convencional no puede resolverlo."
    },
    "FIN_MICROFONO_IPHONE": {
        titulo: "Falla de Captación en Micrófono Periférico [ERR-MIC-09]",
        nota: "La membrana acústica inferior está saturada de detritos mecánicos o dañada por líquidos. Se soluciona mediante un mantenimiento ultrasónico profundo o sustitución del flex secundario de audio."
    },
    "FIN_MODULO_CAMARA": {
        titulo: "Falla del Mecanismo Estabilizador Óptico (OIS) [ERR-CAM-10]",
        nota: "El electroimán del estabilizador físico de la cámara sufrió daños irreparables por vibración extrema. Requiere un reemplazo del módulo de la cámara trasera conservando el número de calibración oficial de fábrica."
    },
    "FIN_FACE_ID": {
        titulo: "Desvinculación del Sensor Biométrico Dot Projector [ERR-FID-11]",
        nota: "El chip de seguridad biométrica sufrió una fractura o sulfatación por humedad. Requiere micro-soldadura especializada de reballing en el flex de lectura superior para conservar la pieza original enlazada a la placa del CPU."
    }
};

// BASE DE DATOS MIRAFLORES
const baseTecnicos = [
    { 
        nombre: "Wilber Apple Specialist", 
        distancia: "A 2 cuadras del Parque Kennedy", 
        direccion: "Av. Larco 456, Oficina 302, Miraflores", 
        telefono: "51944294086", 
        rating: "4.9 ★",
        badges: ["Microsoldadura Nivel 3", "Garantía Escrita 6m", "Repuestos Certificados"],
        tiempoEstimado: "1 - 2 horas"
    },
    { 
        nombre: "iFixit Certified Lab", 
        distancia: "Altura de la cuadra 5 de Av. Larco", 
        direccion: "Calle San Martín 123, Miraflores", 
        telefono: "51944294086", 
        rating: "4.8 ★",
        badges: ["Especialista TrueTone", "Herramientas Oficiales Apple", "Diagnóstico por Software"],
        tiempoEstimado: "Enfoque Express (<45 min)"
    },
    { 
        nombre: "Fix Center Premium", 
        distancia: "A 5 minutos del Ovalo de Miraflores", 
        direccion: "Av. Benavides 1820, Miraflores", 
        telefono: "51944294086", 
        rating: "4.6 ★",
        badges: ["Laboratorio Abierto", "Cambios de Batería Express", "Stock Inmediato"],
        tiempoEstimado: "1 hora promedio"
    }
];

let nodoActual = "inicio";
let historialPasos = [];

// ELEMENTOS DEL DOM
const inicioContainer = document.getElementById("inicio-container");
const quizContainer = document.getElementById("quiz-container");
const preguntaTexto = document.getElementById("pregunta-texto");
const botonesGroup = document.querySelector(".botones-group");
const btnRegresar = document.getElementById("btn-regresar");
const resultadoContainer = document.getElementById("resultado-container");
const diagnosticoFinal = document.getElementById("diagnostico-final");
const notaTecnicaTexto = document.getElementById("nota-tecnica-texto");
const tecnicosSection = document.getElementById("tecnicos-section");
const listaTecnicos = document.getElementById("lista-tecnicos");

function comenzarFlujo() {
    inicioContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    nodoActual = "inicio";
    historialPasos = [];
    mostrarPregunta();
}

function mostrarPregunta() {
    const nodo = arbolTriage[nodoActual];
    preguntaTexto.innerText = nodo.pregunta;
    botonesGroup.innerHTML = "";

    if (nodo.opciones) {
        btnRegresar.classList.add("hidden");
        Object.keys(nodo.Rutas).forEach(especialidad => {
            const boton = document.createElement("button");
            boton.className = "btn-especialidad";
            boton.innerText = RichmondCleanLabel(especialidad);
            boton.onclick = () => {
                historialPasos.push(nodoActual);
                nodoActual = nodo.Rutas[especialidad];
                mostrarPregunta();
            };
            botonesGroup.appendChild(boton);
        });
    } else {
        btnRegresar.classList.remove("hidden");
        botonesGroup.innerHTML = `
            <button id="btn-si" class="btn btn-si">SÍ</button>
            <button id="btn-no" class="btn btn-no">NO</button>
        `;
        document.getElementById("btn-si").onclick = () => {
            procesarRespuesta("si");
        };
        document.getElementById("btn-no").onclick = () => {
            procesarRespuesta("no");
        };
    }
}

function RichmondCleanLabel(text) {
    return text;
}

function procesarRespuesta(opcion) {
    let siguienteNodo = arbolTriage[nodoActual][opcion];
    historialPasos.push(nodoActual);

    if (siguienteNodo.startsWith("FIN_")) {
        finalizarTriage(siguienteNodo);
    } else {
        nodoActual = siguienteNodo;
        mostrarPregunta();
    }
}

function goBack() {
    if (historialPasos.length > 0) {
        nodoActual = historialPasos.pop();
        resultadoContainer.classList.add("hidden");
        tecnicosSection.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        mostrarPregunta();
    }
}

function finalizarTriage(idResultado) {
    const objetoResultado = resultadosDiagnostico[idResultado];
    
    quizContainer.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");
    
    diagnosticoFinal.innerText = objetoResultado.titulo;
    notaTecnicaTexto.innerText = objetoResultado.nota;
    
    tecnicosSection.classList.remove("hidden");
    renderizarTecnicos(objetoResultado.titulo);
}

function renderizarTecnicos(diagnostico) {
    listaTecnicos.innerHTML = "";
    
    baseTecnicos.forEach(tecnico => {
        const mensajeWhatsApp = encodeURIComponent(`Hola ${tecnico.nombre}, utilicé el Diagnóstico Digital de TheFixManager. El reporte estimado de mi iPhone arrojó el fallo: ${diagnostico}. ¿Cuentan con las herramientas de microsoldadura o repuestos modulares para este código y cuál es su disponibilidad técnica?`);
        const urlWhatsapp = `https://api.whatsapp.com/send?phone=${tecnico.telefono}&text=${mensajeWhatsApp}`;

        let badgesHtml = tecnico.badges.map(b => `<span class="badge-tech">${b}</span>`).join("");

        const tarjeta = document.createElement("div");
        tarjeta.className = "card-tecnico";
        tarjeta.innerHTML = `
            <div>
                <div class="card-tecnico-header">
                    <h3>${tecnico.nombre}</h3>
                    <span class="rating-badge">${tecnico.rating}</span>
                </div>
                <p class="distancia">📍 ${tecnico.distancia}</p>
                <p class="meta-info"><strong>Dirección:</strong> ${tecnico.direccion}</p>
                <p class="meta-info"><strong>Tiempo Estimado:</strong> ${tecnico.tiempoEstimado}</p>
                <div class="badges-container">
                    ${badgesHtml}
                </div>
            </div>
            <a href="${urlWhatsapp}" target="_blank" class="btn-whatsapp">Agendar Reparación Certificada</a>
        `;
        listaTecnicos.appendChild(tarjeta);
    });
}

function reiniciarTriage() {
    nodoActual = "inicio";
    historialPasos = [];
    inicioContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultadoContainer.classList.add("hidden");
    tecnicosSection.classList.add("hidden");
}