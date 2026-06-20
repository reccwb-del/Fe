import React, { useState } from 'react';

const QuizModule = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const questions = [
    { id: 1, text: "¿Qué construyó Noé?", options: ['Una casa', 'Un arca', 'Un castillo'], correct: 'Un arca' },
    { id: 2, text: "¿Quién guió al pueblo de Israel?", options: ['Moisés', 'David', 'Pedro'], correct: 'Moisés' },
    { id: 3, text: "¿Quién creó el mundo?", options: ['Dios', 'Noé', 'Los ángeles'], correct: 'Dios' },
    { id: 4, text: "¿Cuántos días llovió?", options: ['10 días', '40 días', '7 días'], correct: '40 días' },
    { id: 5, text: "¿Qué apareció en el cielo?", options: ['Un arcoíris', 'Una estrella', 'Una nube'], correct: 'Un arcoíris' }
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correct) {
      // Avança após 1 segundo para o usuário ver a cor verde
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
        }
      }, 1000);
    }
  };

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
      <div style={{ position: 'absolute', top: '10%', left: '15%', fontSize: '24px' }}>✨</div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', fontSize: '24px' }}>✨</div>

      <h2 style={{ color: '#4a3728', marginBottom: '10px' }}>¿Cuánto Aprendimos?</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Pregunta {currentQuestion + 1} de {questions.length}</p>

      <div style={{ marginBottom: '20px' }}>
        <img src="/mascote.png" alt="León" style={{ width: '120px' }} />
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#333', marginBottom: '20px' }}>{questions[currentQuestion].text}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)} style={{
              padding: '15px',
              borderRadius: '15px',
              border: selectedOption === option ? '2px solid #22c55e' : '2px solid #e5e7eb',
              backgroundColor: selectedOption === option ? '#dcfce7' : '#f9fafb',
              fontSize: '16px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.3s'
            }}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizModule;

