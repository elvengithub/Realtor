"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Mail, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";

const CONSULT_EMAIL = "consultation@tonleuterio.com";

export default function FreeCoachingConsultation() {
  const { isDark } = useTheme();

  const steps = [
    "You share where you are today—role, market, and the growth gap you feel most.",
    "We map how Anthony’s frameworks apply to your situation and what “scale” means for you.",
    "You leave with clarity on next steps—whether that’s a program fit, a resource, or a longer-term path.",
  ];

  return (
    <div className="free-coaching-consultation-page">
      <section
        className="hero-global"
        style={{
          position: "relative",
          background: isDark ? "#050505" : "#111",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "48vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.18) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: isDark
              ? "linear-gradient(to top, rgba(0,0,0,1), transparent)"
              : "linear-gradient(to top, var(--bg-section), transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "2rem", paddingBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <div className="flex w-full max-w-3xl flex-col items-center text-center">
            <span className="roi-badge mb-6 shimmer-gold inline-flex items-center justify-center gap-2">
              <Sparkles size={14} strokeWidth={2.5} />
              Complimentary session
            </span>
            <h1 className="section-title w-full" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", marginBottom: "1.25rem", color: "#fff" }}>
              Free coaching consultation
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
              A focused conversation to understand your goals, challenges, and whether our coaching ecosystem is the right lever for
              your next stage of growth—no pressure, no generic pitch.
            </p>
            <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${CONSULT_EMAIL}?subject=Free%20coaching%20consultation%20request&body=Hello%2C%0A%0AI%27d%20like%20to%20request%20a%20complimentary%20coaching%20consultation.%0A%0ABest%20times%20to%20reach%20me%3A%0A%0ATimezone%3A%0A%0AThank%20you.`}
                className="btn btn-primary"
                style={{ padding: "1rem 2rem" }}
              >
                Email to request a session
                <Mail size={18} style={{ marginLeft: "0.5rem" }} />
              </a>
              <Link
                href="/coaching"
                className="btn btn-outline"
                style={{ padding: "1rem 2rem", color: "#ffffff", borderColor: "var(--brand-gold)" }}
              >
                Explore coaching first
                <ArrowRight size={18} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-2 responsive-gap" style={{ alignItems: "start" }}>
            <div className="card" style={{ padding: "clamp(2rem, 5vw, 3rem)" }}>
              <span className="subtitle">What to expect</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                A strategy session—not a sales script
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-main)", marginBottom: "2rem" }}>
                This consultation is designed for serious operators who want clarity: whether you are scaling a team, sharpening your
                lead engine, or stepping into executive leadership, we use the time to align on outcomes and fit.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "1.05rem", lineHeight: 1.6, color: "var(--text-main)" }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: "0.15rem", color: "var(--brand-gold)" }} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: "clamp(2rem, 5vw, 3rem)", borderColor: "rgba(212, 175, 55, 0.35)" }}>
              <span className="subtitle">How it works</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Simple next step
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      background: "rgba(212, 175, 55, 0.12)",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} color="var(--brand-gold)" />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.35rem", fontSize: "1.15rem" }}>1. Reach out</h3>
                    <p style={{ margin: 0, color: "var(--text-main)", lineHeight: 1.65 }}>
                      Send a short note to{" "}
                      <a href={`mailto:${CONSULT_EMAIL}`} style={{ color: "var(--brand-gold)", fontWeight: 700 }}>
                        {CONSULT_EMAIL}
                      </a>{" "}
                      with your timezone and preferred windows.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      background: "rgba(212, 175, 55, 0.12)",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Calendar size={22} color="var(--brand-gold)" />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.35rem", fontSize: "1.15rem" }}>2. Schedule</h3>
                    <p style={{ margin: 0, color: "var(--text-main)", lineHeight: 1.65 }}>
                      Our team will reply with a time that works or a quick call to confirm details—usually within a few business days.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--border-radius)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-base)",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-main)", lineHeight: 1.6 }}>
                  Prefer to browse first?{" "}
                  <Link href="/coaching/programs" style={{ color: "var(--brand-gold)", fontWeight: 700 }}>
                    View programs
                  </Link>{" "}
                  or{" "}
                  <Link href="/coaching/core" style={{ color: "var(--brand-gold)", fontWeight: 700 }}>
                    Coaching Core
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Ready to start the conversation?
          </h2>
          <p style={{ maxWidth: "640px", margin: "0 auto 2rem", fontSize: "1.1rem", color: "var(--text-main)" }}>
            Request your complimentary consultation by email. We will treat your inquiry with confidentiality and respect for your time.
          </p>
          <a href={`mailto:${CONSULT_EMAIL}`} className="btn btn-primary" style={{ padding: "1.25rem 3rem" }}>
            {CONSULT_EMAIL}
          </a>
        </div>
      </section>
    </div>
  );
}
