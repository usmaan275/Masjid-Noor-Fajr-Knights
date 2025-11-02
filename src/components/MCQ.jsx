import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * MCQ.jsx
 * Props:
 *   - questions: array of question objects:
 *     {
 *       question: "...",
 *       options: ["A - ...", "B - ...", "C - ...", "D - ..."],
 *       answer: "Prophet Adam",
 *       explanation: "...",
 *       verse: "...",
 *       translation: "..."
 *     }
 *
 * Flow:
 * 1) Team selection (min 2, max 10)
 * 2) Show question + Mashwarah timer (10s)
 * 3) After timer -> show team grid for host to submit each team's choice (A/B/C/D)
 * 4) Reveal correctness, show verse/translation/explanation popup
 * 5) Next -> next question; after all questions show scoreboard
 */

const DEFAULT_TEAMS = [
  "Team 1: Abu Bakr As-Siddeeq \u0613",
  "Team 2: Umar ibn al-Khattab \u0613",
  "Team 3: Uthman ibn 'Affan \u0613",
  "Team 4: Ali ibn Abi Talib \u0613",
  "Team 5: Talhah ibn Ubaydullah \u0613",
  "Team 6: Zubayr ibn al-Awwam \u0613",
  "Team 7: Abdur-Rahman ibn 'Awf \u0613",
  "Team 8: Sa'd ibn Abi Waqqas \u0613",
  "Team 9: Sa'eed ibn Zayd \u0613",
  "Team 10: Abu 'Ubaidah ibn al-Jarrah \u0613"
];

function MCQ({ questions = [], title = "Fajr Knights — Quiz" }) {
  const [stage, setStage] = useState("teams"); // teams | question | selectTeams | reveal | finished
  const [availableTeams] = useState(DEFAULT_TEAMS);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [timer, setTimer] = useState(10);
  const timerRef = useRef(null);
  const [teamAnswers, setTeamAnswers] = useState({}); // { teamName: "A"|"B"|... }
  const [teamScores, setTeamScores] = useState({}); // { teamName: num }
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // when starting quiz: init scores and go to question stage
  const startQuiz = () => {
    // init scores
    const scores = {};
    selectedTeams.forEach((t) => (scores[t] = 0));
    setTeamScores(scores);
    setCurrentQIdx(0);
    setStage("question");
    setTimer(10);
  };

  // Function to skip timer instantly
  const skipTimer = () => {
    clearInterval(timerRef.current);
    setTimer(0);
    setStage("selectTeams");
  };

  // Timer effect for mashwarah period
  useEffect(() => {
    if (stage !== "question") return;

    // reset any previous
    clearInterval(timerRef.current);
    // Change timer duration here
    setTimer(20);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          // move to team answer selection
          setStage("selectTeams");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [stage, currentQIdx]);

  const toggleTeam = (team) => {
    setSelectedTeams((prev) => {
      if (prev.includes(team)) {
        return prev.filter((t) => t !== team);
      } else {
        if (prev.length >= 10) return prev; // max 10
        return [...prev, team];
      }
    });
  };

  const letterToOption = (q, letter) => {
    const map = { A: 0, B: 1, C: 2, D: 3 };
    const idx = map[letter];
    if (idx == null || !q.options[idx]) return "";
    return q.options[idx].trim(); // keep "A) Firawn"
  };
  

  const handleTeamPick = (team, letter) => {
    if (revealed) return; // can't change after reveal
    setTeamAnswers((prev) => ({ ...prev, [team]: letter }));
  };

  const allTeamsPicked = () => {
    return selectedTeams.every((t) => teamAnswers[t]);
  };

  const revealAnswers = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // calculate correctness and update scores
    const q = questions[currentQIdx];
    if (!q) return;
    const correctText = q.answer.trim();

    const updatedScores = { ...teamScores };

    selectedTeams.forEach((team) => {
      const chosenLetter = teamAnswers[team];
      if (!chosenLetter) return;
      const chosenText = letterToOption(q, chosenLetter);
      // Compare by inclusion or exact; normalize
      const normalizedChosen = chosenText.toLowerCase().replace(/[^\w\s]/g, "").trim();
      const normalizedAnswer = correctText.toLowerCase().replace(/[^\w\s]/g, "").trim();
      if (normalizedChosen.includes(normalizedAnswer) || normalizedAnswer.includes(normalizedChosen)) {
        updatedScores[team] = (updatedScores[team] || 0) + 1;
      }
    });

    setTeamScores(updatedScores);
    setRevealed(true);
    setStage("reveal");
  };

  const nextQuestion = () => {
    setRevealed(false);
    setTeamAnswers({});
    const nextIdx = currentQIdx + 1;
    if (nextIdx >= questions.length) {
      setStage("finished");
    } else {
      setCurrentQIdx(nextIdx);
      setStage("question");
      setTimer(10);
    }
  };

  // Scoreboard sorted
  const sortedScores = Object.entries(teamScores).sort((a, b) => b[1] - a[1]);

  // UI small helpers
  const q = questions[currentQIdx];

  return (
    <div className="mcq-container">
      <header className="mcq-header">
        <Link to="/home" className="back-button">Exit</Link>
        <h1 className="mcq-title">Fajr Knights Quiz</h1>
      </header>

      {stage === "teams" && (
        <div className="team-select">
          <h2>Select Teams (min 2 — max 10)</h2>
          <div className="team-list">
            {availableTeams.map((team) => {
              const checked = selectedTeams.includes(team);
              return (
                <label key={team} className={`team-item ${checked ? "selected" : ""}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTeam(team)}
                    disabled={!checked && selectedTeams.length >= 10}
                  />
                  <span className="team-name">{team}</span>
                </label>
              );
            })}
          </div>

          <div className="team-actions">
            <button
              className="start-button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                startQuiz();
              }}
              disabled={selectedTeams.length < 2}
            >
              Start Quiz ({selectedTeams.length} teams)
            </button>
          </div>
        </div>
      )}

      {stage === "question" && q && (
        <div className="question-phase">
          <div className="question-card">
            <div className="question-header">
              <h3>Question {currentQIdx + 1} / {questions.length}</h3>
              <div className="mashwarah">
                <div className="mash-title">Mashwarah time — consult with your peers</div>
                <div className="mash-timer">{timer}s</div>
              </div>
            </div>

            <div className="question-body">
              <div className="question-text">{q.question}</div>
              <div className="options-list">
                {q.options.map((opt, idx) => (
                  <div key={idx} className="option-card">
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="skip-button" onClick={skipTimer}>
              Skip Timer
          </button>
        </div>
      )}

      {stage === "selectTeams" && q && (
        <div className="select-phase">
          <div className="top-question-small">
            <div className="q-mini">{q.question}</div>
            <div className="q-mini-options">
              {q.options.map((o, idx) => (
                <div key={idx} className="mini-option">{o}</div>
              ))}
            </div>
          </div>

          <div
            className="teams-grid"
            style={{
              gridTemplateColumns: `repeat(${Math.min(4, Math.ceil(selectedTeams.length / 2))}, 1fr)`
            }}
          >
            {selectedTeams.map((team) => {
              const picked = teamAnswers[team] || null;
              return (
                <div key={team} className="team-card">
                  <div className="team-card-name">{team}</div>
                  <div className="team-choices">
                    {["A", "B", "C", "D"].map((letter) => (
                      <button
                        key={letter}
                        className={`team-choice ${picked === letter ? "picked" : ""}`}
                        onClick={() => handleTeamPick(team, letter)}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                  <div className="team-picked">
                    {picked ? `Picked: ${picked}` : "No pick yet"}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="select-actions">
            <button
              className="reveal-button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                revealAnswers();
              }}
              disabled={!allTeamsPicked()}
            >
              Reveal Answers
            </button>
          </div>
        </div>
      )}

      {stage === "reveal" && q && (
        <div className="reveal-phase">
          <div className="reveal-grid">
            {selectedTeams.map((team) => {
              const picked = teamAnswers[team];
              const chosenText = picked ? letterToOption(q, picked) : "(no pick)";
              const normalizedChosen = chosenText.toLowerCase().replace(/[^\w\s]/g, "").trim();
              const normalizedAnswer = q.answer.toLowerCase().replace(/[^\w\s]/g, "").trim();
              const correct = normalizedChosen && (normalizedChosen.includes(normalizedAnswer) || normalizedAnswer.includes(normalizedChosen));
              return (
                <div key={team} className={`reveal-team ${correct ? "correct" : "incorrect"}`}>
                  <div className="reveal-team-name">{team}</div>
                  <div className="reveal-team-text">{chosenText}</div>
                </div>
              );
            })}
          </div>

          <div className="explain-popup">
            <div className="verse">{q.verse || "— verse not provided —"}</div>
            <div className="translation">{q.translation || "— translation not provided —"}</div>
            <div className="explanation">{q.explanation || "— explanation not provided —"}</div>
          </div>

          <div className="reveal-actions">
            <button className="next-button" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });nextQuestion();}}>
              {currentQIdx + 1 >= questions.length ? "Finish & Scores" : "Next Question"}
            </button>
          </div>
        </div>
      )}

      {stage === "finished" && (
        <div className="scoreboard">
          <h2>Final Scores</h2>
          <div className="score-list">
            {sortedScores.map(([team, sc]) => (
              <div key={team} className="score-row">
                <span className="score-team">{team}</span>
                <span className="score-num">{sc}</span>
              </div>
            ))}
          </div>

          <div className="score-actions">
            <Link to="/home">
              <button className="home-button">Back to Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MCQ;
