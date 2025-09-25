import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Quiz.css";
import "./Theory.css";
import "./Home.css";
import quiz from "../assets/quiz.jpg";

const questions = [
  {
    question: "Trong chủ nghĩa Mác – Lênin, lý luận nhận thức duy vật biện chứng nghiên cứu vấn đề gì?",
    options: [
      "A.Sự hình thành các tôn giáo trong xã hội",
      "B.Khả năng nhận thức thế giới của con người thông qua hoạt động thực tiễn",
      "C.Cách con người sáng tạo ra ý thức độc lập với vật chất",
      "D.Các hiện tượng siêu hình không thể kiểm chứng"
    ],
    answer: 2,
  },
  {
    question: "Thực tiễn được hiểu là gì?",
    options: [
      "A.Hoạt động tinh thần của con người để phản ánh hiện thực",
      "B.Toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử – xã hội của con người nhằm cải biến tự nhiên và xã hội",
      "C.Các hoạt động giải trí, nghỉ ngơi của con người",
      "D.Toàn bộ hoạt động tưởng tượng và sáng tạo nghệ thuật của con người"
    ],
    answer: 2,
  },
  {
    question: "Ba hình thức cơ bản của thực tiễn là:",
    options: [
      "A.Hoạt động tinh thần, hoạt động sáng tạo nghệ thuật, hoạt động nhận thức lý luận",
      "B.Hoạt động sản xuất vật chất, hoạt động chính trị – xã hội, hoạt động thực nghiệm khoa học",
      "C.Hoạt động quân sự, hoạt động văn hóa, hoạt động giáo dục",
      "D.Hoạt động kinh tế, hoạt động tôn giáo, hoạt động khoa học tự nhiên"
    ],
    answer: 2,
  },
  {
    question: "Quan điểm duy vật biện chứng về nhận thức khẳng định điều nào sau đây?",
    options: [
      "A.Con người không thể nhận thức được bản chất thế giới",
      "B.Mọi tri thức đều có sẵn, không cần thực tiễn kiểm nghiệm",
      "C.Con người có khả năng nhận thức thế giới khách quan, không có cái gì là không thể nhận thức được, chỉ có cái chưa nhận thức được",
      "D.Thế giới vật chất tồn tại nhờ có ý thức con người"
    ],
    answer: 3,
  },
  {
    question: "Vì sao thực tiễn được coi là tiêu chuẩn của chân lý?",
    options: [
      "Vì thực tiễn mang tính khách quan và cho phép kiểm nghiệm tri thức của con người",
      "Vì thực tiễn là sản phẩm của ý thức con người",
      "Vì thực tiễn chỉ dừng lại ở hoạt động tinh thần",
      "Vì thực tiễn luôn bất biến, không thay đổi qua lịch sử"
    ],
    answer: 1,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeRecords, setTimeRecords] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [usedHelp, setUsedHelp] = useState(false); // mỗi câu chỉ 1 quyền
  const [fiftyFifty, setFiftyFifty] = useState([]); // lưu index đáp án bị loại

  useEffect(() => {
    if (timeLeft <= 0 || selectedAnswer !== null) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, selectedAnswer]);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);

    const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
    setTimeRecords([...timeRecords, elapsed]);

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

  // ===== CÁC QUYỀN TRỢ GIÚP =====
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

    // Chọn ngẫu nhiên 2 sai để loại
    const toRemove = wrongIndexes.sort(() => 0.5 - Math.random()).slice(0, 2);

    setFiftyFifty(toRemove);
    setTimeLeft(timeLeft + 5);
    setUsedHelp(true);
  };

  return (
    <>
      <Header />

      <section className="image-section">
        <div className="banner-content"></div>
        <img src={quiz} alt="Banner" className="lyluan" />
      </section>

      <div className="quiz-page">
        <div className="quiz-container">
          {currentQuestion < questions.length ? (
            <>
              <h2>Câu {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => {
                  const isDisabled =
                    fiftyFifty.includes(index) || selectedAnswer !== null;

                  return (
                    <button
                      key={index}
                      className={
                        selectedAnswer !== null
                          ? index === questions[currentQuestion].answer
                            ? "correct"
                            : index === selectedAnswer
                            ? "wrong"
                            : ""
                          : fiftyFifty.includes(index)
                          ? "disabled-option"
                          : ""
                      }
                      onClick={() =>
                        selectedAnswer === null && handleAnswer(index)
                      }
                      disabled={isDisabled}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className="quiz-footer">
                <span>⏳ Thời gian: {timeLeft}s</span>

                <div className="help-buttons">
                  <button
                    className="help-btn"
                    onClick={handleHelpFriend}
                    disabled={usedHelp || selectedAnswer !== null}
                  >
                    Hỗ trợ từ bạn bè (+15s)
                  </button>
                  <button
                    className="help-btn"
                    onClick={handleGoogle}
                    disabled={usedHelp || selectedAnswer !== null}
                  >
                    Google (+20s)
                  </button>
                  <button
                    className="help-btn"
                    onClick={handleFiftyFifty}
                    disabled={usedHelp || selectedAnswer !== null}
                  >
                    50:50 (+5s)
                  </button>
                </div>
              </div>

              {selectedAnswer !== null && (
                <>
                  <p className="feedback">
                    {selectedAnswer === questions[currentQuestion].answer
                      ? "✅ Chính xác!"
                      : "❌ Sai rồi!"}
                  </p>

                  {currentQuestion < questions.length - 1 ? (
                    <button className="next-btn" onClick={handleNext}>
                      Tiếp theo →
                    </button>
                  ) : (
                    <button className="next-btn" onClick={handleNext}>
                      Xem kết quả 🎉
                    </button>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="result">
              <h2>Kết thúc! 🎉</h2>
              <p>
                Điểm của bạn: {score}/{questions.length}
              </p>
              <h3>⏱️ Thời gian cho từng câu:</h3>
              <ul>
                {timeRecords.map((t, i) => (
                  <li key={i}>
                    Câu {i + 1}: {t}s
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section className="quote-section">
        <div className="quote-container">
          <blockquote className="quote">
            <p>
              "Thực tiễn cao hơn nhận thức lý thuyết vì nó không những có phẩm giá
              của tính phổ biến mà còn có phẩm giá của tính hiện thực trực tiếp."
            </p>
            <cite>- V.I.Lenin</cite>
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default Quiz;