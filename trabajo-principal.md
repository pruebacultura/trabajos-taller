# TECNICATURA UNIVERSITARIA EN GESTIÓN DE POLÍTICAS PÚBLICAS
## TALLER DE PRÁCTICA I

---

### PORTADA

* **INSTITUCIÓN:** Universidad Nacional de Cuyo — Facultad de Ciencias Políticas y Sociales
* **CARRERA:** Tecnicatura Universitaria en Gestión de Políticas Públicas
* **PROYECTO:** SISTEMA FEDERADO DE DATOS SANITARIOS DE NIÑOS, NIÑAS Y ADOLESCENTES: GOBERNANZA DIGITAL, AUTONOMÍA PROGRESIVA E INTEROPERABILIDAD FEDERAL (2026-2030)
* **PROFESORA:** Cátedra de Taller de Práctica I
* **ESTUDIANTES:** Equipo de Investigación en Políticas Públicas y Transformación Digital

---

### 1. PROBLEMÁTICA: ARQUITECTURA DE FEDERACIÓN DE DATOS SANITARIOS Y GOBERNANZA DE DERECHOS EN NIÑOS, NIÑAS Y ADOLESCENTES

#### 1.1 Sujeto
El sujeto estatal responsable de la dirección, regulación y ejecución estratégica de esta política pública es de carácter interjurisdiccional. Esta estructura ubica al **Ministerio de Salud de la Nación** como autoridad central de aplicación en los términos de la Ley 27.706 de Historia Clínica Electrónica (https://www.boletinoficial.gob.ar/detalleAviso/primera/282707/20230316). Esta institución articula la dimensión federal con los Ministerios de Salud de las 23 provincias y la Ciudad Autónoma de Buenos Aires a través del **Consejo Federal de Salud (COFESA)**.

En forma concomitante, actúan como organismos corresponsables de la gobernanza la **Agencia de Acceso a la Información Pública (AAIP)** —en su condición de autoridad de control de la Ley 25.326 de Protección de Datos Personales (https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm)— y la **Secretaría Nacional de Niñez, Adolescencia y Familia (SECRETARÍA DE NIÑEZ, ADOLESCENCIA Y FAMILIA)** bajo la órbita del Ministerio de Capital Humano conforme a la Ley 26.061 (https://servicios.infoleg.gob.ar/infolegInternet/anexos/110000-114999/110778/norma.htm). Ambos organismos ejercen la fiscalización sustantiva sobre el cumplimiento del Interés Superior del Niño y la salvaguarda incondicional de los derechos personalísimos en los entornos digitales.

#### 1.2 Elementos: Materia, Sector y Territorio
* **Materia:** La gobernanza pública de datos sanitarios, la arquitectura computacional federada y la interoperabilidad técnica y semántica de las Historias Clínicas Electrónicas (HCE). Este entramado tecnológico se encuentra subordinado al resguardo de la privacidad de los datos sensibles de salud y a la garantía del principio de autonomía progresiva dispuesto en la legislación civil sustantiva.
* **Sector:** Comprende a la totalidad de los niños, niñas y adolescentes (NNA) de 0 a 17 años inscritos como usuarios en los subsistemas público, de la seguridad social (obras sociales) y privado (prepagas) de la República Argentina. La intervención contempla la dinámica prestacional en los tres niveles de atención médica y la mediación legal que ejercen los representantes parentales o tutores en interacción con los equipos de salud.
* **Territorio:** El espacio geográfico descentralizado de la República Argentina, abarcando la articulación de los sistemas sanitarios provinciales y municipales mediante nodos informáticos interoperables.

---

### 2. ESTADO DEL ARTE

#### 2.1 Caracterización del Sector Objetivo
La caracterización del sector exige analizar la graduación etaria y la capacidad de ejercicio de las personas menores de 18 años dentro del sistema de salud. La reforma introducida por el Código Civil y Comercial de la Nación (CCyC) en su Artículo 26 (https://servicios.infoleg.gob.ar/infolegInternet/anexos/235000-239999/235975/norma.htm#2) abandonó el paradigma de la incapacidad absoluta para adoptar la doctrina internacional de la **autonomía progresiva**.

| Franja Etaria | Categoría Jurídica (Art. 26 CCyC) | Alcance del Ejercicio de Derechos en Salud | Asistencia Parental y Confidencialidad |
| :--- | :--- | :--- | :--- |
| **0 a 12 años** | Menor simple de edad | Representación legal obligatoria de progenitores o tutores para todo acto médico. | Consentimiento por representación. Conserva el derecho a ser oído y participar según su madurez. |
| **13 a 15 años** | Adolescente (Etapa inicial) | Capacidad autónoma para consentir tratamientos no invasivos ni de riesgo. | Presunción legal de aptitud para estudios simples. Tratamientos invasivos exigen consentimiento asistido de progenitores. |
| **16 a 17 años** | Adolescente (Equiparación a adulto) | Plena capacidad para decidir sobre el cuidado del propio cuerpo. | Es considerado como un adulto para las decisiones de salud. Plena confidencialidad frente a terceros. |

La rigidez de las plataformas informáticas de salud vigentes entra en conflicto con esta escala gradual. La mayoría de las HCE responden a una lógica binaria: el paciente es mayor de edad y gestiona su perfil, o es menor de edad y el control recae en sus representantes legales. Esta simplificación técnica vulnera la confidencialidad médica de adolescentes de entre 13 y 17 años. Al consultar por salud sexual y reproductiva, salud mental o consumos problemáticos, la información se sincroniza automáticamente en los portales familiares que administran sus padres, inhibiendo la concurrencia oportuna de los jóvenes a los centros de salud por temor a la pérdida de intimidad.

#### 2.2 Mapeo de Políticas Públicas y Marco Normativo
El ordenamiento jurídico argentino ofrece un marco normativo tutelar compuesto por leyes especiales:
* **Ley 25.326 de Protección de Datos Personales (https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm):** Define a los datos de salud como *datos sensibles*, exigiendo interpretación restrictiva y prohibiendo la cesión a terceros ajenos a la prestación médica.
* **Ley 26.529 de Derechos del Paciente (https://servicios.infoleg.gob.ar/infolegInternet/anexos/160000-164999/160432/norma.htm):** Consagra la autonomía de la voluntad, el trato digno y la confidencialidad de la documentación clínica.
* **Ley 26.061 de Protección Integral de NNA (https://servicios.infoleg.gob.ar/infolegInternet/anexos/110000-114999/110778/norma.htm):** Establece la primacía del Interés Superior del Niño como la máxima satisfacción, integral y simultánea de sus derechos.
* **Ley 27.706 de Historia Clínica Electrónica (https://www.boletinoficial.gob.ar/detalleAviso/primera/282707/20230316):** Crea el Programa Federal Único de Informatización y Digitalización de las Historias Clínicas.

Proyectos como la Historia de Salud Integrada (HSI - https://www.argentina.gob.ar/salud/digital/hsi) a nivel nacional, o sistemas provinciales, representan avances significativos. Sin embargo, carecen de motores informáticos de reglas dinámicas capaces de restringir o habilitar permisos de visualización en función de las transformaciones etarias del usuario.

---

### 3. PAUTAS DEL PROYECTO

#### 3.1 Fundamentos
El proyecto busca armonizar la transformación digital sanitaria con los estándares de Derechos Humanos (Art. 75 inc. 22 CN). Un repositorio centralizado que concentre la totalidad de las historias clínicas infantojuveniles del país representaría un riesgo institucional desproporcionado de ciberataques y perfilamiento digital.

Por el contrario, el modelo federado garantiza que la guarda física del registro sanitario permanezca en el nodo asistencial de origen. La interoperabilidad se logra a través de un **Bus Federal de Interoperabilidad** bajo el estándar **HL7 FHIR**. Este mecanismo consulta la información en tiempo real y la transfiere temporalmente tras validar la solicitud mediante un **Módulo de Autonomía Progresiva y Consentimiento Dinámico (AMFE)**.

#### 3.2 Antecedentes

| Sector / Iniciativa Sanitarias | Adaptación a Autonomía Progresiva | Modalidad de Interoperabilidad | Vacíos y Brechas de Gobernanza |
| :--- | :--- | :--- | :--- |
| **Plataforma HSI (Nación)** | Bajo. Gestión binaria de permisos de acceso parental. | Estándar HL7 FHIR en etapa de expansión territorial. | Ausencia de mecanismos algorítmicos para ocultar registros confidenciales de adolescentes. |
| **Sistemas Provinciales** | Medio. Alta tasa de cobertura de historias electrónicas. | Interconexión interna jurisdiccional y con CUS. | Accesos parentales irrestrictos a perfiles de mayores de 13 años por deficiencias de filtrado. |
| **Efectores Privados y Prepagas** | Bajo. Portales de autoconsulta con foco administrativo. | APIs propietarias con bajo nivel de integración abierta. | Subordinación total de la cuenta del adolescente a la titularidad económica del afiliado adulto. |

#### 3.3 Diseño Metodológico (Modelo Relacional de las 4D de Emilio Graglia)
Se aplica la metodología de Emilio Graglia organizando la intervención en cuatro fases:
1. **Dirección:** Define la orientación política, priorizando los derechos del nicho social (NNA) en las políticas informáticas de salud.
2. **Diseño:** Formula y evalúa las alternativas técnicas e institucionales, ponderando su factibilidad mediante matrices relacionales.
3. **Desempeño:** Planifica la ejecución del bus federado coordinando a los subsistemas mediante el COFESA.
4. **Desarrollo:** Evalúa el impacto y la legitimidad social de la política en términos de protección de derechos.

---

### 4. DIAGNÓSTICO (SEGÚN MARCO TEÓRICO DE EMILIO GRAGLIA)

El diagnóstico se construye diferenciando las carencias del nicho social de los problemas del sistema estatal:

#### A. Carencias percibidas por el nicho social (Necesidades Sociales):
1. **Pérdida de intimidad y temor a la exposición:** Los adolescentes (13 a 17 años) sufren la vulneración de su privacidad médica en atenciones sensibles (salud sexual, mental), ya que sus registros son expuestos a sus progenitores en los portales familiares. Esto genera temor y el consecuente alejamiento o postergación de la atención médica.
2. **Inseguridad y falta de control sobre los propios datos:** Existe una carencia de autonomía en los adolescentes respecto al destino de su información de salud sensible, al no contar con herramientas para auditar quién accede a su historial ni expresar su consentimiento sobre prestaciones específicas.
3. **Fragmentación y discontinuidad asistencial:** Las familias sufren la falta de un historial médico unificado al trasladarse entre provincias o subsistemas (público, obras sociales, prepagas), obligándolos a repetir estudios, sufrir demoras diagnósticas y enfrentar trámites burocráticos.
4. **Vulnerabilidad ante ciberriesgos en la infancia:** Carencia de garantías de ciberseguridad sobre la guarda de la información pediátrica sensible, exponiendo a menores a riesgos de filtración masiva y perfilamiento de datos.

#### B. Obstáculos del sistema estatal / instituciones (Problemas Públicos):
1. **Incompatibilidad de las HCE con el régimen de Autonomía Progresiva:** Sistemas informáticos rígidos que operan con esquemas binarios (mayor/menor) e ignoran la graduación legal fijada en el Art. 26 del CCyC (https://servicios.infoleg.gob.ar/infolegInternet/anexos/235000-239999/235975/norma.htm#2) y la Ley 26.529 (https://servicios.infoleg.gob.ar/infolegInternet/anexos/160000-164999/160432/norma.htm).
2. **Incompatibilidad e inoperabilidad del ecosistema de software sanitario:** Fragmentación tecnológica y ausencia de una red de interoperabilidad federada (HL7 FHIR / SNOMED CT) interconectada a nivel nacional.
3. **Ausencia de validación digital de la responsabilidad parental:** Falta de integración informática en tiempo real con el RENAPER (https://www.argentina.gob.ar/interior/renaper) para verificar algorítmicamente la filiación y patria potestad de quienes solicitan acceso a los datos de un menor.

---

### 5. NECESIDADES Y PROBLEMAS PRIORIZADOS

#### 5.1 Definición de Necesidades Priorizadas (Carencias del Nicho)
* **N1 (Vulneración de confidencialidad en adolescentes):** Carencia de resguardo de la privacidad de los adolescentes (13 a 17 años) en la consulta sobre temas sensibles, provocando distanciamiento del sistema de salud.
* **N2 (Carencia de autonomía y control de datos):** Carencia de mecanismos para que el adolescente audite quién accede a su historial médico y gestione su consentimiento.
* **N3 (Discontinuidad del historial clínico):** Carencia de un registro médico único y accesible que acompañe al paciente entre efectores y jurisdicciones.
* **N4 (Vulnerabilidad ante ciberriesgos en la infancia):** Carencia de garantías de seguridad en la guarda de datos pediátricos para evitar filtraciones y uso comercial no autorizado.

#### 5.2 Definición de Problemas Priorizados (Obstáculos Estatales)
* **P1:** Rigidez de las plataformas informáticas de HCE frente al régimen de Autonomía Progresiva del Código Civil y Comercial — Art. 26 CCyC (https://servicios.infoleg.gob.ar/infolegInternet/anexos/235000-239999/235975/norma.htm#2).
* **P2:** Incompatibilidad e inoperabilidad técnica del ecosistema informático en salud que impide el intercambio federado.
* **P3:** Ausencia de validación digital de la responsabilidad parental interconectada con los registros de identidad — RENAPER (https://www.argentina.gob.ar/interior/renaper).

---

### TABLAS DE EVALUACIÓN Y PRIORIZACIÓN

#### Tabla de Jerarquización de Necesidades

| Necesidades Sociales (Carencias del Nicho) | Gravedad (Tiempo) | Gravedad (Espacio) | Urgencia Subsector Público | Urgencia Seguridad Social | Urgencia Subsector Privado | Urgencia Oculta / Soc. Civil | TOTAL |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **N1** (Vulneración de confidencialidad en adolescentes de 13-17 años) | 3 | 3 | 3 | 3 | 2 | 3 | **17** |
| **N2** (Carencia de autonomía y control sobre los propios datos) | 3 | 3 | 2 | 2 | 2 | 3 | **15** |
| **N3** (Discontinuidad e integralidad del historial clínico) | 3 | 2 | 2 | 2 | 2 | 2 | **13** |
| **N4** (Vulnerabilidad y desprotección ante ciberriesgos en la infancia) | 3 | 3 | 3 | 2 | 2 | 3 | **16** |

*Escala de valoración: 1 (Baja), 2 (Media), 3 (Alta/Crítica).*

#### Fundamentación Estadístico-Normativa de los Datos
1. **Puntaje Máximo en N1 (17 Puntos):** 
   * *Normativa:* Art. 26 del CCyC (https://servicios.infoleg.gob.ar/infolegInternet/anexos/235000-239999/235975/norma.htm#2) y Art. 2° de la Ley 26.529 (https://servicios.infoleg.gob.ar/infolegInternet/anexos/160000-164999/160432/norma.htm).
   * *Estadística:* Relevamientos del Ministerio de Salud (https://www.argentina.gob.ar/salud) muestran que la franja de 13 a 17 años registra altas tasas de abandono de consulta por fallas en la reserva médica. En Argentina, **más del 60% de los embarazos en adolescentes de 15 a 19 años son no intencionados**, donde el retraso en el acceso al sistema se vincula con el temor a la exposición familiar de sus registros.
2. **Puntaje en N4 (16 Puntos):** 
   * *Normativa:* Ley 25.326 de Protección de Datos Personales (https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm) —fiscalizada por la AAIP (https://www.argentina.gob.ar/aaip)— y Ley 26.061 (https://servicios.infoleg.gob.ar/infolegInternet/anexos/110000-114999/110778/norma.htm).
   * *Contexto:* El subsector público y la seguridad social atienden al **68% de la población infantil y adolescente**, exponiendo un volumen crítico de datos sensibles si no existen resguardos informáticos.
3. **Puntajes en N2 y N3 (15 y 13 Puntos):** Sustentados en el cumplimiento de la Ley 27.706 de HCE (https://www.boletinoficial.gob.ar/detalleAviso/primera/282707/20230316) y en el despliegue del estándar HL7 FHIR en la Plataforma HSI (https://www.argentina.gob.ar/salud/digital/hsi).

---

#### Tabla de Priorización de Problemas (Matriz de Incidencia)

| Problemas Priorizados (Obstáculos del Sistema) | P1 | P2 | P3 | TOTAL |
| :--- | :---: | :---: | :---: | :---: |
| **P1 - Rigidez de HCE frente a la Autonomía Progresiva (Art. 26 CCyC)** | - | 3 | 2 | **5** |
| **P2 - Incompatibilidad e inoperabilidad del ecosistema informático** | 2 | - | 2 | **4** |
| **P3 - Ausencia de validación digital de la responsabilidad parental (RENAPER)** | 1 | 2 | - | **3** |

*Se evalúa la fuerza causal del problema sobre los demás (1: Baja, 2: Media, 3: Alta). P1 resulta ser el problema causa-raíz (5 puntos).*

---

#### Alternativas en Evaluación

| Alternativas Evaluadas | Cap. Finan. | Cap. Org. | Efic. Rec. | Efic. Obj. | Fact. Soc. | Fact. Legal | TOTAL |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A1 - Arquitectura Federada + Módulo AMFE** | 2 | 3 | 3 | 3 | 3 | 3 | **17** |
| **A2 - Repositorio Único Centralizado de Datos Pediátricos** | 1 | 2 | 2 | 2 | 1 | 1 | **09** |
| **A3 - Guías Marco No Vinculantes para Efectores** | 3 | 1 | 1 | 1 | 2 | 2 | **10** |

*La Alternativa 1 (17 puntos) es la seleccionada por responder directamente a las necesidades del nicho social, respetar las competencias provinciales y garantizar plenamente la factibilidad legal.*

---

### 6. DESCRIPCIÓN DEL PROYECTO

#### 6.1 Objetivos

##### Objetivo General
Implementar el Sistema Federado de Datos Sanitarios de Niños, Niñas y Adolescentes mediante una arquitectura de interoperabilidad descentralizada dotada de un Módulo de Autonomía Progresiva y Consentimiento Dinámico (AMFE), garantizando la continuidad asistencial, la seguridad de la información y la tutela efectiva de la confidencialidad médica según las franjas etarias del Código Civil y Comercial.

##### Objetivos Específicos
1. Aprobar en el COFESA el Protocolo Nacional de Gobernanza etaria de la Información Clínica Infantil y Adolescente.
2. Desplegar la infraestructura federada mediante servidores FHIR locales interconectados por un Bus de Interoperabilidad Nacional bajo estándares HL7 y nomencladores SNOMED CT.
3. Integrar el Módulo AMFE con los servicios web del RENAPER para verificar la validez de los vínculos de patria potestad en tiempo real.
4. Habilitar mecanismos de control de acceso basado en atributos (ABAC) que automaticen la segmentación de visibilidad en portales familiares para adolescentes de 13 a 17 años.
5. Ejecutar programas nacionales de formación en informática médica, ética de datos y derechos de la minoridad dirigidos a equipos de salud.

#### 6.2 Componentes del Sistema y Gobernanza
1. **Módulo AMFE (Motor de Reglas Lógicas):** Opera como un filtro inteligente basado en la técnica de Control de Acceso Basado en Atributos (ABAC). Ante la solicitud de acceso de un adulto:
   * Requiere al RENAPER la confirmación de la filiación.
   * Evalúa la edad del paciente: de **0 a 12 años**, otorga acceso total al tutor. De **13 a 15 años**, oculta automáticamente entradas sensibles (salud sexual, salud mental) manteniendo visibles registros pediátricos generales. A los **16 y 17 años**, desvincula la cuenta parental por defecto, requiriendo autorización explícita del adolescente.
2. **Arquitectura Federada:** La información no se centraliza. Al atender a un paciente, el sistema local solicita al Bus Federal una vista temporal cifrada de los antecedentes del menor en otros nodos. Finalizada la atención, la vista se destruye y los datos permanecen almacenados exclusivamente en las instituciones de origen.
3. **Auditabilidad y Consentimiento Dinámico:** Cada acceso o modificación genera una traza inalterable. El adolescente puede auditar quién consultó sus datos y otorgar o revocar permisos a sus tutores para tratamientos específicos.

---

### 7. CONCLUSIONES Y RECOMENDACIONES DE POLÍTICA PÚBLICA

El proyecto demuestra que la modernización digital de la salud debe ajustarse a la protección de los derechos personalísticos de la infancia y la adolescencia. La incorporación del Módulo AMFE resuelve la tensión entre la responsabilidad parental y la autonomía progresiva del menor.

#### Recomendaciones:
1. **COFESA:** Emitir la Resolución Marco de Gobernanza etaria de la Información Clínica declarando obligatorio el Módulo AMFE en los tres subsistemas.
2. **Ministerio de Salud y AAIP:** Crear un Registro de Evaluaciones de Impacto en la Privacidad para garantizar que los datos pediátricos no sean reutilizados comercialmente.
3. **Provincias:** Adecuar sus normativas e integrar sus sistemas locales al Bus Federal mediante estándares HL7 FHIR y SNOMED CT.
