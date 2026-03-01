'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// 冠詞題庫
const articles: Record<string, Record<string, Record<string, Record<string, string>>>> = {
  'definit Artikel': {
    der: {
      Nominativ: { Maskulin: 'der' },
      Akkusativ: { Maskulin: 'den' },
      Dativ: { Maskulin: 'dem' },
      Genitiv: { Maskulin: 'des' },
    },
    'die (Feminin)': {
      Nominativ: { Feminin: 'die' },
      Akkusativ: { Feminin: 'die' },
      Dativ: { Feminin: 'der' },
      Genitiv: { Feminin: 'der' },
    },
    das: {
      Nominativ: { Neutral: 'das' },
      Akkusativ: { Neutral: 'das' },
      Dativ: { Neutral: 'dem' },
      Genitiv: { Neutral: 'des' },
    },
    'die (Plural)': {
      Nominativ: { Plural: 'die' },
      Akkusativ: { Plural: 'die' },
      Dativ: { Plural: 'den' },
      Genitiv: { Plural: 'der' },
    },
  },
  'Undefinit Artikel': {
    der: {
      Nominativ: { Maskulin: 'ein' },
      Akkusativ: { Maskulin: 'einen' },
      Dativ: { Maskulin: 'einem' },
      Genitiv: { Maskulin: 'eines' },
    },
    'die (Feminin)': {
      Nominativ: { Feminin: 'eine' },
      Akkusativ: { Feminin: 'eine' },
      Dativ: { Feminin: 'einer' },
      Genitiv: { Feminin: 'einer' },
    },
    das: {
      Nominativ: { Neutral: 'ein' },
      Akkusativ: { Neutral: 'ein' },
      Dativ: { Neutral: 'einem' },
      Genitiv: { Neutral: 'eines' },
    },
    'die (Plural)': {
      Nominativ: { Plural: '-' },
      Akkusativ: { Plural: '-' },
      Dativ: { Plural: '-' },
      Genitiv: { Plural: '-' },
    },
  },
  'Negativer Artikel': {
    der: {
      Nominativ: { Maskulin: 'kein' },
      Akkusativ: { Maskulin: 'keinen' },
      Dativ: { Maskulin: 'keinem' },
      Genitiv: { Maskulin: 'keines' },
    },
    'die (Feminin)': {
      Nominativ: { Feminin: 'keine' },
      Akkusativ: { Feminin: 'keine' },
      Dativ: { Feminin: 'keiner' },
      Genitiv: { Feminin: 'keiner' },
    },
    das: {
      Nominativ: { Neutral: 'kein' },
      Akkusativ: { Neutral: 'kein' },
      Dativ: { Neutral: 'keinem' },
      Genitiv: { Neutral: 'keines' },
    },
    'die (Plural)': {
      Nominativ: { Plural: 'keine' },
      Akkusativ: { Plural: 'keine' },
      Dativ: { Plural: 'keinen' },
      Genitiv: { Plural: 'keiner' },
    },
  },
};

const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
const genders = ['Maskulin', 'Feminin', 'Neutral', 'Plural'];
const definiteArticles = ['der', 'die (Feminin)', 'das', 'die (Plural)'];

// 格位色碼
const caseColors: Record<string, string> = {
  Nominativ: '#e6edf3',
  Akkusativ: '#58a6ff',
  Dativ: '#f0883e',
  Genitiv: '#8b949e',
};

// 性別色碼
const genderColors: Record<string, string> = {
  Maskulin: '#58a6ff',
  Feminin: '#f778ba',
  Neutral: '#3fb950',
  Plural: '#8b949e',
};

interface Question {
  articleType: string;
  baseForm: string;
  caseKey: string;
  genderKey: string;
  answer: string;
}

function generateQuestion(): Question {
  const articleTypes = Object.keys(articles);
  let articleType: string, baseForm: string, caseKey: string, genderKey: string;

  do {
    articleType = articleTypes[Math.floor(Math.random() * articleTypes.length)];
    baseForm = definiteArticles[Math.floor(Math.random() * definiteArticles.length)];
    caseKey = cases[Math.floor(Math.random() * cases.length)];
    genderKey = genders[Math.floor(Math.random() * genders.length)];
  } while (
    !articles[articleType][baseForm][caseKey][genderKey] ||
    (articleType === 'definit Artikel' && caseKey === 'Nominativ') ||
    articles[articleType][baseForm][caseKey][genderKey] === '-'
  );

  return {
    articleType,
    baseForm,
    caseKey,
    genderKey,
    answer: articles[articleType][baseForm][caseKey][genderKey],
  };
}

export default function ArtikelQuiz() {
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

  const articleTypeClean = question.articleType.replace(' Artikel', '');

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
        <span style={{ color: '#8b949e' }}>artikel</span>
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
          Artikel Quiz
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
                Gib die korrekte Form des Artikels
              </p>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3' }}>
                {question.baseForm.replace(/ \(.*\)/, '')}
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                <span style={{ color: '#8b949e', fontWeight: 600 }}>
                  {articleTypeClean.charAt(0).toUpperCase() + articleTypeClean.slice(1)}
                </span>
                {question.articleType === 'definit Artikel' && <span style={{ marginLeft: '4px' }}>👈</span>}
                {question.articleType === 'Undefinit Artikel' && <span style={{ color: '#a371f7', marginLeft: '4px', fontWeight: 700 }}>1</span>}
                {question.articleType === 'Negativer Artikel' && <span style={{ color: '#f85149', marginLeft: '4px', fontWeight: 700 }}>0</span>}
                <span style={{ color: '#484f58', margin: '0 0.4rem' }}>,</span>
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
