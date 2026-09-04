# ANEXO 1: MARCO LEGAL COMPLEMENTARIO Y AUTONOMÍA PROGRESIVA

El presente anexo detalla el fundamento jurídico y normativo que sustenta el diseño del **Módulo de Autonomía Progresiva y Consentimiento Dinámico (AMFE)** en el marco del Sistema Federado de Datos Sanitarios para Niños, Niñas y Adolescentes (NNA).

---

## 1. Jerarquía Normativa y Tratados Internacionales

La arquitectura del sistema se alinea estrictamente al principio del **Interés Superior del Niño** y la consideración de la persona menor de edad como **sujeto de derecho**, conforme al bloque de constitucionalidad vigente en la República Argentina:

* **Convención sobre los Derechos del Niño (CDN - Art. 75 inc. 22 CN):** Reconoce el derecho del niño a expresar su opinión libremente y a ser oído en todos los asuntos que le afecten (Art. 12), así como la protección contra interferencias arbitrarias o ilegales en su vida privada y confidencialidad (Art. 16).
* **Ley N° 26.061 de Protección Integral de los Derechos de NNA:** Garantiza el derecho a la vida privada e intimidad personal y familiar (Art. 10) y el derecho a la salud (Art. 14), priorizando el principio de autonomía progresiva en la toma de decisiones sobre su propio cuerpo y salud.

---

## 2. Régimen de Capacidad Jurídica en el Código Civil y Comercial (CCyC)

El **Artículo 26 del CCyC** constituye la piedra angular de la lógica del motor de reglas de acceso del Módulo AMFE. Establece la presunción de capacidad según las siguientes tres franjas etarias:

| Franja Etaria | Definición Jurídica (Art. 26 CCyC) | Regla de Acceso en el Módulo AMFE |
| :--- | :--- | :--- |
| **0 a 12 años** | Persona menor de edad sin presunción de autonomía médica para actos invasivos. | **Acceso Representativo Total:** Los progenitores o tutores acceden al historial clínico completo previa validación de patria potestad en tiempo real vía **RENAPER**. |
| **13 a 15 años** | Presunción de aptitud para decidir sobre tratamientos **no invasivos** ni que pongan en riesgo su salud o vida. | **Visibilidad Parcial y Segmentada:** El adolescente tiene acceso a su perfil. Los representantes legales mantienen acceso general, pero **se ocultan datos sensibles** (salud sexual, reproductiva, consumos, salud mental) catalogados vía SNOMED CT. |
| **16 a 17 años** | El adolescente es considerado como un **adulto** para las decisiones de cuidado de su propio cuerpo. | **Cuenta Desvinculada / Acceso Exclusivo:** El adolescente gestiona de forma autónoma su registro. Las cuentas parentales pierden acceso automático salvo consentimiento explícito otorgado por el joven. |

---

## 3. Derechos del Paciente y Protección de Datos Personales

La interoperabilidad federada respeta y hace cumplir operativamente dos leyes nacionales clave:

1. **Ley N° 26.529 (Derechos del Paciente, Historia Clínica y Autonomía de la Voluntad):**
   * **Titularidad:** Establece que el paciente es el único titular de los datos contenidos en su Historia Clínica Electrónica (HCE).
   * **Confidencialidad:** Impone la reserva absoluta a profesionales y sistemas de información respecto a datos de los que tomen conocimiento.
2. **Ley N° 25.326 (Protección de los Datos Personales):**
   * **Datos Sensibles (Art. 2):** Los datos relativos a la salud son de carácter sensible y requieren un nivel de tutela elevado.
   * **Seguridad de la Información (Art. 9):** Implementado en el sistema mediante el cifrado mTLS de la plataforma **X-Road**, impidiendo el almacenamiento o duplicación de datos en servidores centrales.

---

## 4. Resoluciones y Protocolos del Ministerio de Salud de la Nación

* **Resolución 65/2015 (Ministerio de Salud):** Modifica el reglamento de la Ley de Salud Sexual y Procreación Responsable, garantizando la confidencialidad en la atención a adolescentes y reafirmando el acceso a insumos de salud sexual sin requerir la presencia de un adulto responsable a partir de los 13 años.
* **Guías de Atención Integral de la Salud en la Adolescencia:** Fundamentan técnicamente la necesidad de espacios de consulta a solas y el resguardo confidencial de la HCE para no desalentar el acercamiento de NNA al sistema de salud.
