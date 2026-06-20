import React, { useState } from 'react';

const QuizModule = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState<'happy' | 'sad' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Aqui ficarão os dados do dia. 
  // Em uma estrutura futura, esses dados virão de uma API ou objeto de configuração.
  const questions = [
    { text: "¿Qué construyó Noé?", options: ['Una casa', 'Un arca', 'Un castillo'], correct: 'Un arca' },
    // ... adicione as outras 4 perguntas aqui
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correct) {
      setFeedback('happy');
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setFeedback(null);
        } else {
          // Finalizou o Quiz
          window.location.href = '/oracao'; // Navegação para a oração
        }
      }, 1000);
    } else {
      setFeedback('sad');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff9e6 0%, #d1f2ff 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', fontFamily: "'Quicksand', sans-serif"
    }}>
      {/* Feedback do Mascote */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={feedback === 'sad' ? "/mascote-triste.png" : "/mascote.png"} 
          alt="León" style={{ width: '120px' }} 
        />
        {feedback === 'sad' && <p style={{ color: '#e11d48', fontWeight: 'bold' }}>¡Intenta de nuevo!</p>}
        {feedback === 'happy' && <p style={{ color: '#16a34a', fontWeight: 'bold' }}>¡Muy bien!</p>}
      </div>

      {/* Card do Quiz */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', maxWidth: '500px', width: '100%' }}>
        <h3 style={{ color: '#333', textAlign: 'center' }}>{questions[currentQuestion].text}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          {questions[currentQuestion].options.map((option) => (
            <button 
              key={option} 
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '15px', borderRadius: '15px', fontSize: '16px', cursor: 'pointer',
                backgroundColor: selectedOption === option ? (option === questions[currentQuestion].correct ? '#dcfce7' : '#fee2e2') : '#f9fafb',
                border: selectedOption === option ? (option === questions[currentQuestion].correct ? '2px solid #22c55e' : '2px solid #ef4444') : '2px solid #e5e7eb'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizModule;
