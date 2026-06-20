import React from 'react';

const Welcome = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff9e6 0%, #d1f2ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '900px',
        width: '100%'
      }}>
        {/* Lado Esquerdo: Texto */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '48px', color: '#333', marginBottom: '10px' }}>
            ¡Hola, pequeño aventurero de la Fe!
          </h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            Vamos juntos construir una fe tan fuerte que nada puede abalar. Historias, versículos y mucha alegría te esperan.
          </p>
          <button style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#a78bfa',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            Comenzar aventura ✨
          </button>
        </div>

        {/* Lado Direito: Mascote */}
        <div style={{ flex: 0.5, textAlign: 'center' }}>
          <img 
            src="/mascote.png" 
            alt="León" 
            style={{ width: '100%', maxWidth: '300px' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
