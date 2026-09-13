export default function FolderBackground({ activeTab }) {
  // 1. Color del cuerpo principal de la carpeta (Cambia a celeste si estamos en contacto)
  const colorCuerpo = activeTab === 'contacto' ? '#6DC5D4' : '#FFF6E9';

  // 2. Colores de las pestañas (Si está activa se fusiona con el cuerpo, si no, usa su color base)
  const colorInicio = activeTab === 'inicio' ? colorCuerpo : '#C8BCB0'; // Color arena oscuro para inactivo
  const colorServicios = activeTab === 'servicios' ? colorCuerpo : 'url(#paint2_linear_240_2)'; // Verde para inactivo
  const colorContacto = activeTab === 'contacto' ? colorCuerpo : 'url(#paint1_linear_240_2)'; // Azul para inactivo

  return (
    <svg 
      viewBox="0 0 1440 1024" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <g clipPath="url(#clip0_240_2)">
        <rect width="1440" height="1024" fill="white"/>
        <rect width="1440" height="1024" fill="url(#paint0_linear_240_2)"/>
        
        <g filter="url(#filter0_d_240_2)">
          {/* Cuerpo principal de la carpeta */}
          <path 
            d="M40 155H1400V962C1400 978.569 1386.57 992 1370 992H70C53.4315 992 40 978.569 40 962V155Z" 
            fill={colorCuerpo} 
            className="transition-colors duration-300"
          />
          
          {/* Pestaña derecha (Contáctanos) */}
          <path 
            d="M1400 110C1400 93.4315 1386.57 80 1370 80H1119.66C1110.57 80 1101.97 84.1209 1096.28 91.2054L1045 155H1400V110Z" 
            fill={colorContacto} 
            className="transition-colors duration-300"
          />
          
          {/* Pestaña izquierda (Inicio) */}
          <path 
            d="M40 110C40 93.4315 53.4315 80 70 80H320.341C329.43 80 338.029 84.1209 343.724 91.2054L395 155H40V110Z" 
            fill={colorInicio} 
            className="transition-colors duration-300"
          />
          
          {/* Pestaña central (Servicios) */}
          <path 
            d="M395 91.5C395 74.9315 408.431 61.5 425 61.5L590 61.5C606.569 61.5 620 74.9315 620 91.5V155H395V91.5Z" 
            fill={colorServicios} 
            className="transition-colors duration-300"
          />
        </g>
      </g>

      <defs>
        <filter id="filter0_d_240_2" x="27" y="51.5" width="1400" height="970.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="7" dy="10"/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.105882 0 0 0 0 0.188235 0 0 0 0.45 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_2"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_2" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_240_2" x1="720" y1="213.5" x2="720" y2="1024" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1B30"/>
          <stop offset="1" stopColor="#2677B2"/>
        </linearGradient>
        <linearGradient id="paint1_linear_240_2" x1="1222.5" y1="118" x2="1222.5" y2="155" gradientUnits="userSpaceOnUse">
          <stop stopColor="#63C3D1"/>
          <stop offset="1" stopColor="#119EB3"/>
        </linearGradient>
        <linearGradient id="paint2_linear_240_2" x1="507.5" y1="67" x2="507.5" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9CFFC2"/>
          <stop offset="0.350962" stopColor="#36DB75"/>
          <stop offset="1" stopColor="#03210F"/>
        </linearGradient>
        <clipPath id="clip0_240_2">
          <rect width="1440" height="1024" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}