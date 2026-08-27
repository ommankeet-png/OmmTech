const ICONS = {
  tower: (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 80V20L50 8L70 20V80" stroke="#4CF3FF" strokeWidth="1.6" />
      <rect x="38" y="30" width="8" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="54" y="30" width="8" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="38" y="48" width="8" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="54" y="48" width="8" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <line x1="20" y1="80" x2="80" y2="80" stroke="#4CF3FF" strokeWidth="1" />
    </svg>
  ),
  apartment: (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="24" width="56" height="56" stroke="#4CF3FF" strokeWidth="1.6" />
      <rect x="30" y="34" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="45" y="34" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="60" y="34" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="30" y="54" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="45" y="54" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="60" y="54" width="10" height="10" stroke="#9C6BFF" strokeWidth="1" />
    </svg>
  ),
  villa: (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 78V44L50 22L82 44V78" stroke="#4CF3FF" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="44" y="58" width="12" height="20" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="26" y="52" width="12" height="12" stroke="#9C6BFF" strokeWidth="1" />
      <rect x="62" y="52" width="12" height="12" stroke="#9C6BFF" strokeWidth="1" />
      <line x1="10" y1="78" x2="90" y2="78" stroke="#4CF3FF" strokeWidth="1" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="16" width="48" height="64" stroke="#4CF3FF" strokeWidth="1.6" />
      <line x1="26" y1="30" x2="74" y2="30" stroke="#9C6BFF" strokeWidth="1" />
      <line x1="26" y1="44" x2="74" y2="44" stroke="#9C6BFF" strokeWidth="1" />
      <line x1="26" y1="58" x2="74" y2="58" stroke="#9C6BFF" strokeWidth="1" />
      <line x1="42" y1="16" x2="42" y2="80" stroke="#9C6BFF" strokeWidth="0.6" opacity="0.6" />
      <line x1="58" y1="16" x2="58" y2="80" stroke="#9C6BFF" strokeWidth="0.6" opacity="0.6" />
    </svg>
  ),
}

export default function BuildingIcon({ type, className = '' }) {
  return <div className={className}>{ICONS[type] ?? ICONS.apartment}</div>
}
