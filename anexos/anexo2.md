# ANEXO 2: ARQUITECTURA TECNOLÓGICA DE INTEROPERABILIDAD Y MÓDULO AMFE

El presente anexo detalla la arquitectura de solución técnica implementada para el **Sistema Federado de Datos Sanitarios de NNA**. La arquitectura utiliza la plataforma de intercambio de datos **X-Road** como bus federado de seguridad y servicios desarrollados en **JavaScript / LoopBack** para la orquestación lógica del Módulo AMFE.

---

### Esquema Integrado de Arquitectura (X-Road + LoopBack API + RENAPER)

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" width="100%" height="auto" style="background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1; padding:15px;">
  
  <!-- TITULO -->
  <text x="450" y="30" text-anchor="middle" fill="#0f172a" font-size="18" font-weight="bold" font-family="sans-serif">ARQUITECTURA DE INTEROPERABILIDAD FEDERADA Y MÓDULO AMFE</text>
  <text x="450" y="50" text-anchor="middle" fill="#64748b" font-size="12" font-family="sans-serif">Implementación mediante Plataforma X-Road, APIs LoopBack (Node.js) y Estándar HL7 FHIR</text>

  <!-- ZONA DE CAPA DE APLICACIÓN Y CLIENTES -->
  <rect x="30" y="80" width="840" height="90" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="45" y="102" fill="#475569" font-size="11" font-weight="bold" font-family="sans-serif">CAPA DE CONSUMO Y PORTALES (CLIENTES)</text>
  
  <rect x="60" y="115" width="230" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="175" y="142" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold" font-family="sans-serif">Portal Mi Argentina / Saludes</text>

  <rect x="335" y="115" width="230" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="450" y="142" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold" font-family="sans-serif">Sistemas HCE Efectores Públicos</text>

  <rect x="610" y="115" width="230" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="725" y="142" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold" font-family="sans-serif">Sistemas Privados / Prepagas</text>

  <!-- CAPA BUS DE INTEROPERABILIDAD X-ROAD -->
  <rect x="30" y="195" width="840" height="110" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
  <text x="450" y="222" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold" font-family="sans-serif">BUS DE INTEROPERABILIDAD FEDERADO (X-ROAD INFRASTRUCTURE)</text>
  <text x="450" y="240" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Túneles Seguros mTLS • Firma Digital de Mensajes • Servidores de Seguridad (Security Servers) • No Repudio</text>

  <rect x="60" y="252" width="230" height="40" rx="4" fill="#334155" stroke="#0ea5e9" stroke-width="1"/>
  <text x="175" y="277" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">X-Road Security Server (Client)</text>

  <rect x="335" y="252" width="230" height="40" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
  <text x="450" y="277" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold" font-family="sans-serif">X-Road Central Server (Gobernanza)</text>

  <rect x="610" y="252" width="230" height="40" rx="4" fill="#334155" stroke="#0ea5e9" stroke-width="1"/>
  <text x="725" y="277" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">X-Road Security Server (Producer)</text>

  <!-- CAPA ORQUESTADORA DE LÓGICA Y AMFE (LOOPBACK API) -->
  <rect x="30" y="330" width="840" height="140" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="450" y="355" text-anchor="middle" fill="#047857" font-size="15" font-weight="bold" font-family="sans-serif">CAPA DE ORQUESTACIÓN Y MOTOR DE REGLAS (API LOOPBACK / JAVASCRIPT)</text>
  
  <!-- Módulo AMFE dentro de Loopback -->
  <rect x="60" y="370" width="360" height="85" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
  <text x="240" y="392" text-anchor="middle" fill="#065f46" font-size="13" font-weight="bold" font-family="sans-serif">Módulo AMFE (Control ABAC)</text>
  <text x="240" y="412" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Filtro de Visibilidad según Edad (Art. 26 CCyC)</text>
  <text x="240" y="427" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Ocultamiento de Salud Sexual / Mental (13-17 años)</text>
  <text x="240" y="442" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Gestión de Consentimiento Dinámico del Menor</text>

  <!-- Módulo FHIR / Nomencladores -->
  <rect x="480" y="370" width="360" height="85" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
  <text x="660" y="392" text-anchor="middle" fill="#065f46" font-size="13" font-weight="bold" font-family="sans-serif">Loopback REST / FHIR Adapter</text>
  <text x="660" y="412" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Mapeo a Recursos HL7 FHIR (Patient, Encounter)</text>
  <text x="660" y="427" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Homologación Semántica con SNOMED CT</text>
  <text x="660" y="442" text-anchor="middle" fill="#334155" font-size="10" font-family="sans-serif">• Generación de Vistas Temporales Cifradas</text>

  <!-- PROVEEDORES EXTERNOS Y BASES DE DATOS -->
  <rect x="60" y="500" width="360" height="85" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
  <text x="240" y="525" text-anchor="middle" fill="#92400e" font-size="13" font-weight="bold" font-family="sans-serif">API RENAPER (WebService)</text>
  <text x="240" y="547" text-anchor="middle" fill="#451a03" font-size="10" font-family="sans-serif">Validación de Identidad, Filiación y Patria Potestad</text>
  <text x="240" y="565" text-anchor="middle" fill="#b45309" font-size="10" font-weight="bold" font-family="sans-serif">Consulta en Tiempo Real previo a respuesta AMFE</text>

  <rect x="480" y="500" width="360" height="85" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="2"/>
  <text x="660" y="525" text-anchor="middle" fill="#3730a3" font-size="13" font-weight="bold" font-family="sans-serif">Nodos Pediátricos Locales (HCE)</text>
  <text x="660" y="547" text-anchor="middle" fill="#1e1b4b" font-size="10" font-family="sans-serif">Bases de Datos Locales (PostgreSQL / MongoDB / FHIR Server)</text>
  <text x="660" y="565" text-anchor="middle" fill="#4338ca" font-size="10" font-weight="bold" font-family="sans-serif">Guarda Física Descentralizada de las Historias Clínicas</text>

  <!-- FLECHAS DE CONEXIÓN -->
  <!-- Clientes -> X-Road -->
  <line x1="175" y1="160" x2="175" y2="252" stroke="#64748b" stroke-width="2"/>
  <line x1="450" y1="160" x2="450" y2="252" stroke="#64748b" stroke-width="2"/>
  <line x1="725" y1="160" x2="725" y2="252" stroke="#64748b" stroke-width="2"/>

  <!-- X-Road -> LoopBack -->
  <line x1="240" y1="292" x2="240" y2="370" stroke="#0ea5e9" stroke-width="2.5"/>
  <line x1="660" y1="292" x2="660" y2="370" stroke="#0ea5e9" stroke-width="2.5"/>

  <!-- LoopBack -> RENAPER y Nodos -->
  <line x1="240" y1="455" x2="240" y2="500" stroke="#d97706" stroke-width="2" stroke-dasharray="3"/>
  <line x1="660" y1="455" x2="660" y2="500" stroke="#6366f1" stroke-width="2"/>

</svg>

---

### Explicación de los Componentes Técnicos

1. **Capa del Bus de Interoperabilidad (X-Road):**
   * **Servidores de Seguridad (Security Servers):** Se instalan como nodos fronterizos en cada efector o jurisdicción. Garantizan la autenticación mutua (mTLS), el cifrado de canal, el estampado de tiempo (*timestamping*) y la firma digital de cada mensaje de salud que circula por la red.
   * **Gobernanza y Servidor Central:** Define el catálogo unificado de servicios y las listas de acceso autorizadas entre instituciones públicas y privadas.

2. **Capa Orquestadora y API Core (Node.js / LoopBack):**
   * **Framework LoopBack:** Permite construir rápidamente APIs REST bien estructuradas, conectando modelos de datos con los adaptadores FHIR y exponiendo servicios consumibles de forma estandarizada a través de X-Road.
   * **Lógica del Módulo AMFE:** Implementado dentro de la lógica de negocio de la API. Evalúa los atributos del usuario (*Control de Acceso Basado en Atributos - ABAC*) y aplica la lógica del Artículo 26 del CCyC:
     * Si la persona es un tutor solicitando datos de un menor de **0 a 12 años**, valida con RENAPER y entrega el registro completo.
     * Si el paciente tiene entre **13 y 15 años**, filtra los JSON/FHIR resultantes para remover observaciones o consultas etiquetadas con códigos SNOMED CT sensibles.
     * Si el paciente tiene **16 o 17 años**, bloquea la consulta parental salvo autorización expresa del propio adolescente.

3. **Integración con RENAPER y Nodos Locales:**
   * La API LoopBack actúa como mediador: antes de consultar la Historia Clínica al nodo local, hace una llamada de verificación contra el WebService de RENAPER para corroborar en tiempo real la relación parento-filial del solicitante.
