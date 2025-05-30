'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: "branche",
    question: "Wat is de branche van je bedrijf?",
    type: "select",
    options: ["Marketing", "Logistiek", "Zorg", "Bouw", "Onderwijs", "Anders"]
  },
  {
    id: "team_size",
    question: "Hoeveel medewerkers zijn er?",
    type: "select",
    options: ["1-5", "6-20", "21-50", "51+"]
  },
  {
    id: "afdelingen",
    question: "Welke afdelingen zijn actief?",
    type: "checkbox",
    options: ["Klantenservice", "Marketing", "Verkoop", "Productie", "HR", "Anders"]
  },
  {
    id: "taken",
    question: "Welke handmatige taken kosten nu veel tijd?",
    type: "checkbox",
    options: ["E-mails verwerken", "Rapportages maken", "Content schrijven", "Planningen of offertes", "Facturatie", "Klantvragen"]
  },
  {
    id: "tools",
    question: "Welke tools gebruikt je team?",
    type: "checkbox",
    options: ["Excel", "Outlook", "Google Workspace", "Slack / Teams", "CRM"]
  },
  {
    id: "doel",
    question: "Wat wil je vooral bereiken met AI?",
    type: "select",
    options: ["Tijdbesparing", "Kosten verlagen", "Kwaliteit verbeteren", "Sneller werken", "Minder personeel nodig"]
  },
  {
    id: "ervaring",
    question: "Hoeveel ervaring heeft je team al met AI?",
    type: "select",
    options: ["Geen", "Een beetje geprobeerd", "We gebruiken al wat", "We zijn gevorderd"]
  }
];

const IntakePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [direction, setDirection] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const handleAnswer = (value: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [steps[currentStep].id]: value,
    }));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const currentQuestion = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const hasAnswer = answers[currentQuestion.id];

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showResult ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Jouw actieplan is klaar!</h2>
            <p className="mb-8 text-gray-700 text-center">Hieronder vind je een samenvatting van je antwoorden. Dit kan straks gebruikt worden voor een AI-actieplan.</p>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id}>
                  <div className="font-semibold text-gray-800 mb-1">{step.question}</div>
                  <div className="text-gray-700">
                    {Array.isArray(answers[step.id])
                      ? (answers[step.id] as string[]).length > 0
                        ? (answers[step.id] as string[]).join(', ')
                        : <span className="italic text-gray-400">Geen antwoord</span>
                      : answers[step.id] || <span className="italic text-gray-400">Geen antwoord</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => { setShowResult(false); setCurrentStep(0); setAnswers({}); }}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Opnieuw invullen
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-200">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Question counter */}
          <div className="text-center py-4 text-gray-800">
            Vraag {currentStep + 1} van {steps.length}
          </div>

          {/* Main content */}
          <div className="flex-1 flex items-center justify-center px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    {currentQuestion.question}
                  </h2>

                  {currentQuestion.type === "select" ? (
                    <div className="space-y-4">
                      {currentQuestion.options.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(option)}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                            answers[currentQuestion.id] === option
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-blue-400"
                          } text-gray-800`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentQuestion.options.map((option) => (
                        <motion.label
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 cursor-pointer text-gray-800"
                        >
                          <input
                            type="checkbox"
                            checked={Array.isArray(answers[currentQuestion.id]) && 
                              (answers[currentQuestion.id] as string[]).includes(option)}
                            onChange={(e) => {
                              const currentAnswers = Array.isArray(answers[currentQuestion.id])
                                ? [...(answers[currentQuestion.id] as string[])]
                                : [];
                              if (e.target.checked) {
                                handleAnswer([...currentAnswers, option]);
                              } else {
                                handleAnswer(currentAnswers.filter((a) => a !== option));
                              }
                            }}
                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-800">{option}</span>
                        </motion.label>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="p-8 flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg text-gray-800 ${
                currentStep === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Vorige
            </motion.button>

            {isLastStep ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={!hasAnswer}
                className={`px-6 py-3 rounded-lg ${
                  !hasAnswer
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Genereer actieplan
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!hasAnswer}
                className={`px-6 py-3 rounded-lg ${
                  !hasAnswer
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Volgende
              </motion.button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default IntakePage; 