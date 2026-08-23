import { ImageResponse } from "next/og";

export const alt = "GS Consulting | Site Web & Application sur Mesure pour TPE/PME";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Glow behind */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: "400px",
            height: "400px",
            borderRadius: "9999px",
            background: "rgba(59, 130, 246, 0.18)",
            filter: "blur(120px)",
          }}
        />
        
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              color: "#60a5fa",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            GS CONSULTING
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            textAlign: "center",
            maxWidth: "950px",
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Site web professionnel & Outils digitaux pour TPE / PME
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: "800px",
            fontWeight: 400,
          }}
        >
          Livraison rapide • Zéro risque • Validation avant paiement final
        </div>

        {/* Footer domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "#64748b",
            fontWeight: 600,
          }}
        >
          gs-consulting.fr
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
