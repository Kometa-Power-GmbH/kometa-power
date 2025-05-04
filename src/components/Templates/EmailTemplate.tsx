import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Segoe UI, Roboto, sans-serif",
      backgroundColor: "#0a0a0a",
      padding: "48px 16px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "32px",
        borderRadius: "16px",
        maxWidth: "600px",
        width: "100%",
        color: "#FDEAA8",
        boxShadow: "0 0 30px rgba(253, 234, 168, 0.1)",
        border: "1px solid #333",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "24px",
          color: "#ffffff",
        }}
      >
        📩 Neue Nachricht von{" "}
        <span style={{ color: "#FDEAA8" }}>Kometa Power</span>
      </h1>

      <div style={{ fontSize: "16px", marginBottom: "12px" }}>
        <strong
          style={{ width: "100px", display: "inline-block", color: "#ffffff" }}
        >
          👤 Name:
        </strong>
        {name}
      </div>

      <div style={{ fontSize: "16px", marginBottom: "12px" }}>
        <strong
          style={{ width: "100px", display: "inline-block", color: "#ffffff" }}
        >
          📧 E-Mail:
        </strong>
        {email}
      </div>

      <div>
        <strong style={{ fontSize: "18px", color: "#ffffff" }}>
          💬 Nachricht:
        </strong>
        <div
          style={{
            backgroundColor: "#0a0a0a",
            padding: "16px",
            marginTop: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            whiteSpace: "pre-line",
            borderLeft: "4px solid #FDEAA8",
          }}
        >
          {message}
        </div>
      </div>
    </div>
  </div>
);
