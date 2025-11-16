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
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #444",
              fontWeight: 600,
            }}
          >
            Get Starter Pack
          </a>
        </div>

        {/* Gold Edition */}
        <div
          style={{
            flex: "1 1 260px",
            maxWidth: "340px",
            borderRadius: "14px",
            padding: "24px 20px",
            background: "#D4AF37",
            color: "#000",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            Most Popular
          </div>
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>
            Gold Edition
          </h3>
          <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "14px" }}>
            Full system with every letter pack, guide, and the 12-week roadmap.
          </p>
          <div style={{ fontSize: "34px", fontWeight: 900, marginBottom: "8px" }}>
            $76
          </div>
          <ul
            style={{
              fontSize: "14px",
              marginBottom: "18px",
              lineHeight: 1.6,
            }}
          >
            <li>• All 5 deletion letter packs</li>
            <li>• Complete 12-week execution plan</li>
            <li>• Statute references & table</li>
            <li>• Lifetime updates</li>
          </ul>
          <a
            href="#"
            // TODO: replace # with Gold checkout link
            style={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              padding: "13px 16px",
              borderRadius: "10px",
              background: "#000",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Get Gold Edition
          </a>
          <p
            style={{
              fontSize: "11px",
              marginTop: "8px",
              opacity: 0.9,
            }}
          >
            Digital download • Instant access
          </p>
        </div>

        {/* Pro Upgrade */}
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
            Pro Upgrade
          </h3>
          <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "14px" }}>
            Advanced remedies, invoices, and escalation tools for repeat violators.
          </p>
          <div style={{ marginBottom: "6px" }}>
            <span
              style={{
                fontSize: "13px",
                textDecoration: "line-through",
                opacity: 0.6,
                marginRight: "6px",
              }}
            >
              $147
            </span>
            <span style={{ fontSize: "30px", fontWeight: 800 }}>$97</span>
          </div>
          <ul
            style={{
              fontSize: "14px",
              opacity: 0.9,
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            <li>• Advanced repeat-violator templates</li>
            <li>• Invoice & notice of intent forms</li>
            <li>• Workshop & training access</li>
            <li>• Priority support</li>
          </ul>
          <a
            href="#"
            // TODO: replace # with Pro checkout link
            style={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #444",
              fontWeight: 600,
            }}
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
    </section>
  );
}
