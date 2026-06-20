import React from 'react';

const VerseModule = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff9e6 0%, #d1f2ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      <h2 style={{ color: '#4a3728', marginBottom: '20px', textAlign: 'center' }}>
        El Versículo de Hoy
      </h2>
      
      {/* Container do Mascote com tamanho responsivo */}
      <div style={{ marginBottom: '20px' }}>
        <img src="/mascote.png" alt="León" style={{ width: '150px', height: 'auto' }} />
      </div>

      {/* Card centralizado com estilo premium */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '22px', color: '#333', lineHeight: '1.5', margin: '0' }}>
          "Y lo hizo así. Noé hizo conforme a todo lo que Dios le mandó."
        </p>
        <div style={{ marginTop: '20px', fontWeight: '800', color: '#a78bfa', fontSize: '18px' }}>
          Génesis 6:22
        </div>
      </div>

      <button style={{
        marginTop: '30px',
        padding: '18px 40px',
        fontSize: '18px',
        backgroundColor: '#d1fae5',
        color: '#065f46',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'transform 0.2s'
      }}>
        Siguiente paso &gt;
      </button>
    </div>
  );
};

export default VerseModule;
