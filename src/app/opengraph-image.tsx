import { ImageResponse } from "next/og";
import { units } from "@/lib/coffee-data";

export const alt =
  "Coffeetown Salvador — Café, Brunch e Bistrô | Vitória e Pituba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagem Open Graph / Twitter gerada em build (sem asset binário).
 * Também cobre a meta tag de Twitter automaticamente.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0C1014",
          padding: "72px",
          color: "#EBDAC4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#BE5719",
          }}
        >
          Vitória & Pituba · Salvador — BA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Coffeetown Salvador
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 38,
              color: "#C6A78E",
            }}
          >
            Café · Brunch · Confeitaria · Cocktails
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", color: "#BE5719" }}>
            Duas unidades em Salvador
          </div>
          <div style={{ display: "flex", color: "#7D6130" }}>/</div>
          <div style={{ display: "flex", color: "#C6A78E" }}>
            Vitória {units[0].rating} · Pituba {units[1].rating}
          </div>
          <div style={{ display: "flex", color: "#7D6130" }}>/</div>
          <div style={{ display: "flex", color: "#C6A78E" }}>Aberto até 21h30</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
