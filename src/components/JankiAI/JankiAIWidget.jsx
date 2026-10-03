import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import JankiAIChat from "./JankiAIChat";
import "./JankiAI.css";

/**
 * JankiAIWidget Master Floating Component
 * Uses HTML5 Canvas Chroma Key rendering to turn video background 100% REAL TRANSPARENT.
 * Plays video once, holds transparent last frame, and triggers speech text sequence.
 */
const JankiAIWidget = ({ onOpenEligibility }) => {
  const [speechStage, setSpeechStage] = useState(0); // 0: hidden, 1: Stage 1, 2: Stage 2, 3: Stage 3 compact
  const [bubbleClosed, setBubbleClosed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);

  // Scroll listener: Only show assistant when user reaches "EXPLORE LOANS" section (id="loan-categories" or scrollY > 260px)
  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const targetSec = document.getElementById("loan-categories") || document.getElementById("loans");
      if (targetSec) {
        const rect = targetSec.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      } else {
        if (window.scrollY >= 260) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Key out white background pixels on canvas while keeping dark outfit intact
  const processFrame = (video, canvas) => {
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const width = video.videoWidth || 240;
    const height = video.videoHeight || 320;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.drawImage(video, 0, 0, width, height);
    const frame = ctx.getImageData(0, 0, width, height);
    const data = frame.data;
    const len = data.length;

    // Key out white studio background (r > 238 & g > 238 & b > 238) -> set alpha (a) to 0
    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (r > 238 && g > 238 && b > 238) {
        data[i + 3] = 0;
      } else if (r > 220 && g > 220 && b > 220) {
        const minVal = Math.min(r, g, b);
        data[i + 3] = Math.max(0, Math.floor(((238 - minVal) / 18) * 255));
      }
    }

    ctx.putImageData(frame, 0, 0);
  };

  // Real-time Canvas Rendering Loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    const renderLoop = () => {
      if (canvasRef.current && !video.paused && !video.ended) {
        processFrame(video, canvasRef.current);
      }
      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    const handlePlay = () => {
      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    video.addEventListener("play", handlePlay);

    // Initial play attempt
    video.play().catch((err) => {
      console.log("Autoplay caught:", err);
    });

    return () => {
      video.removeEventListener("play", handlePlay);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [chatOpen, bubbleClosed, isVisible]);

  // Handle video end -> hold transparent frame & start text sequence
  const handleVideoEnded = () => {
    if (videoRef.current && canvasRef.current) {
      processFrame(videoRef.current, canvasRef.current);
    }
    setSpeechStage(1);
  };

  // Manage speech bubble stage transitions (Stage 1: "Hi, I'm Janki AI 👋" -> Stage 2: "I'm here to help you 👋")
  useEffect(() => {
    if (speechStage === 1) {
      const timerStage2 = setTimeout(() => {
        setSpeechStage(2);
      }, 3200);

      return () => clearTimeout(timerStage2);
    }
  }, [speechStage]);

  // Fallback safety timer
  useEffect(() => {
    if (!isVisible) return;
    const fallbackTimer = setTimeout(() => {
      setSpeechStage((prev) => (prev === 0 ? 1 : prev));
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, [isVisible]);

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  const handleMinimizeChat = () => {
    setChatOpen(false);
    setSpeechStage(3);
  };

  const handleCloseBubble = (e) => {
    e.stopPropagation();
    setBubbleClosed(true);
  };

  const handleReopenAssistant = () => {
    setBubbleClosed(false);
    setSpeechStage(3);
    setChatOpen(true);
  };

  // Don't render floating assistant if user hasn't scrolled to EXPLORE LOANS or if dismissed
  if (!chatOpen && (isDismissed || !isVisible)) {
    return null;
  }

  return (
    <aside aria-label="Janki AI Assistant" className="janki-ai-root-scope">
      {/* Hidden Video Source for Canvas Chroma Keyer */}
      <video
        ref={videoRef}
        src="/chatbotvideo.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        style={{ display: "none" }}
      />

      {/* 1. CHATBOT PANEL (If Open) */}
      {chatOpen && (
        <div className="janki-chat-modal-wrapper">
          <JankiAIChat
            onClose={handleCloseChat}
            onMinimize={handleMinimizeChat}
            onOpenEligibility={onOpenEligibility}
          />
        </div>
      )}

      {/* 2. FLOATING VIDEO ASSISTANT (If Chat is closed) */}
      {!chatOpen && (
        <div className="janki-widget-floating-container is-entered">
          {/* DISMISS CROSS ICON (X) */}
          <button
            type="button"
            className="janki-widget-dismiss-x"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            aria-label="Dismiss Janki AI Assistant"
            title="Close / Dismiss Janki AI"
          >
            <X size={13} />
          </button>

          {/* MINIMIZED CIRCULAR BUTTON */}
          {bubbleClosed ? (
            <button
              type="button"
              className="janki-mini-circle-btn"
              onClick={handleReopenAssistant}
              aria-label="Open Janki AI Assistant"
              title="Click to chat with Janki AI"
            >
              <div className="janki-mini-video-thumb">
                <canvas ref={canvasRef} className="janki-mini-thumb-video" />
              </div>
              <span className="janki-mini-pulse-ring" />
              <span className="janki-mini-label">Janki AI</span>
            </button>
          ) : (
            /* FULL FLOATING VIDEO & SPEECH BUBBLE */
            <div className="janki-floating-assistant-group">

              {/* SPEECH BUBBLE TEXT PART */}
              {speechStage > 0 && (
                <div
                  className={`janki-speech-bubble ${
                    speechStage === 1
                      ? "stage-1"
                      : speechStage === 2
                      ? "stage-2"
                      : "stage-compact"
                  }`}
                  onClick={handleOpenChat}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleOpenChat()}
                  title="Click to open chatbot"
                >
                  <button
                    type="button"
                    className="janki-bubble-close-btn"
                    onClick={handleCloseBubble}
                    aria-label="Close message"
                    title="Dismiss message"
                  >
                    <X size={12} />
                  </button>

                  <div className="janki-bubble-content">
                    {speechStage === 1 ? (
                      <span className="janki-bubble-text fadeInText">
                        Hi, I’m <strong>Janki AI</strong> 👋
                      </span>
                    ) : (
                      <span className="janki-bubble-text fadeInText">
                        I’m here to help you 👋
                      </span>
                    )}
                  </div>
                  <div className="janki-bubble-arrow" />
                </div>
              )}

              {/* REAL TRANSPARENT CANVAS VIDEO TRIGGER */}
              <div
                className="janki-video-interactive-trigger"
                onClick={handleOpenChat}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleOpenChat()}
                title="Click to chat with Janki AI"
              >
                <div className="janki-video-wrapper">
                  <canvas
                    ref={canvasRef}
                    className="janki-floating-video-player"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default JankiAIWidget;
