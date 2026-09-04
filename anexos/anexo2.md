# ANEXO 2: ARQUITECTURA TECNOLÓGICA X-ROAD Y MÓDULO AMFE

El presente anexo describe la solución de arquitectura técnica descentralizada implementada sobre la plataforma de interoperabilidad **X-Road**, coordinada mediante un bus de integración **LoopBack (Node.js)** y el **Módulo AMFE**.

---

### Esquema Gráfico de Arquitectura e Interoperabilidad

<div align="center">
  <img src="assets/arquitectura-amfe.jpg" alt="Arquitectura X-Road y Módulo AMFE" width="100%" style="border-radius: 8px; border: 1px solid #cbd5e1;">
  <p><em>Figura 2.1: Diagrama de integración federada vía X-Road, API LoopBack y RENAPER.</em></p>
</div>

---

### Descripción de Componentes

1. **Plataforma X-Road (Bus de Interoperabilidad):**
   * Canaliza los mensajes entre efectores públicos y privados mediante Servidores de Seguridad (*Security Servers*) con cifrado mTLS y firma digital.
2. **Capa Orquestadora (API LoopBack / JavaScript):**
   * Procesa la lógica del Módulo AMFE y valida la capacidad jurídica (Art. 26 CCyC) del paciente.
3. **WebService RENAPER:**
   * Valida en tiempo real la patria potestad y filiación del adulto solicitante antes de responder con los datos clínicos.
