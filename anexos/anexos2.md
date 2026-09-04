# ANEXO 2: ARQUITECTURA FEDERADA Y MÓDULO AMFE

### Esquema Gráfico de Arquitectura e Interoperabilidad

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="auto" style="background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1; padding:10px;">
  <!-- Título -->
  <text x="400" y="35" text-anchor="middle" fill="#0f172a" font-size="18" font-weight="bold" font-family="sans-serif">SISTEMA FEDERADO Y MÓDULO AMFE (ABAC)</text>
  
  <!-- Nodos Periféricos (Hospitales/Efectores) -->
  <rect x="50" y="80" width="160" height="90" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="115" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="bold" font-family="sans-serif">Nodo Provincial / Público</text>
  <text x="130" y="140" text-anchor="middle" fill="#64748b" font-size="11" font-family="sans-serif">Servidor FHIR Local</text>

  <rect x="590" y="80" width="160" height="90" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
  <text x="670" y="115" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="bold" font-family="sans-serif">Sector Privado / Prepagas</text>
  <text x="670" y="140" text-anchor="middle" fill="#64748b" font-size="11" font-family="sans-serif">Servidor FHIR Local</text>

  <!-- Bus Central de Interoperabilidad -->
  <rect x="220" y="210" width="360" height="70" rx="10" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
  <text x="400" y="242" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold" font-family="sans-serif">BUS FEDERAL DE INTEROPERABILIDAD</text>
  <text x="400" y="262" text-anchor="middle" fill="#bfdbfe" font-size="12" font-family="sans-serif">Estándar HL7 FHIR / SNOMED CT</text>

  <!-- Módulo AMFE y RENAPER -->
  <rect x="120" y="340" width="220" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
  <text x="230" y="370" text-anchor="middle" fill="#065f46" font-size="14" font-weight="bold" font-family="sans-serif">Módulo AMFE</text>
  <text x="230" y="395" text-anchor="middle" fill="#334155" font-size="11" font-family="sans-serif">Reglas ABAC / Art. 26 CCyC</text>
  <text x="230" y="415" text-anchor="middle" fill="#047857" font-size="11" font-weight="bold" font-family="sans-serif">Filtrado Etario Dinámico</text>

  <rect x="460" y="340" width="220" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
  <text x="570" y="370" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold" font-family="sans-serif">RENAPER (API Web)</text>
  <text x="570" y="395" text-anchor="middle" fill="#334155" font-size="11" font-family="sans-serif">Validación de Filiación</text>
  <text x="570" y="415" text-anchor="middle" fill="#b45309" font-size="11" font-weight="bold" font-family="sans-serif">Patria Potestad en T.R.</text>

  <!-- Conexiones / Flechas -->
  <line x1="130" y1="170" x2="280" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <line x1="670" y1="170" x2="520" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <line x1="300" y1="280" x2="250" y2="340" stroke="#059669" stroke-width="2"/>
  <line x1="500" y1="280" x2="550" y2="340" stroke="#d97706" stroke-width="2"/>
</svg>

---

### Descripción Técnica del Diagrama

1. **Nodos Descentralizados:** La información clínica permanece en cada hospital o clínica de origen.
2. **Bus Federal:** Canaliza las peticiones de datos bajo estándar HL7 FHIR sin almacenar historiales de forma centralizada.
3. **Módulo AMFE:** Verifica la edad del adolescente (13 a 17 años) antes de responder la consulta para ocultar datos de salud sexual o mental a las cuentas parentales.
4. **RENAPER:** Valida que el adulto solicitante posea la tutela legal correspondiente.
