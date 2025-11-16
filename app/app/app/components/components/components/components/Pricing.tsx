export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "90px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Choose Your Level of Firepower
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          opacity: 0.85,
          marginBottom: "40px",
        }}
      >
        Start small or go all in. Every option is built on the same consumer
        law system.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* Mini Starter */}
        <div
          style={{
            flex: "1 1 260px",
            maxWidth: "340px",
            border: "1px solid #222",
            borderRadius: "14px",
            padding: "22px 18px",
            background: "#111",
          }}
        >
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
            Mini Starter Pack
          </h3>
          <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "14px" }}>
            Test the system with a focused letter and quick-start guide.
          </p>
          <div style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px" }}>
            $9
          </div>
          <ul
            style={{
              fontSize: "14px",
              opacity: 0.9,
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            <li>• 1 targeted deletion letter</li>
            <li>• Mailing & tracking log</li>
            <li>• Quick-start walkthrough</li>
          </ul>
          <a
            href="#"
            // TODO: replace # with Mini checkout link
            style={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
