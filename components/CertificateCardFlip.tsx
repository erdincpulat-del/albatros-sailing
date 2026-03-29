"use client";

import { useEffect, useState } from "react";

type CertificateCardFlipProps = {
  frontUrl?: string | null;
  backUrl?: string | null;
};

export default function CertificateCardFlip({
  frontUrl,
  backUrl,
}: CertificateCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visible, setVisible] = useState(false);

  const canFlip = Boolean(frontUrl && backUrl);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  function showFront() {
    setIsFlipped(false);
  }

  function showBack() {
    if (backUrl) {
      setIsFlipped(true);
    }
  }

  function handleFlip() {
    if (canFlip) {
      setIsFlipped((prev) => !prev);
    }
  }

  return (
    <div
      style={{
        marginTop: "32px",
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          fontSize: "13px",
          opacity: 0.6,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Official Certificate Card
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={showFront}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: !isFlipped ? "#0ea5e9" : "rgba(255,255,255,0.05)",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Front
        </button>

        <button
          onClick={showBack}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: isFlipped ? "#0ea5e9" : "rgba(255,255,255,0.05)",
            color: "white",
            cursor: backUrl ? "pointer" : "not-allowed",
            fontWeight: 600,
            opacity: backUrl ? 1 : 0.55,
          }}
        >
          Back
        </button>

        <button
          onClick={handleFlip}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
            cursor: canFlip ? "pointer" : "not-allowed",
            fontWeight: 600,
            opacity: canFlip ? 1 : 0.55,
          }}
        >
          Flip Card
        </button>
      </div>

      <div
        style={{
          perspective: "1600px",
          transform: visible ? "scale(1)" : "scale(0.92)",
          opacity: visible ? 1 : 0,
          transition: "all 600ms ease",
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <div
          onClick={handleFlip}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.586 / 1",
            transformStyle: "preserve-3d",
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: canFlip ? "pointer" : "default",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0a1a29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
            }}
          >
            {frontUrl ? (
              <img
                src={frontUrl}
                alt="Certificate Card Front"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                  opacity: 0.65,
                  fontSize: "14px",
                }}
              >
                Front card image not available.
              </div>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0a1a29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
            }}
          >
            {backUrl ? (
              <img
                src={backUrl}
                alt="Certificate Card Back"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                  opacity: 0.65,
                  fontSize: "14px",
                }}
              >
                Back card image not available.
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "12px",
          opacity: 0.65,
          textAlign: "center",
          letterSpacing: "0.03em",
        }}
      >
        Tap the card or use the buttons to view the front and back sides.
      </div>
    </div>
  );
}