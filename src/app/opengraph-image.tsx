import { ImageResponse } from "next/og";

export const alt = "GS Consulting | Sites web et outils digitaux pour TPE/PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "white", padding: "60px", position: "relative" }}>
      <div style={{ padding: "10px 24px", borderRadius: "9999px", background: "rgba(59,130,246,.15)", border: "1px solid rgba(59,130,246,.4)", color: "#60a5fa", fontSize: 22, fontWeight: 700, letterSpacing: "1px", marginBottom: 28 }}>GS CONSULTING</div>
      <div style={{ fontSize: 54, fontWeight: 800, textAlign: "center", maxWidth: 950, lineHeight: 1.2, marginBottom: 24 }}>Sites web professionnels et outils digitaux pour TPE / PME</div>
      <div style={{ fontSize: 24, color: "#cbd5e1", textAlign: "center" }}>Livraison rapide • Validation avant paiement final</div>
      <div style={{ position: "absolute", bottom: 40, fontSize: 18, color: "#64748b", fontWeight: 600 }}>gsconsulting-dev.fr</div>
    </div>,
    { ...size }
  );
}
