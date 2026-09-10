type Props = { src: string; alt: string; label: string; caption: string; position?: string };

export default function ProjectPhoto({ src, alt, label, caption, position = "center" }: Props) {
  return (
    <figure style={{ margin: 0, position: "relative", overflow: "hidden", borderRadius: 24, minHeight: 300, background: "#101b17", boxShadow: "0 24px 70px rgba(20,30,25,.16)" }}>
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", minHeight: 300, objectFit: "cover", objectPosition: position, display: "block", filter: "saturate(.9) contrast(1.04) brightness(.92)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(8,18,14,.02) 35%,rgba(8,18,14,.86) 100%)" }} />
      <figcaption style={{ position: "absolute", left: 22, right: 22, bottom: 20, color: "#fff" }}>
        <span style={{ display: "inline-block", padding: "6px 10px", borderRadius: 999, background: "rgba(255,255,255,.13)", border: "1px solid rgba(255,255,255,.18)", backdropFilter: "blur(10px)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>{label}</span>
        <p style={{ margin: "10px 0 0", maxWidth: 520, fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>{caption}</p>
      </figcaption>
    </figure>
  );
}
