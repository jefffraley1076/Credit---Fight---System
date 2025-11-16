type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: "Is this legal?",
    a: "Yes. You are using federal consumer law (FCRA/FDCPA, etc.) to correct inaccurate information. This is educational material, not personal legal advice.",
  },
  {
    q: "How fast will I see results?",
    a: "Federal timelines are about 30 days per dispute cycle. Some people see movement after the first round; others take a few cycles depending on their situation.",
  },
  {
    q: "What exactly do I receive?",
    a: "You get ready-to-send dispute letters, deletion guides, tracking logs, a 12-week execution plan, and statute references you can cite in your letters.",
  },
  {
    q: "Do you offer refunds?",
    a: "Because this is an instantly-delivered digital product, all sales are final. But you get lifetime updates as the laws, strategies, and templates improve.",
  },
];

export default function FAQ() {
  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "14px",
        }}
      >
        Questions, Answered
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          opacity: 0.85,
          marginBottom: "34px",
        }}
      >
        Straight answers. No fluff. No games.
      </p>

      <div style={{ display: "grid", gap: "16px" }}>
        {ITEMS.map((item) => (
          <div
            key={item.q}
            style={{
              background: "#111",
              borderRadius: "12px",
              padding: "16px 14px",
              border: "1px solid #222",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              {item.q}
            </h3>
            <p style={{ fontSize: "14px", opacity: 0.85, lineHeight: 1.6 }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
