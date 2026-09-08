export default function FolderLayout({ children }) {
  return (
    <div className="layout-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="svg-scale-container">
        
        <div className="svg-layer">
          <FolderBackground />
        </div>

        <div className="content-layer">
          
          <div className="tab tab-inicio">Inicio</div>
          <div className="tab tab-servicios">Servicios</div>
          <div className="tab tab-contacto">Escríbenos</div>

          <main className="folder-content">
            {children}
          </main>
          
        </div>
      </div>
    </div>
  );
}

const styles = `
  .layout-root {
    width: 100%;
    min-height: 100vh;
    background-color: #0B1B30; 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .svg-scale-container {
    position: relative;
    width: 100%;
    max-width: 1440px; 
    aspect-ratio: 1440 / 1024; 
    margin: 0 auto;
  }

  .svg-layer {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0; 
    pointer-events: none; 
  }

  .content-layer {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 50; 
  }

  .tab {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: clamp(1rem, 1.5vw, 1.5rem); 
    cursor: pointer;
  }

  .tab-inicio {
    top: 7.81%;      
    height: 7.32%;   
    left: 2.77%;     
    width: 24.65%;   
    color: #0B1B30; 
  }

  .tab-servicios {
    top: 6.00%;      
    height: 9.13%;   
    left: 27.43%;    
    width: 15.62%;   
    color: #0B1B30; 
  }

  .tab-contacto {
    top: 7.81%;      
    height: 7.32%;   
    right: 2.77%;    
    width: 24.65%;   
    color: #FFFFFF; 
  }

  .folder-content {
    position: absolute;
    top: 15.13%;     
    left: 2.77%;     
    width: 94.44%;   
    height: 78.8%;   
    padding: 40px;
    box-sizing: border-box;
    overflow-y: auto; 
  }
`;

function FolderBackground() {
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
          <path d="M40 155H1400V962C1400 978.569 1386.57 992 1370 992H70C53.4315 992 40 978.569 40 962V155Z" fill="#FFF6E9"/>
          <path d="M1400 110C1400 93.4315 1386.57 80 1370 80H1119.66C1110.57 80 1101.97 84.1209 1096.28 91.2054L1045 155H1400V110Z" fill="url(#paint1_linear_240_2)"/>
          <path d="M40 110C40 93.4315 53.4315 80 70 80H320.341C329.43 80 338.029 84.1209 343.724 91.2054L395 155H40V110Z" fill="#FFF6E9"/>
          <path d="M395 91.5C395 74.9315 408.431 61.5 425 61.5L590 61.5C606.569 61.5 620 74.9315 620 91.5V155H395V91.5Z" fill="url(#paint2_linear_240_2)"/>
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