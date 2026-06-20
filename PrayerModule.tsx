import React from 'react';

const PrayerModule = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff9e6 0%, #d1f2ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Quicksand', sans-serif",
      position: 'relative'
    }}>
      {/* Estrelinhas decorativas */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', fontSize: '24px' }}>✨</div>
      <div style={{ position: 'absolute', bottom: '15%', right: '10%', fontSize: '24px' }}>✨</div>

      <h2 style={{ color: '#4a3728', marginBottom: '10px' }}>Momento de Oración</h2>
      <p style={{ color: '#666', marginBottom: '30px', textAlign: 'center' }}>
        Cierra tus ojitos, junta tus manitas y repite conmigo...
      </p>

      {/* Mascote de olhos fechados */}
      <div style={{ marginBottom: '20px' }}>
        <img src="/mascote-orando.png" alt="León Orando" style={{ width: '150px' }} />
      </div>

      {/* Card da Oração */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '22px', color: '#333', lineHeight: '1.6', margin: '0' }}>
          "Diosito, quiero confiar en ti como Abraham."
        </p>
      </div>

      <button style={{
        marginTop: '40px',
        padding: '18px 50px',
        fontSize: '20px',
        backgroundColor: '#a78bfa',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(167, 139, 250, 0.3)',
        transition: 'transform 0.2s'
      }}>
        ¡Amén! ✨
      </button>
    </div>
  );
};

export default PrayerModule;

