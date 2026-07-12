import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        color: '#00d4ff', 
        textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' 
      }}>BioPulse</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        منصة اختبارات أحياء الثانوية العامة 2027
      </p>
      <button style={{
        marginTop: '30px',
        padding: '15px 30px',
        backgroundColor: 'transparent',
        border: '2px solid #00d4ff',
        color: '#00d4ff',
        borderRadius: '50px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        boxShadow: '0 0 10px #00d4ff'
      }}>
        بدء الرحلة التعليمية
      </button>
    </div>
  );
}

