import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const questions = [
  {
    question: "Trong chủ nghĩa Mác – Lênin, lý luận nhận thức duy vật biện chứng nghiên cứu vấn đề gì?",
    options: [
      "A. Sự hình thành các tôn giáo trong xã hội",
      "B. Khả năng nhận thức thế giới của con người thông qua hoạt động thực tiễn",
      "C. Cách con người sáng tạo ra ý thức độc lập với vật chất",
      "D. Các hiện tượng siêu hình không thể kiểm chứng"
    ],
    answer: 1,
    explanation: "Lý luận nhận thức duy vật biện chứng tập trung nghiên cứu khả năng và quá trình con người nhận thức thế giới khách quan thông qua thực tiễn, khẳng định vai trò quyết định của hoạt động thực tiễn trong việc hình thành và phát triển tri thức."
  },
  {
    question: "Thực tiễn được hiểu là gì?",
    options: [
      "A. Hoạt động tinh thần của con người để phản ánh hiện thực",
      "B. Toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử – xã hội của con người nhằm cải biến tự nhiên và xã hội",
      "C. Các hoạt động giải trí, nghỉ ngơi của con người",
      "D. Toàn bộ hoạt động tưởng tượng và sáng tạo nghệ thuật của con người"
    ],
    answer: 1,
    explanation: "Thực tiễn là hoạt động vật chất có ý thức, mang tính xã hội, nhằm cải tạo tự nhiên và xã hội, phân biệt với hoạt động tinh thần hoặc giải trí thuần túy."
  },
  {
    question: "Ba hình thức cơ bản của thực tiễn là:",
    options: [
      "A. Hoạt động tinh thần, hoạt động sáng tạo nghệ thuật, hoạt động nhận thức lý luận",
      "B. Hoạt động sản xuất vật chất, hoạt động chính trị – xã hội, hoạt động thực nghiệm khoa học",
      "C. Hoạt động quân sự, hoạt động văn hóa, hoạt động giáo dục",
      "D. Hoạt động kinh tế, hoạt động tôn giáo, hoạt động khoa học tự nhiên"
    ],
    answer: 1,
    explanation: "Ba hình thức cơ bản của thực tiễn là sản xuất vật chất (cơ sở kinh tế), chính trị – xã hội (tổ chức xã hội) và thực nghiệm khoa học (nghiên cứu, kiểm chứng), vì chúng đại diện cho các hoạt động cải tạo thực tiễn."
  },
  {
    question: "Quan điểm duy vật biện chứng về nhận thức khẳng định điều nào sau đây?",
    options: [
      "A. Con người không thể nhận thức được bản chất thế giới",
      "B. Mọi tri thức đều có sẵn, không cần thực tiễn kiểm nghiệm",
      "C. Con người có khả năng nhận thức thế giới khách quan, không có cái gì là không thể nhận thức được, chỉ có cái chưa nhận thức được",
      "D. Thế giới vật chất tồn tại nhờ có ý thức con người"
    ],
    answer: 2,
    explanation: "Duy vật biện chứng khẳng định thế giới khách quan có thể nhận thức được thông qua thực tiễn và sự phát triển không ngừng của nhận thức, không có giới hạn tuyệt đối."
  },
  {
    question: "Vì sao thực tiễn được coi là tiêu chuẩn của chân lý?",
    options: [
      "Vì thực tiễn mang tính khách quan và cho phép kiểm nghiệm tri thức của con người",
      "Vì thực tiễn là sản phẩm của ý thức con người",
      "Vì thực tiễn chỉ dừng lại ở hoạt động tinh thần",
      "Vì thực tiễn luôn bất biến, không thay đổi qua lịch sử"
    ],
    answer: 0,
    explanation: "Thực tiễn là tiêu chuẩn của chân lý vì nó mang tính khách quan, cho phép kiểm chứng tri thức qua hoạt động thực tế, loại bỏ tính chủ quan và sai lầm."
  },
  {
    question: "Thực tiễn có bao nhiêu hình thức cơ bản?",
    options:[
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "Thực tiễn có ba hình thức cơ bản: hoạt động sản xuất vật chất, hoạt động chính trị – xã hội, và hoạt động thực nghiệm khoa học."
  },
  {
    question:"Theo lý luận nhận thức duy vật biện chứng, tiêu chuẩn duy nhất để kiểm tra chân lý là gì?",
    options:[
      "Ý kiến của đa số người",
      "Thực tiễn xã hội và sản xuất",
      "Lý luận logic thuần túy",
      "Trực giác cá nhân"
    ],
    answer: 1,
    explanation: "Thực tiễn là cơ sở và tiêu chuẩn của chân lý, vì nó cho phép kiểm chứng tính đúng đắn của nhận thức thông qua hoạt động thực tế của con người."
  },
  {
    question: "Chân lý trong duy vật biện chứng có tính chất gì?",
    options:[
      "Chỉ mang tính chất tuyệt đối, không thay đổi",
      "Chỉ mang tính chất tương đối, luôn thay đổi",
      "Mang tính thống nhất giữa tương đối và tuyệt đối",
      "Không có tính chất cụ thể, phụ thuộc vào ý thức chủ quan"
    ],
    answer: 2,
    explanation: "Chân lý là tuyệt đối về nguyên tắc (phù hợp với hiện thực khách quan) nhưng tương đối trong từng giai đoạn cụ thể do nhận thức con người phát triển không ngừng."
  },
  {
    question:"Các hình thức cơ bản của nhận thức cảm tính theo duy vật biện chứng bao gồm những gì?",
    options:[
      "Khái niệm, phán đoán và suy lý",
      "Cảm giác, tri giác và biểu tượng",
      "Lý thuyết, thực tiễn và mâu thuẫn",
      "Chân lý tương đối và chân lý tuyệt đối"
    ],
    answer: 1,
    explanation: "Nhận thức cảm tính là giai đoạn đầu tiên, bao gồm cảm giác (tiếp xúc trực tiếp), tri giác (hình ảnh tổng hợp) và biểu tượng (hình dung lại), làm nền tảng cho nhận thức lý tính."
  },
  {
    question: "Theo lý luận nhận thức duy vật biện chứng, mâu thuẫn trong nhận thực được hiểu như thế nào?",
    options:[
      "Là xung đột giữa các ý kiến cá nhân không thể giải quyết",
      "Là động lực thúc đẩy nhận thức phát triển thông qua việc giải quyết những bất cập giữa tri thức cũ và thực tiễn mới",
      "Là sự đối lập giữa lý thuyết và thực hành, không thể hòa hợp",
      "Là hiện tượng chỉ xuất hiện trong nhận thức lý tính, không liên quan đến thực tiễn"
    ],
    answer: 1,
    explanation: "Mâu thuẫn trong nhận thức là sự không phù hợp giữa tri thức hiện có và thực tiễn mới, thúc đẩy con người tìm kiếm, bổ sung, phát triển tri thức để giải quyết mâu thuẫn, từ đó nâng cao nhận thức."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeRecords, setTimeRecords] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [usedHelp, setUsedHelp] = useState(false);
  const [fiftyFifty, setFiftyFifty] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (timeLeft <= 0 || selectedAnswer !== null) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, selectedAnswer]);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);

    const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
    setTimeRecords([...timeRecords, elapsed]);
    setUserAnswers([...userAnswers, index]);

    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setTimeLeft(45);
    setQuestionStartTime(Date.now());
    setCurrentQuestion(currentQuestion + 1);
    setUsedHelp(false);
    setFiftyFifty([]);
  };

  const handleHelpFriend = () => {
    if (usedHelp) return;
    setTimeLeft(timeLeft + 15);
    setUsedHelp(true);
  };

  const handleGoogle = () => {
    if (usedHelp) return;
    setTimeLeft(timeLeft + 20);
    setUsedHelp(true);
  };

  const handleFiftyFifty = () => {
    if (usedHelp) return;
    const correctIndex = questions[currentQuestion].answer;
    let wrongIndexes = questions[currentQuestion].options
      .map((_, i) => i)
      .filter((i) => i !== correctIndex);

    const toRemove = wrongIndexes.sort(() => 0.5 - Math.random()).slice(0, 2);

    setFiftyFifty(toRemove);
    setTimeLeft(timeLeft + 5);
    setUsedHelp(true);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f9fa, #eef1f5)',
      padding: '2rem 1rem'
    }}>
 
      <div style={{
        maxWidth: '980px',
        margin: '0 auto',
        background: '#ffffff',
        padding: '3rem',
        borderRadius: '28px',
        boxShadow: '0 18px 50px rgba(0, 0, 0, 0.08)',
        position: 'relative'
      }}>
        {currentQuestion < questions.length ? (
          <>
            <h2 style={{
              fontSize: '2.1rem',
              margin: '0 0 1rem',
              background: 'linear-gradient(90deg, #6a0572, #e63946)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>Câu {currentQuestion + 1}</h2>
            
            <p style={{
              fontSize: '1.35rem',
              lineHeight: '1.55',
              fontWeight: '500',
              margin: '0 0 2rem',
              color: '#222',
              textAlign: 'center'
            }}>{questions[currentQuestion].question}</p>
            
            <div style={{
              display: 'grid',
              gap: '1.15rem',
              gridTemplateColumns: window.innerWidth > 760 ? '1fr 1fr' : '1fr'
            }}>
              {questions[currentQuestion].options.map((option, index) => {
                const isDisabled = fiftyFifty.includes(index) || selectedAnswer !== null;
                let buttonStyle = {
                  textAlign: 'left',
                  padding: '1.05rem 1.25rem',
                  border: '0',
                  borderRadius: '18px',
                  background: 'linear-gradient(145deg, #6a0572, #8d188f)',
                  color: '#fff',
                  fontSize: '1.07rem',
                  fontWeight: '500',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  lineHeight: '1.45',
                  boxShadow: '0 6px 18px -4px rgba(106, 5, 114, .35)',
                  transition: 'all 0.3s'
                };

                if (fiftyFifty.includes(index)) {
                  buttonStyle = {
                    ...buttonStyle,
                    background: '#e5e5e5',
                    color: '#999',
                    opacity: 0.6,
                    boxShadow: 'none'
                  };
                } else if (selectedAnswer !== null) {
                  if (index === questions[currentQuestion].answer) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: 'linear-gradient(145deg, #22c55e, #16a34a)',
                      boxShadow: '0 8px 22px -3px rgba(34, 197, 94, .45)'
                    };
                  } else if (index === selectedAnswer) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: 'linear-gradient(145deg, #dc2626, #b91c1c)',
                      boxShadow: '0 8px 22px -3px rgba(220, 38, 38, .45)'
                    };
                  }
                }

                return (
                  <button
                    key={index}
                    style={buttonStyle}
                    onClick={() => selectedAnswer === null && !isDisabled && handleAnswer(index)}
                    disabled={isDisabled}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '2.4rem',
              fontSize: '1.05rem',
              color: '#444'
            }}>
              <span style={{ fontWeight: '600', color: '#e63946' }}>
                ⏳ Thời gian: {timeLeft}s
              </span>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleHelpFriend}
                  disabled={usedHelp || selectedAnswer !== null}
                  style={{
                    background: 'linear-gradient(135deg, #3498db, #2980b9)',
                    color: '#fff',
                    fontWeight: '600',
                    padding: '.85rem 1.4rem',
                    border: 'none',
                    borderRadius: '14px',
                    cursor: (usedHelp || selectedAnswer !== null) ? 'not-allowed' : 'pointer',
                    transition: 'all .3s',
                    fontSize: '1rem',
                    opacity: (usedHelp || selectedAnswer !== null) ? 0.5 : 1,
                    minWidth: '140px'
                  }}
                >
                  Hỗ trợ từ bạn bè (+15s)
                </button>
                <button
                  onClick={handleGoogle}
                  disabled={usedHelp || selectedAnswer !== null}
                  style={{
                    background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                    color: '#fff',
                    fontWeight: '600',
                    padding: '.85rem 1.4rem',
                    border: 'none',
                    borderRadius: '14px',
                    cursor: (usedHelp || selectedAnswer !== null) ? 'not-allowed' : 'pointer',
                    transition: 'all .3s',
                    fontSize: '1rem',
                    opacity: (usedHelp || selectedAnswer !== null) ? 0.5 : 1,
                    minWidth: '140px'
                  }}
                >
                  Google (+20s)
                </button>
                <button
                  onClick={handleFiftyFifty}
                  disabled={usedHelp || selectedAnswer !== null}
                  style={{
                    background: 'linear-gradient(135deg, #f39c12, #d68910)',
                    color: '#fff',
                    fontWeight: '600',
                    padding: '.85rem 1.4rem',
                    border: 'none',
                    borderRadius: '14px',
                    cursor: (usedHelp || selectedAnswer !== null) ? 'not-allowed' : 'pointer',
                    transition: 'all .3s',
                    fontSize: '1rem',
                    opacity: (usedHelp || selectedAnswer !== null) ? 0.5 : 1,
                    minWidth: '140px'
                  }}
                >
                  50:50 (+5s)
                </button>
              </div>
            </div>

            {selectedAnswer !== null && (
              <>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginTop: '1.6rem',
                  color: '#6a0572',
                  textAlign: 'center'
                }}>
                  {selectedAnswer === questions[currentQuestion].answer
                    ? "✅ Chính xác!"
                    : "❌ Sai rồi!"}
                </p>

                <button
                  onClick={handleNext}
                  style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    fontSize: '1.1rem',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, #00b894, #55efc4)',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: '0.3s',
                    display: 'block',
                    margin: '15px auto 0'
                  }}
                >
                  {currentQuestion < questions.length - 1 ? "Tiếp theo →" : "Xem kết quả 🎉"}
                </button>
              </>
            )}
          </>
        ) : (
          <div>
            <h2 style={{
              fontSize: '2.3rem',
              margin: '0 0 1rem',
              background: 'linear-gradient(90deg, #6a0572, #e63946)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>Kết thúc! 🎉</h2>
            
            <p style={{
              fontSize: '1.4rem',
              textAlign: 'center',
              margin: '1.5rem 0 2.5rem',
              color: '#333'
            }}>
              Điểm của bạn: <strong style={{ color: '#e63946', fontSize: '1.6rem' }}>
                {score}/{questions.length}
              </strong>
            </p>
            
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                margin: '2rem 0 1.5rem',
                color: '#6a0572'
              }}>📊 Chi tiết kết quả:</h3>
              
              {questions.map((q, i) => {
                const userAns = userAnswers[i];
                const correctAns = q.answer;
                const isCorrect = userAns === correctAns;
                
                return (
                  <div key={i} style={{
                    background: isCorrect 
                      ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' 
                      : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    borderLeft: `5px solid ${isCorrect ? '#22c55e' : '#ef4444'}`,
                    transition: 'all 0.3s'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem',
                      fontSize: '1.05rem',
                      lineHeight: '1.5',
                      color: '#222',
                      gap: '1rem'
                    }}>
                      <div>
                        <strong>Câu {i + 1}:</strong> {q.question}
                      </div>
                      <span style={{
                        background: '#ffb703',
                        color: '#222',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}>
                        ⏱️ {timeRecords[i]}s
                      </span>
                    </div>
                    
                    <div style={{ margin: '1rem 0' }}>
                      <div style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        marginBottom: '0.6rem',
                        fontSize: '1rem',
                        background: isCorrect ? '#d1fae5' : '#fee2e2',
                        border: `2px solid ${isCorrect ? '#22c55e' : '#ef4444'}`,
                        color: isCorrect ? '#065f46' : '#991b1b'
                      }}>
                        <strong>Bạn chọn:</strong> {q.options[userAns]}
                      </div>
                      
                      {!isCorrect && (
                        <div style={{
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          background: '#d1fae5',
                          border: '2px solid #16a34a',
                          color: '#065f46'
                        }}>
                          <strong>Đáp án đúng:</strong> {q.options[correctAns]}
                        </div>
                      )}
                    </div>
                    
                    <div style={{
                      background: '#fff',
                      padding: '1rem',
                      borderRadius: '10px',
                      marginTop: '1rem',
                      border: '2px dashed #6a0572',
                      lineHeight: '1.6',
                      color: '#333'
                    }}>
                      <strong style={{ color: '#6a0572', display: 'block', marginBottom: '0.5rem' }}>
                        💡 Giải thích:
                      </strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div style={{
        maxWidth: '980px',
        margin: '2rem auto 0',
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px'
      }}>
        <blockquote style={{
          fontSize: '1.1rem',
          fontStyle: 'italic',
          color: '#555',
          lineHeight: '1.7',
          margin: 0
        }}>
          <p style={{ margin: '0 0 0.5rem' }}>
            "Thực tiễn cao hơn nhận thức lý thuyết vì nó không những có phẩm giá
            của tính phổ biến mà còn có phẩm giá của tính hiện thực trực tiếp."
          </p>
          <cite style={{ fontSize: '1rem', color: '#6a0572', fontWeight: '600' }}>
            - V.I.Lenin
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Quiz;