import React, { useState, useEffect, useRef } from 'react';
import { QuizMapRenderer } from './QuizMapRenderer';
import { quizCountries, type QuizCountryData } from '../data/quizCountries';
import { Map, Star, CheckCircle, XCircle } from 'lucide-react';

interface MapQuizProps {
  onBack: () => void;
}

type QuizState = 'idle' | 'playing' | 'finished';

// 配列をシャッフルするヘルパー関数
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const MapQuiz: React.FC<MapQuizProps> = ({ onBack }) => {
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [questions, setQuestions] = useState<QuizCountryData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string>(''); // 不正解時に正解を表示するため
  
  const inputRef = useRef<HTMLInputElement>(null);

  // オートフォーカス
  useEffect(() => {
    if (quizState === 'playing' && !feedback) {
      inputRef.current?.focus();
    }
  }, [quizState, currentIndex, feedback]);

  const startQuiz = (mode: '30' | 'all') => {
    let shuffled = shuffleArray(quizCountries);
    if (mode === '30') {
      shuffled = shuffled.slice(0, 30);
    }
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setInputValue('');
    setFeedback(null);
    setQuizState('playing');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '' && !feedback) {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
    const normalizedInput = inputValue.trim().replace(/\s+/g, '').toLowerCase(); // 空白除去
    
    // 登録されたいずれかの名前に完全一致すれば正解
    const isCorrect = currentQuestion.names.some(
      name => name.toLowerCase() === normalizedInput
    );

    if (isCorrect) {
      setFeedback('correct');
      setScore(prev => prev + 1);
    } else {
      setFeedback('incorrect');
      setCorrectAnswer(currentQuestion.names[0]); // メインの表示名をセット
    }

    // 1.5秒後に次の問題へ
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setInputValue('');
        setFeedback(null);
      } else {
        setQuizState('finished');
      }
    }, 1500);
  };

  const currentCountry = quizState === 'playing' ? questions[currentIndex] : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', position: 'relative' }}>
      {/* ヘッダー */}
      <header style={{ 
        padding: '10px 20px', 
        backgroundColor: '#2e8b57', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={onBack}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.5)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← 戻る
          </button>
          <h2 style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Map size={20} /> 地図クイズ
          </h2>
        </div>
        
        {quizState === 'playing' && (
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            {currentIndex + 1} / {questions.length} 問中
            <span style={{ marginLeft: '20px', color: '#ffeb3b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={16} fill="#ffeb3b" color="#ffeb3b" /> スコア: {score}
            </span>
          </div>
        )}
      </header>

      {/* メインエリア */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        {/* 背景の地図描画（常に存在させておくことでチラつきを防ぐ） */}
        <QuizMapRenderer targetCountryId={currentCountry?.id || null} />

        {/* コース選択画面 */}
        {quizState === 'idle' && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>世界の国名 当てクイズ</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#666' }}>
              赤くハイライトされた国の名前をタイピングしよう！
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button 
                onClick={() => startQuiz('30')}
                style={{
                  padding: '15px 30px',
                  fontSize: '1.2rem',
                  backgroundColor: '#0056b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                ランダム 30問テスト
              </button>
              <button 
                onClick={() => startQuiz('all')}
                style={{
                  padding: '15px 30px',
                  fontSize: '1.2rem',
                  backgroundColor: '#8b0000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                ランダム 全問テスト ({quizCountries.length}問)
              </button>
            </div>
          </div>
        )}

        {/* 終了画面 */}
        {quizState === 'finished' && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>クイズ終了！</h2>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2e8b57', marginBottom: '2rem' }}>
              {score} / {questions.length} 正解
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button 
                onClick={() => setQuizState('idle')}
                style={{
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  backgroundColor: '#0056b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                もう一度遊ぶ
              </button>
              <button 
                onClick={onBack}
                style={{
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                学習に戻る
              </button>
            </div>
          </div>
        )}

        {/* クイズ入力UI (フローティング) */}
        {quizState === 'playing' && (
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            padding: '20px 40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            zIndex: 30,
            minWidth: '400px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
              赤く塗られた国はどこ？
            </div>
            
            <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <input 
                ref={inputRef}
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={feedback !== null}
                placeholder="国名を入力してEnter..."
                style={{
                  flexGrow: 1,
                  padding: '12px 16px',
                  fontSize: '1.2rem',
                  border: '2px solid #ccc',
                  borderRadius: '8px',
                  outline: 'none',
                  borderColor: feedback === 'correct' ? '#4caf50' : feedback === 'incorrect' ? '#f44336' : '#ccc'
                }}
              />
              <button
                onClick={checkAnswer}
                disabled={inputValue.trim() === '' || feedback !== null}
                style={{
                  padding: '0 24px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  backgroundColor: inputValue.trim() === '' ? '#ccc' : '#2e8b57',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: inputValue.trim() === '' ? 'default' : 'pointer'
                }}
              >
                答える
              </button>
            </div>

            {/* フィードバック表示 */}
            <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {feedback === 'correct' && (
                <span style={{ color: '#4caf50', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={28} color="#4caf50" /> 正解！
                </span>
              )}
              {feedback === 'incorrect' && (
                <span style={{ color: '#f44336', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <XCircle size={24} color="#f44336" /> 残念... 正解は「{correctAnswer}」
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
