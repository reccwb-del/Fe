import React, { useState } from 'react';

const MissionModule = () => {
  const [completed, setCompleted] = useState(false);
  const stars = 67; // Exemplo de contador de estrelas

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
      {!completed ? (
        <>
          <h2 style={{ color: '#4a3728', marginBottom: '20px' }}>Misión del Día</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <img src="/mascote.png" alt="León" style={{ width: '120px' }} />
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#333', marginBottom: '15px' }}>"Cuéntale a un amiguito que Dios siempre cumple sus promesas."</h3>
          </div>

          <button 
            onClick={() => setCompleted(true)}
            style={{
              marginTop: '30px',
              padding: '18px 40px',
              fontSize: '18px',
              backgroundColor: '#34d399',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
            ¡Misión cumplida!
          </button>
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#4a3728' }}>¡Felicidades!</h2>
          <p style={{ fontSize: '18px', color: '#555', margin: '20px 0' }}>
            ¡Has aprendido más sobre la fe hoy! <br/> 
            Tu tesoro ahora tiene <strong>{stars} estrellas</strong>.
          </p>
          <img src="/mascote.png" alt="León Feliz" style={{ width: '100px', margin: '20px 0' }} />
        </div>
      )}
    </div>
  );
};

export default MissionModule;
