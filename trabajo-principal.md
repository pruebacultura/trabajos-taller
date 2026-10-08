# SISTEMA FEDERADO DE DATOS SANITARIOS DE NIÑOS, NIÑAS Y ADOLESCENTES: GOBERNANZA DIGITAL, AUTONOMÍA PROGRESIVA E INTEROPERABILIDAD FEDERAL (2026-2030)

**Carrera:** Tecnicatura Universitaria en Gestión de Políticas Públicas  
**Asignatura:** Taller de Práctica I  
**Profesora:** María Lara  
**Estudiantes:** Denis Strappa, Haas Jorge, Hernan Moyano  

---

## 1. PROBLEMÁTICA

La problemática abordada es la necesidad de desarrollar una arquitectura federal de datos sanitarios que permita garantizar la continuidad de la atención de niños, niñas y adolescentes (NNA), protegiendo simultáneamente sus derechos a la intimidad, confidencialidad, autonomía progresiva y protección de datos personales.

El desafío consiste en compatibilizar los sistemas de información sanitaria existentes en las distintas jurisdicciones con un modelo de gobernanza que permita intercambiar información necesaria para la atención sin establecer una concentración innecesaria de todos los datos sanitarios en una única base nacional.

### 1.1 Sujeto

El proyecto identifica como actores principales:

- Ministerio de Salud de la Nación.
- Consejo Federal de Salud (COFESA).
- Ministerios y autoridades sanitarias de las provincias y de la Ciudad Autónoma de Buenos Aires.
- Agencia de Acceso a la Información Pública (AAIP), en su carácter de autoridad de aplicación en materia de protección de datos personales.
- Organismos nacionales y jurisdiccionales competentes en materia de niñez y adolescencia.
- RENAPER, cuando corresponda y resulte jurídicamente y técnicamente viable.
- Establecimientos sanitarios públicos, de la seguridad social y privados.
- Profesionales de la salud.
- Niños, niñas y adolescentes como titulares de derechos.
- Madres, padres y responsables en el marco de la responsabilidad parental.

### 1.2 Materia, sector y territorio

**Materia:** gobernanza de datos sanitarios, protección de datos personales, interoperabilidad y autonomía progresiva.

**Sector:** sistema de salud y transformación digital del Estado.

**Territorio:** República Argentina, incluyendo las 23 provincias y la Ciudad Autónoma de Buenos Aires.

**Población destinataria:** niños, niñas y adolescentes de 0 a 17 años que utilizan servicios de salud públicos, de la seguridad social o privados.

---

# 2. ESTADO DEL ARTE

La digitalización de la atención sanitaria permite mejorar la continuidad asistencial, pero también genera nuevos desafíos vinculados con la privacidad, seguridad, interoperabilidad y ejercicio de derechos.

El Código Civil y Comercial de la Nación establece reglas vinculadas con la capacidad y el ejercicio de derechos por parte de las personas menores de edad, incorporando el principio de autonomía progresiva.

La Ley 26.061 reconoce a niños, niñas y adolescentes como sujetos de derechos y establece obligaciones estatales de protección integral.

La Ley 25.326 regula la protección de los datos personales.

La Ley 26.529 regula los derechos del paciente, incluyendo aspectos vinculados con información, intimidad, confidencialidad y consentimiento.

La Ley 27.706 establece el Programa Federal Único de Informatización y Digitalización de Historias Clínicas de la República Argentina.

En este contexto, el proyecto propone complementar las políticas existentes mediante una arquitectura federal de intercambio de información que evite la concentración innecesaria de todos los datos sanitarios en un repositorio único.

## 2.1 Autonomía progresiva

El proyecto toma como referencia el artículo 26 del Código Civil y Comercial de la Nación.

De manera general, el modelo debe contemplar que el ejercicio de derechos de NNA varía según su edad, grado de madurez, naturaleza de la práctica médica y nivel de riesgo.

Por ello, el sistema no debería aplicar reglas rígidas exclusivamente basadas en la edad, sino permitir configurar permisos diferenciados de acuerdo con la legislación vigente, los protocolos sanitarios y las circunstancias del caso.

### Principios a considerar

| Grupo | Criterio general |
|---|---|
| Niñas y niños | Participación y derecho a ser oídos conforme a su edad y grado de madurez, con intervención de quienes ejercen la responsabilidad parental cuando corresponda. |
| Adolescentes | Mayor participación en las decisiones relacionadas con su salud y reconocimiento de su autonomía progresiva. |
| Adolescentes de 16 años o más | El CCyC los considera como adultos para las decisiones atinentes al cuidado de su propio cuerpo. |

El sistema deberá evitar que estas categorías se conviertan en reglas automáticas que desconozcan las circunstancias particulares.

---

# 3. LINEAMIENTOS DEL PROYECTO

El proyecto se estructura sobre los siguientes lineamientos:

1. Enfoque basado en derechos.
2. Protección de datos personales y sanitarios.
3. Autonomía progresiva.
4. Interoperabilidad federal.
5. Descentralización de los datos.
6. Seguridad informática.
7. Trazabilidad de accesos.
8. Minimización de datos.
9. Gobernanza federal.
10. Evaluación permanente.

## 3.1 Modelo de arquitectura federada

Se propone una arquitectura federada en la cual cada jurisdicción mantiene sus sistemas y repositorios de información, mientras que una infraestructura de interoperabilidad permite realizar consultas autorizadas.

La propuesta evita diseñar un repositorio central que concentre indiscriminadamente la totalidad de las historias clínicas.

El modelo podrá utilizar estándares de interoperabilidad sanitaria, como HL7 FHIR, cuando resulte técnica y jurídicamente adecuado.

## 3.2 Modelo de las 4D de Graglia

El proyecto utiliza como marco metodológico el modelo de las cuatro D:

1. **Dirección:** definición del rumbo y de los objetivos de política pública.
2. **Diseño:** formulación de alternativas, instrumentos y mecanismos de implementación.
3. **Desempeño:** ejecución y seguimiento de las acciones.
4. **Desarrollo:** evaluación de resultados, aprendizaje institucional y mejora continua.

---

# 4. DIAGNÓSTICO

## 4.1 Necesidades sociales insatisfechas

Se identifican las siguientes necesidades:

### N1. Confidencialidad y privacidad

Los NNA necesitan que la información sanitaria sea protegida y que el acceso se limite a quienes tengan una justificación legítima.

### N2. Control y autonomía sobre la información

Los adolescentes necesitan que el sistema pueda reconocer las distintas situaciones de autonomía progresiva previstas por la legislación.

### N3. Continuidad de la atención sanitaria

Los pacientes necesitan que la información relevante pueda acompañar la atención cuando reciben servicios en diferentes jurisdicciones o establecimientos.

### N4. Seguridad frente a riesgos digitales

El sistema necesita mecanismos de protección frente a accesos no autorizados, filtraciones, usos indebidos y otros riesgos de seguridad.

## 4.2 Problemas públicos

### P1. Sistemas rígidos frente al principio de autonomía progresiva

Los sistemas informáticos pueden presentar dificultades para representar diferentes niveles de autorización y confidencialidad.

### P2. Fragmentación e incompatibilidad tecnológica

Los sistemas de información sanitaria de las diferentes jurisdicciones pueden utilizar tecnologías, estructuras y estándares diferentes.

### P3. Dificultades para acreditar digitalmente relaciones relevantes

El sistema necesita mecanismos jurídicamente válidos para identificar al paciente y, cuando corresponda, verificar las relaciones de responsabilidad parental o representación.

---

# 5. JERARQUIZACIÓN Y PRIORIZACIÓN

## 5.1 Jerarquización de necesidades insatisfechas

| Necesidad | Incidencia / prioridad |
|---|---:|
| N1. Confidencialidad y privacidad | 17 |
| N4. Seguridad frente a riesgos digitales | 16 |
| N2. Autonomía y control de información | 15 |
| N3. Continuidad de la atención | 13 |

La prioridad se establece considerando el impacto que cada necesidad tiene sobre los derechos fundamentales de NNA y sobre el funcionamiento del sistema sanitario.

## 5.2 Incidencia de los problemas públicos

| Problema | Incidencia |
|---|---:|
| P1. Rigidez de los sistemas frente a la autonomía progresiva | 5 |
| P2. Fragmentación tecnológica | 4 |
| P3. Dificultades de validación digital | 3 |

## 5.3 Alternativas de política pública

| Alternativa | Valoración |
|---|---:|
| A1. Arquitectura federada + módulo de autonomía y confidencialidad | 17 |
| A2. Repositorio centralizado | 9 |
| A3. Guías no vinculantes sin infraestructura interoperable | 10 |

La alternativa seleccionada es **A1**, debido a que permite combinar interoperabilidad, protección de datos, seguridad y reconocimiento de la autonomía progresiva.

---

# 6. DESCRIPCIÓN DEL PROYECTO

## 6.1 Objetivo general

Implementar progresivamente un sistema federal e interoperable de intercambio de información sanitaria para niños, niñas y adolescentes, basado en una arquitectura federada, que garantice continuidad de atención, seguridad, confidencialidad y respeto de la autonomía progresiva conforme al marco jurídico argentino.

## 6.2 Objetivos específicos

1. Elaborar y aprobar un protocolo federal de gobernanza de datos sanitarios de NNA.
2. Implementar nodos de interoperabilidad compatibles con estándares sanitarios.
3. Diseñar un módulo de autorización y confidencialidad denominado **AMFE**, como componente propuesto por el proyecto.
4. Incorporar mecanismos de identificación y validación de relaciones jurídicas relevantes, sujetos a factibilidad jurídica y técnica.
5. Implementar mecanismos de control de acceso basados en atributos y funciones.
6. Garantizar la trazabilidad de los accesos a la información.
7. Capacitar al personal sanitario y técnico involucrado.
8. Implementar mecanismos de evaluación y mejora continua.

## 6.3 Componentes

### Componente 1. Gobernanza y regulación

- Protocolo federal.
- Acuerdos interjurisdiccionales.
- Definición de responsabilidades.
- Protocolos de protección de datos.
- Mecanismos de auditoría.

### Componente 2. Arquitectura federada

- Nodos jurisdiccionales.
- Interoperabilidad mediante estándares.
- Bus federal de interoperabilidad como arquitectura propuesta.
- Consultas autorizadas entre sistemas.

### Componente 3. Módulo AMFE

El **AMFE** es una propuesta específica de este proyecto para administrar reglas de acceso, confidencialidad y autonomía progresiva.

Sus funciones previstas son:

- Identificación de perfiles.
- Determinación de permisos.
- Gestión de restricciones.
- Registro de accesos.
- Aplicación de reglas diferenciadas.
- Administración de excepciones conforme a protocolos.

### Componente 4. Seguridad y auditoría

- Autenticación.
- Autorización.
- Registro de accesos.
- Monitoreo.
- Auditorías periódicas.
- Gestión de incidentes.
- Minimización de datos.

### Componente 5. Capacitación

Capacitación de:

- profesionales de salud;
- personal administrativo;
- responsables de sistemas;
- responsables de protección de datos;
- autoridades sanitarias.

---

# 6.4 IMPLEMENTACIÓN

La implementación se desarrollará en cinco fases.

## Fase 1. Organización institucional y diseño normativo

**Período:** 2026.

### Actividades

- Constitución del equipo federal de proyecto.
- Relevamiento de sistemas existentes.
- Identificación de actores.
- Elaboración del protocolo federal.
- Definición de estándares.
- Evaluación jurídica de las reglas de acceso.
- Definición de indicadores.

### Productos

- Documento de gobernanza.
- Protocolo federal.
- Mapa de sistemas.
- Modelo de indicadores.

## Fase 2. Desarrollo tecnológico

**Período:** 2027.

### Actividades

- Desarrollo del modelo de interoperabilidad.
- Desarrollo del módulo AMFE.
- Implementación de mecanismos de autenticación y autorización.
- Desarrollo de registros de auditoría.
- Pruebas de seguridad.
- Adaptación de nodos jurisdiccionales.

### Productos

- Prototipo funcional.
- Nodos de prueba.
- Módulo de autorización.
- Sistema de auditoría.

## Fase 3. Integración y piloto

**Período:** 2028.

### Actividades

- Selección de jurisdicciones piloto.
- Integración de sistemas.
- Capacitación.
- Pruebas de interoperabilidad.
- Evaluación de seguridad.
- Evaluación jurídica y funcional.

### Productos

- Piloto operativo.
- Informe de evaluación.
- Correcciones técnicas.

## Fase 4. Escalamiento federal

**Período:** 2029.

### Actividades

- Incorporación progresiva de jurisdicciones.
- Capacitación federal.
- Integración de nuevos establecimientos.
- Seguimiento de indicadores.
- Auditorías.

### Productos

- Ampliación de cobertura.
- Informes de desempeño.
- Base de buenas prácticas.

## Fase 5. Consolidación y evaluación

**Período:** 2030.

### Actividades

- Evaluación final.
- Medición de resultados.
- Auditoría integral.
- Identificación de mejoras.
- Actualización de protocolos.
- Diseño de continuidad para el período posterior.

---

# 7. PROGRAMA / CRONOGRAMA DE ACTIVIDADES

| Actividad | 2026 | 2027 | 2028 | 2029 | 2030 |
|---|:---:|:---:|:---:|:---:|:---:|
| Organización institucional | X |  |  |  |  |
| Diagnóstico de sistemas | X |  |  |  |  |
| Protocolo federal | X | X |  |  |  |
| Diseño tecnológico | X | X |  |  |  |
| Desarrollo AMFE |  | X | X |  |  |
| Desarrollo de interoperabilidad |  | X | X | X |  |
| Piloto |  |  | X |  |  |
| Capacitación | X | X | X | X | X |
| Escalamiento federal |  |  |  | X |  |
| Auditorías |  | X | X | X | X |
| Evaluación |  |  | X | X | X |
| Evaluación final |  |  |  |  | X |

## 7.1 Gantt simplificado

```text
Actividad                         2026  2027  2028  2029  2030
----------------------------------------------------------------
Organización institucional       ███
Diagnóstico                      ███
Protocolo federal                ███   ███
Diseño tecnológico              ███   ███
Desarrollo AMFE                       ███   ███
Interoperabilidad                     ███   ███   ███
Piloto                                      ███
Capacitación                     ███   ███   ███   ███   ███
Escalamiento                                      ███
Auditorías                            ███   ███   ███   ███
Evaluación                                 ███   ███   ███
Evaluación final                                           ███
```

---

# 8. RESULTADOS ESPERADOS

Se espera obtener los siguientes resultados:

1. Mayor protección de la confidencialidad de los datos sanitarios de NNA.
2. Incorporación de mecanismos compatibles con la autonomía progresiva.
3. Mejora de la interoperabilidad entre jurisdicciones.
4. Mayor continuidad de la atención sanitaria.
5. Reducción de accesos no autorizados.
6. Mayor trazabilidad de las consultas realizadas.
7. Fortalecimiento de la gobernanza federal de datos sanitarios.
8. Capacitación de los recursos humanos.
9. Generación de información para la evaluación de políticas públicas.
10. Desarrollo de una arquitectura escalable y adaptable.

---

# 9. INDICADORES Y METAS

| Objetivo | Indicador | Meta 2030 |
|---|---|---:|
| Implementar gobernanza federal | Jurisdicciones adheridas al protocolo | 100% |
| Mejorar interoperabilidad | Jurisdicciones conectadas al sistema | 100% |
| Mejorar seguridad | Accesos registrados y auditables | 100% |
| Capacitar personal | Personal capacitado | ≥ 90% |
| Mejorar intercambio | Consultas interoperables exitosas | ≥ 90% |
| Implementar reglas diferenciadas | Sistemas con mecanismos de acceso diferenciado | 100% |
| Mejorar auditoría | Accesos con registro completo | 100% |

Las metas deberán ser ajustadas luego de establecer una línea de base verificable.

---

# 10. EVALUACIÓN

La evaluación será continua y se desarrollará en tres niveles:

## 10.1 Evaluación de proceso

Permitirá conocer si las actividades previstas se están ejecutando.

### Indicadores

- Cantidad de jurisdicciones incorporadas.
- Cantidad de sistemas adaptados.
- Cantidad de funcionarios capacitados.
- Cumplimiento del cronograma.
- Cantidad de auditorías realizadas.

## 10.2 Evaluación de resultados

Permitirá determinar si los productos alcanzaron los objetivos previstos.

### Indicadores

- Porcentaje de consultas interoperables exitosas.
- Porcentaje de accesos auditables.
- Porcentaje de sistemas que aplican reglas diferenciadas.
- Cantidad de incidentes de seguridad.
- Tiempo promedio de respuesta.

## 10.3 Evaluación de impacto

Permitirá valorar los efectos de la política sobre la población destinataria.

### Indicadores posibles

- Mejora de la continuidad asistencial.
- Reducción de dificultades de acceso a información clínica relevante.
- Disminución de accesos indebidos.
- Mayor protección de la confidencialidad.
- Mayor adecuación de los sistemas al principio de autonomía progresiva.

## 10.4 Matriz de evaluación

| Objetivo | Indicador | Fuente | Frecuencia | Meta |
|---|---|---|---|---|
| Interoperabilidad | Consultas exitosas | Registros del sistema | Trimestral | ≥90% |
| Seguridad | Accesos auditables | Logs | Mensual | 100% |
| Capacitación | Personal capacitado | Registros institucionales | Semestral | ≥90% |
| Gobernanza | Jurisdicciones adheridas | COFESA / autoridad competente | Anual | 100% |
| Autonomía | Sistemas con reglas diferenciadas | Auditoría | Semestral | 100% |

La evaluación deberá contemplar mecanismos de retroalimentación para introducir modificaciones durante la implementación.

---

# 11. RECURSOS Y PRESUPUESTO

## 11.1 Recursos humanos

- Especialistas en políticas públicas.
- Profesionales de salud.
- Abogados especializados en derecho sanitario y protección de datos.
- Ingenieros y desarrolladores.
- Especialistas en interoperabilidad.
- Especialistas en ciberseguridad.
- Administradores de sistemas.
- Personal de capacitación.
- Equipos de evaluación.

## 11.2 Recursos tecnológicos

- Servidores y/o infraestructura cloud.
- Sistemas de interoperabilidad.
- Herramientas de autenticación.
- Sistemas de auditoría.
- Herramientas de seguridad.
- Equipamiento informático.
- Sistemas de respaldo.
- Infraestructura de comunicaciones.

## 11.3 Recursos institucionales

- Ministerio de Salud de la Nación.
- COFESA.
- Autoridades sanitarias provinciales.
- CABA.
- AAIP.
- Organismos competentes en materia de niñez.
- RENAPER, cuando corresponda.
- Hospitales y centros de salud.

## 11.4 Presupuesto estimado por fases

Debido a que el proyecto requiere una presupuestación técnica posterior, se propone inicialmente una distribución porcentual:

| Fase | Porcentaje estimado |
|---|---:|
| Fase 1. Organización y diseño | 10% |
| Fase 2. Desarrollo tecnológico | 30% |
| Fase 3. Integración y piloto | 25% |
| Fase 4. Escalamiento federal | 25% |
| Fase 5. Evaluación y consolidación | 10% |
| **Total** | **100%** |

Si el presupuesto total aprobado fuera **P**, la asignación inicial sería:

- Fase 1 = P × 0,10
- Fase 2 = P × 0,30
- Fase 3 = P × 0,25
- Fase 4 = P × 0,25
- Fase 5 = P × 0,10

Esta distribución constituye una estimación metodológica y deberá ser reemplazada por un presupuesto técnico cuando se determinen costos de infraestructura, software, recursos humanos, contratación y mantenimiento.

---

# 12. BIBLIOGRAFÍA Y FUENTES

## 12.1 Normativa

- Constitución de la Nación Argentina.
- Código Civil y Comercial de la Nación.
- Ley 25.326. Protección de los Datos Personales.
- Ley 26.061. Protección Integral de los Derechos de Niñas, Niños y Adolescentes.
- Ley 26.529. Derechos del Paciente.
- Ley 27.706. Programa Federal Único de Informatización y Digitalización de Historias Clínicas de la República Argentina.

## 12.2 Organismos institucionales

- Ministerio de Salud de la Nación Argentina.
- Consejo Federal de Salud (COFESA).
- Agencia de Acceso a la Información Pública (AAIP).
- Registro Nacional de las Personas (RENAPER).
- Organismos nacionales y jurisdiccionales competentes en niñez y adolescencia.

## 12.3 Estándares tecnológicos

- HL7 FHIR.
- SNOMED CT.
- Estándares de seguridad e interoperabilidad aplicables al sistema sanitario.

## 12.4 Bibliografía metodológica

- Graglia, Emilio. Materiales sobre políticas públicas, diagnóstico, necesidades insatisfechas, priorización y modelo de las 4D.
- Bibliografía indicada por la asignatura Taller de Práctica I.

## 12.5 Fuentes estadísticas

Los datos estadísticos utilizados en la versión definitiva del proyecto deberán incorporar:

- organismo productor;
- año;
- publicación;
- metodología;
- enlace o referencia documental;
- fecha de consulta, cuando corresponda.

No se deberán incorporar porcentajes o cifras sin fuente oficial o académica verificable.

---

# 13. CONCLUSIONES Y RECOMENDACIONES

El proyecto propone una política pública federal destinada a resolver un problema complejo: garantizar la interoperabilidad de los datos sanitarios de niños, niñas y adolescentes sin debilitar la protección de sus derechos.

La arquitectura federada constituye una alternativa que permite mejorar el intercambio de información manteniendo los datos en las instituciones responsables de su custodia, reduciendo la necesidad de concentrar toda la información en un único repositorio.

La política deberá incorporar desde su diseño el principio de autonomía progresiva, evitando reglas tecnológicas rígidas que desconozcan la legislación argentina y las circunstancias particulares de cada paciente.

También resulta necesario fortalecer la seguridad informática mediante autenticación, autorización, trazabilidad, auditoría, gestión de incidentes y minimización de datos.

La implementación requiere coordinación entre Nación, provincias y CABA. El COFESA constituye un ámbito central para la coordinación sanitaria federal, aunque cada jurisdicción deberá intervenir dentro de sus competencias.

## Recomendaciones

1. Establecer una gobernanza federal clara.
2. Aprobar protocolos comunes de interoperabilidad.
3. Utilizar estándares abiertos y ampliamente reconocidos.
4. Implementar mecanismos diferenciados de acceso según función y autorización.
5. Incorporar la autonomía progresiva como requisito de diseño.
6. Garantizar trazabilidad de los accesos.
7. Realizar evaluaciones periódicas de seguridad.
8. Capacitar permanentemente al personal.
9. Garantizar mecanismos de reclamo y control para los titulares de datos.
10. Actualizar periódicamente el sistema conforme a cambios tecnológicos y normativos.
11. Realizar un piloto antes del escalamiento nacional.
12. Utilizar indicadores verificables para evaluar la política pública.

En conclusión, el Sistema Federado de Datos Sanitarios de Niños, Niñas y Adolescentes se plantea como una política de transformación digital del Estado orientada a combinar interoperabilidad, continuidad sanitaria, protección de datos, seguridad y reconocimiento de derechos. Su implementación deberá ser progresiva, evaluable y jurídicamente compatible con el sistema federal argentino.
