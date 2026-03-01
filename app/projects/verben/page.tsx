import Link from 'next/link';

// 色彩常數
const colors = {
  bg: '#0d1117',
  surface: '#161b22',
  border: '#30363d',
  text: '#e6edf3',
  muted: '#8b949e',
  accent: '#58a6ff',
  green: '#3fb950',
  orange: '#f0883e',
  red: '#f85149',
  purple: '#a371f7',
};

export default function VerbenPage() {
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
        <Link href="/" style={{ color: colors.accent, textDecoration: 'none' }}>~</Link>
        {' / '}
        <Link href="/projects" style={{ color: colors.accent, textDecoration: 'none' }}>projects</Link>
        {' / '}
        <span style={{ color: colors.muted }}>verben</span>
      </div>

      {/* Main header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #161b22, #1a3a4a)',
          padding: '2.5rem 1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          border: `1px solid ${colors.border}`,
          marginBottom: '2rem',
        }}
      >
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: colors.text,
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          德文動詞攻略
        </h1>
        <p style={{ color: colors.muted, fontSize: '1rem', marginTop: '0.5rem' }}>
          A1-B1 德語二向箔
        </p>
      </div>

      {/* 一、降維打擊 Path */}
      <Section color={colors.accent} title="一、降維打擊 Path">
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <LevelCard
            level="A1"
            subtitle="基礎根基 (Basis)"
            color={colors.accent}
            items={[
              'Konjugation: 規則與不規則變位',
              'Hilfsverben: haben / sein / werden',
              'Modalverben: 情態動詞變位與用法',
              'Trennbare Verben: 可分動詞結構',
            ]}
          />
          <LevelCard
            level="A2"
            subtitle="敘述與關係 (Beziehung)"
            color={colors.orange}
            items={[
              'Perfekt: 現在完成式與 Partizip II',
              'Reflexive Verben: 反身動詞格位判定',
              'Präpositionalergänzung: 介係詞固定搭配',
              'Präteritum: 基礎過去式 (war / hatte)',
            ]}
          />
          <LevelCard
            level="B1"
            subtitle="邏輯與修飾 (Logik)"
            color={colors.green}
            items={[
              'Passiv: 被動語態 (Vorgangspassiv)',
              'Konjunktiv II: 虛擬二式 (願望/禮貌)',
              'Infinitiv mit zu: 不定式結構句型',
              'Relativsätze: 關係子句結構',
            ]}
          />
        </div>
      </Section>

      {/* 二、Reflexive Verben */}
      <Section color={colors.orange} title="二、Reflexive Verben：受格 (Akk) vs 與格 (Dat)">
        {/* 提示區 */}
        <div
          style={{
            background: 'rgba(240,136,62,0.08)',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            border: `1px dashed rgba(240,136,62,0.4)`,
            marginBottom: '1.25rem',
            fontSize: '0.9rem',
            color: colors.muted,
            lineHeight: 1.8,
          }}
        >
          <strong style={{ color: colors.orange }}>受詞位子的佔用</strong><br />
          {'• 行為只作用於「主體自身」 ➔ 使用 '}
          <strong style={{ color: colors.red }}>Akkusativ</strong><br />
          {'• 句子出現「第二受詞 (物/部位)」 ➔ 反身代名詞轉為 '}
          <strong style={{ color: colors.accent }}>Dativ</strong>
        </div>

        {/* 真反身 vs 假反身 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ background: colors.surface, padding: '1rem', borderRadius: '8px', borderLeft: `4px solid ${colors.orange}` }}>
            <strong style={{ color: colors.orange }}>真反身 (Echte)</strong><br />
            <small style={{ color: colors.muted }}>反身代名詞是動詞不可或缺的一部分。</small>
            <p style={{ fontSize: '0.85rem', margin: '0.5rem 0', color: colors.muted }}>
              • <em>sich beeilen</em> (趕快)<br />
              • <em>sich konzentrieren</em> (專心)<br />
              • <em>sich schämen</em> (慚愧)
            </p>
          </div>
          <div style={{ background: colors.surface, padding: '1rem', borderRadius: '8px', borderLeft: `4px solid ${colors.orange}` }}>
            <strong style={{ color: colors.orange }}>假反身 (Unechte)</strong><br />
            <small style={{ color: colors.muted }}>可反身使用，也可作用於他人/物。</small>
            <p style={{ fontSize: '0.85rem', margin: '0.5rem 0', color: colors.muted }}>
              • <em>sich waschen</em> (洗自己) ➔ <em>jdn. waschen</em><br />
              • <em>sich kämmen</em> (梳頭) ➔ <em>jdn. kämmen</em><br />
              • <em>sich anziehen</em> (穿衣) ➔ <em>jdn. anziehen</em>
            </p>
          </div>
        </div>

        {/* 表格 */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: colors.orange }}>
                <th style={thStyle}>格位類型 (Kasus)</th>
                <th style={thStyle}>經典例句對比</th>
                <th style={thStyle}>語意邏輯 (Logik)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Akkusativ</strong></td>
                <td style={tdStyle}><em>Ich wasche <strong>mich</strong>.</em></td>
                <td style={tdStyle}>主體與動作受體為同一人。</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Dativ</strong></td>
                <td style={tdStyle}><em>Ich wasche <strong>mir</strong> <span style={{ color: colors.red }}>die Hände</span>.</em></td>
                <td style={tdStyle}>「手」佔據 Akk，「我」變為受益者。</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Dativ 心理</strong></td>
                <td style={tdStyle}><em>Ich stelle <strong>mir</strong> das vor.</em></td>
                <td style={tdStyle}><strong>sich vorstellen</strong>: 「想像」必用 Dativ。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link
            href="/projects/Deutsch Verben Reflexive"
            style={linkBtnStyle(colors.orange)}
          >
            反身動詞清單 →
          </Link>
        </div>
      </Section>

      {/* 三、Verben mit Dativ */}
      <Section color={colors.purple} title="三、Verben mit Dativ">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {[
            { icon: '🤝', label: '社交 (Soziales)', items: 'danken, gratulieren, verzeihen' },
            { icon: '⚖️', label: '損益 (Nutzen)', items: 'helfen, schaden, nützen, beistehen' },
            { icon: '🧠', label: '感受 (Gefühl)', items: 'gefallen, schmecken, fehlen, einfallen' },
            { icon: '💬', label: '觀點 (Meinung)', items: 'vertrauen, glauben, zustimmen, raten' },
            { icon: '🏠', label: '歸屬 (Status)', items: 'gehören, ähneln, vorkommen' },
            { icon: '🏃', label: '反應 (Reaktion)', items: 'folgen, ausweichen, begegnen' },
          ].map(({ icon, label, items }) => (
            <div
              key={label}
              style={{
                background: 'rgba(163,113,247,0.06)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(163,113,247,0.2)',
              }}
            >
              <strong style={{ color: colors.purple }}>{icon} {label}</strong><br />
              <small style={{ color: colors.muted }}>{items}</small>
            </div>
          ))}
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: colors.purple }}>
                <th style={thStyle}>雙賓動詞類型</th>
                <th style={thStyle}>語意對比 (Dat / Akk)</th>
                <th style={thStyle}>專業例句範例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Schenken / Geben</strong></td>
                <td style={tdStyle}>人 (Dativ) + 物 (Akk)</td>
                <td style={tdStyle}><em>Er schenkt <strong>ihr</strong> einen Ring.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link
            href="/projects/Deutsch Verben mit Dativ"
            style={linkBtnStyle(colors.purple)}
          >
            Dativ 動詞清單 →
          </Link>
        </div>
      </Section>

      {/* 四、Verben mit Präpositionalergänzung */}
      <Section color={colors.red} title="四、Verben mit Präpositionalergänzung">
        <div
          style={{
            background: 'rgba(248,81,73,0.06)',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            borderLeft: `4px solid ${colors.red}`,
            marginBottom: '1.25rem',
            fontSize: '0.9rem',
            color: colors.muted,
            lineHeight: 1.8,
          }}
        >
          <strong style={{ color: colors.text }}>Pronominaladverbien：提問與代稱邏輯</strong><br />
          {'對物提問：'}
          <strong>Wo + (r) + 介係詞</strong>
          {' | 答案代稱：'}
          <strong>Da + (r) + 介係詞</strong><br />
          <em>Worauf freust du dich? ➔ Ich freue mich <strong>darauf</strong>.</em>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: colors.red }}>
                <th style={thStyle}>搭配 (Präp. + Kasus)</th>
                <th style={thStyle}>高頻動詞 (Beispiele)</th>
                <th style={thStyle}>提問句 (Fragen)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>auf + Akk</strong></td>
                <td style={tdStyle}>warten, freuen, hoffen, achten</td>
                <td style={tdStyle}>Worauf? / Auf wen?</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>an + Akk</strong></td>
                <td style={tdStyle}>denken, glauben, sich erinnern</td>
                <td style={tdStyle}>Woran? / An wen?</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>mit + Dat</strong></td>
                <td style={tdStyle}>anfangen, telefonieren, aufhören</td>
                <td style={tdStyle}>Womit? / Mit wem?</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>von + Dat</strong></td>
                <td style={tdStyle}>träumen, abhängen, erzählen</td>
                <td style={tdStyle}>Wovon? / Von wem?</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 比較區 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '1.25rem' }}>
          {[
            { label: 'Freuen (時間)', desc: 'auf (未來期待) | über (現狀/過去高興)' },
            { label: 'Sprechen (細節)', desc: '過於詳細 (über) | 略微提到 (von)' },
            { label: 'Sorgen (本質)', desc: 'für (提供生活所需) | um (心理上的擔心)' },
          ].map(({ label, desc }) => (
            <div
              key={label}
              style={{
                background: colors.surface,
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                borderTop: `3px solid ${colors.red}`,
              }}
            >
              <strong style={{ color: colors.red }}>{label}</strong><br />
              <small style={{ color: colors.muted }}>{desc}</small>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link
            href="/projects/Deutsch Verben mit Präpositionalergänzung"
            style={linkBtnStyle(colors.red)}
          >
            介係詞搭配清單 →
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          color: '#484f58',
          fontSize: '0.8rem',
          borderTop: `1px solid ${colors.border}`,
          paddingTop: '1.25rem',
        }}
      >
        <em>IloveCCW - Your German Learning Thought Partner</em>
      </div>

      {/* Back */}
      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: `1px solid ${colors.border}` }}>
        <Link
          href="/projects"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: colors.accent,
            textDecoration: 'none',
          }}
        >
          ← back to projects
        </Link>
      </div>
    </div>
  );
}

// 子元件

function Section({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: colors.surface,
        padding: '1.5rem',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`,
        borderLeft: `4px solid ${color}`,
        marginBottom: '1.5rem',
      }}
    >
      <h2
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1.15rem',
          fontWeight: 700,
          color,
          marginTop: 0,
          marginBottom: '1.25rem',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function LevelCard({ level, subtitle, color, items }: { level: string; subtitle: string; color: string; items: string[] }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '240px',
        background: `${color}08`,
        padding: '1rem',
        borderRadius: '8px',
        border: `1px solid ${color}30`,
      }}
    >
      <h3 style={{ color, margin: '0 0 0.5rem', fontSize: '0.95rem' }}>
        {level}：{subtitle}
      </h3>
      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.82rem', margin: 0, color: colors.muted, lineHeight: 1.8 }}>
        {items.map((item) => (
          <li key={item}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
        ))}
      </ul>
    </div>
  );
}

// 共用樣式

const thStyle: React.CSSProperties = {
  padding: '0.7rem 1rem',
  textAlign: 'left',
  fontSize: '0.85rem',
  color: '#fff',
  fontWeight: 700,
  fontFamily: "'JetBrains Mono', monospace",
};

const tdStyle: React.CSSProperties = {
  padding: '0.6rem 1rem',
  borderBottom: `1px solid ${colors.border}`,
  fontSize: '0.88rem',
  color: colors.muted,
};

function linkBtnStyle(color: string): React.CSSProperties {
  return {
    display: 'inline-block',
    padding: '0.5rem 1.25rem',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.82rem',
    color,
    background: `${color}10`,
    border: `1px solid ${color}40`,
    fontFamily: "'JetBrains Mono', monospace",
  };
}
