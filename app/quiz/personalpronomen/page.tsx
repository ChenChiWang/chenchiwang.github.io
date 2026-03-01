'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// 人稱代名詞題庫
const pronouns: Record<string, Record<string, string>> = {
  ich:          { Nominativ: 'ich',  Akkusativ: 'mich', Dativ: 'mir' },
  du:           { Nominativ: 'du',   Akkusativ: 'dich', Dativ: 'dir' },
  er:           { Nominativ: 'er',   Akkusativ: 'ihn',  Dativ: 'ihm' },
  'sie (she)':  { Nominativ: 'sie',  Akkusativ: 'sie',  Dativ: 'ihr' },
  es:           { Nominativ: 'es',   Akkusativ: 'es',   Dativ: 'ihm' },
  wir:          { Nominativ: 'wir',  Akkusativ: 'uns',  Dativ: 'uns' },
  ihr:          { Nominativ: 'ihr',  Akkusativ: 'euch', Dativ: 'euch' },
  'sie (they)': { Nominativ: 'sie',  Akkusativ: 'sie',  Dativ: 'ihnen' },
};

// 僅練習 Akkusativ 和 Dativ
const cases = ['Akkusativ', 'Dativ'];

const caseColors: Record<string, string> = {
  Akkusativ: '#58a6ff',
  Dativ: '#f0883e',
};

interface Question {
  pronoun: string;
  caseKey: string;
  answer: string;
}

function generateQuestion(): Question {
  const pronounKeys = Object.keys(pronouns);
  const pronoun = pronounKeys[Math.floor(Math.random() * pronounKeys.length)];
  const caseKey = cases[Math.floor(Math.random() * cases.length)];
  return { pronoun, caseKey, answer: pronouns[pronoun][caseKey] };
}

export default function PersonalpronomenQuiz() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const [ended, setEnded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const nextQuestion = useCallback(() => {
    setQuestion(generateQuestion());
    setInput('');
    setFeedback(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  useEffect(() => {
    nextQuestion();
  }, [nextQuestion]);

  function submitAnswer() {
    if (!question || !input.trim()) return;

    if (input.trim().toLowerCase() === question.answer.toLowerCase()) {
      setFeedback({ correct: true, message: 'Richtig!' });
      setTimeout(nextQuestion, 1000);
    } else {
      setFeedback({ correct: false, message: `Falsch! Die richtige Antwort ist: ${question.answer}` });
      setTimeout(nextQuestion, 2000);
    }
  }

  if (!question) return null;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Breadcrumb */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.82rem',
          color: '#484f58',
          marginBottom: '2rem',
        }}
      >
        <Link href="/" style={{ color: '#58a6ff', textDecoration: 'none' }}>~</Link>
        {' / '}
        <Link href="/quiz" style={{ color: '#58a6ff', textDecoration: 'none' }}>quiz</Link>
        {' / '}
        <span style={{ color: '#8b949e' }}>personalpronomen</span>
      </div>

      {/* Quiz card */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '2.5rem',
          maxWidth: '480px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            color: '#e6edf3',
            marginBottom: '2rem',
          }}
        >
          Personalpronomen Quiz
        </h1>

        {ended ? (
          <div>
            <p style={{ color: '#3fb950', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Danke furs Uben! Auf Wiedersehen!
            </p>
            <button
              onClick={() => { setEnded(false); nextQuestion(); }}
              style={{
                padding: '0.6rem 1.5rem',
                background: '#238636',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
              }}
            >
              Nochmal
            </button>
          </div>
        ) : (
          <>
            {/* 題目 */}
            <div style={{ marginBottom: '1.5rem', lineHeight: 2 }}>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Gib die korrekte Form des Personalpronomens
              </p>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3' }}>
                {question.pronoun}
              </p>
              <p>
                <span style={{ color: caseColors[question.caseKey], fontWeight: 700, fontSize: '1rem' }}>
                  {question.caseKey}
                </span>
              </p>
            </div>

            {/* 輸入 */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') submitAnswer(); }}
              placeholder="Antwort eingeben"
              autoComplete="off"
              style={{
                width: '80%',
                padding: '0.6rem 1rem',
                fontSize: '1rem',
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '6px',
                color: '#e6edf3',
                outline: 'none',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '1rem',
              }}
            />

            {/* 按鈕 */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                onClick={submitAnswer}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: '#238636',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                }}
              >
                Senden
              </button>
              <button
                onClick={() => setEnded(true)}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: '#da3633',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                }}
              >
                Beenden
              </button>
            </div>

            {/* 回饋 */}
            {feedback && (
              <p
                style={{
                  marginTop: '1.25rem',
                  fontWeight: 700,
                  color: feedback.correct ? '#3fb950' : '#f85149',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.95rem',
                }}
              >
                {feedback.message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
