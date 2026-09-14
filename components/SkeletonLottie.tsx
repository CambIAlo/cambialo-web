"use client";

import React, { useEffect, useRef } from "react";
// Usamos lottie-web nativo como solicitaste
import lottie from "lottie-web"; 

// Ruta relativa desde tu carpeta components hacia tus assets
import esqueletoAnimacion from "../assets/animaciones/Camb_Contactos_Esqueleto-Idel.json";

export default function SkeletonLottie() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: esqueletoAnimacion,
    });

    return () => {
      anim.destroy(); 
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />; 
}