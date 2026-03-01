'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// 所有格代名詞題庫
const pronouns: Record<string, Record<string, Record<string, string>>> = {
  ich: {
    Nominativ: { Maskulin: 'mein', Feminin: 'meine', Neutral: 'mein', Plural: 'meine' },
    Akkusativ: { Maskulin: 'meinen', Feminin: 'meine', Neutral: 'mein', Plural: 'meine' },
    Dativ: { Maskulin: 'meinem', Feminin: 'meiner', Neutral: 'meinem', Plural: 'meinen' },
    Genitiv: { Maskulin: 'meines', Feminin: 'meiner', Neutral: 'meines', Plural: 'meiner' },
  },
  du: {
    Nominativ: { Maskulin: 'dein', Feminin: 'deine', Neutral: 'dein', Plural: 'deine' },
    Akkusativ: { Maskulin: 'deinen', Feminin: 'deine', Neutral: 'dein', Plural: 'deine' },
    Dativ: { Maskulin: 'deinem', Feminin: 'deiner', Neutral: 'deinem', Plural: 'deinen' },
    Genitiv: { Maskulin: 'deines', Feminin: 'deiner', Neutral: 'deines', Plural: 'deiner' },
  },
  er: {
    Nominativ: { Maskulin: 'sein', Feminin: 'seine', Neutral: 'sein', Plural: 'seine' },
    Akkusativ: { Maskulin: 'seinen', Feminin: 'seine', Neutral: 'sein', Plural: 'seine' },
    Dativ: { Maskulin: 'seinem', Feminin: 'seiner', Neutral: 'seinem', Plural: 'seinen' },
    Genitiv: { Maskulin: 'seines', Feminin: 'seiner', Neutral: 'seines', Plural: 'seiner' },
  },
  'sie (she)': {
    Nominativ: { Maskulin: 'ihr', Feminin: 'ihre', Neutral: 'ihr', Plural: 'ihre' },
    Akkusativ: { Maskulin: 'ihren', Feminin: 'ihre', Neutral: 'ihr', Plural: 'ihre' },
    Dativ: { Maskulin: 'ihrem', Feminin: 'ihrer', Neutral: 'ihrem', Plural: 'ihren' },
    Genitiv: { Maskulin: 'ihres', Feminin: 'ihrer', Neutral: 'ihres', Plural: 'ihrer' },
  },
  es: {
    Nominativ: { Maskulin: 'sein', Feminin: 'seine', Neutral: 'sein', Plural: 'seine' },
    Akkusativ: { Maskulin: 'seinen', Feminin: 'seine', Neutral: 'sein', Plural: 'seine' },
    Dativ: { Maskulin: 'seinem', Feminin: 'seiner', Neutral: 'seinem', Plural: 'seinen' },
    Genitiv: { Maskulin: 'seines', Feminin: 'seiner', Neutral: 'seines', Plural: 'seiner' },
  },
  wir: {
    Nominativ: { Maskulin: 'unser', Feminin: 'unsere', Neutral: 'unser', Plural: 'unsere' },
    Akkusativ: { Maskulin: 'unseren', Feminin: 'unsere', Neutral: 'unser', Plural: 'unsere' },
    Dativ: { Maskulin: 'unserem', Feminin: 'unserer', Neutral: 'unserem', Plural: 'unseren' },
    Genitiv: { Maskulin: 'unseres', Feminin: 'unserer', Neutral: 'unseres', Plural: 'unserer' },
  },
  ihr: {
    Nominativ: { Maskulin: 'euer', Feminin: 'eure', Neutral: 'euer', Plural: 'eure' },
    Akkusativ: { Maskulin: 'euren', Feminin: 'eure', Neutral: 'euer', Plural: 'eure' },
    Dativ: { Maskulin: 'eurem', Feminin: 'eurer', Neutral: 'eurem', Plural: 'euren' },
    Genitiv: { Maskulin: 'eures', Feminin: 'eurer', Neutral: 'eures', Plural: 'eurer' },
  },
  'sie (they)': {
    Nominativ: { Maskulin: 'ihr', Feminin: 'ihre', Neutral: 'ihr', Plural: 'ihre' },
    Akkusativ: { Maskulin: 'ihren', Feminin: 'ihre', Neutral: 'ihr', Plural: 'ihre' },
    Dativ: { Maskulin: 'ihrem', Feminin: 'ihrer', Neutral: 'ihrem', Plural: 'ihren' },
    Genitiv: { Maskulin: 'ihres', Feminin: 'ihrer', Neutral: 'ihres', Plural: 'ihrer' },
  },
};

const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
const genders = ['Maskulin', 'Feminin', 'Neutral', 'Plural'];

const caseColors: Record<string, string> = {
  Nominativ: '#e6edf3',
  Akkusativ: '#58a6ff',
  Dativ: '#f0883e',
  Genitiv: '#8b949e',
};

const genderColors: Record<string, string> = {
  Maskulin: '#58a6ff',
  Feminin: '#f778ba',
  Neutral: '#3fb950',
  Plural: '#8b949e',
};

interface Question {
  pronoun: string;
  caseKey: string;
  genderKey: string;
  answer: string;
}

function generateQuestion(): Question {
  const pronounKeys = Object.keys(pronouns);
  const pronoun = pronounKeys[Math.floor(Math.random() * pronounKeys.length)];
  const caseKey = cases[Math.floor(Math.random() * cases.length)];
  const genderKey = genders[Math.floor(Math.random() * genders.length)];
  return { pronoun, caseKey, genderKey, answer: pronouns[pronoun][caseKey][genderKey] };
}

export default function PossessivpronomenQuiz() {
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
        <span style={{ color: '#8b949e' }}>possessivpronomen</span>
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
          Possessivpronomen Quiz
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
                Gib die korrekte Form des Possessivpronomens
              </p>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3' }}>
                {question.pronoun}
              </p>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: caseColors[question.caseKey], fontWeight: 700 }}>
                  {question.caseKey}
                </span>
                <span style={{ color: '#484f58', margin: '0 0.4rem' }}>,</span>
                <span style={{ color: genderColors[question.genderKey], fontWeight: 700 }}>
                  {question.genderKey}
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
