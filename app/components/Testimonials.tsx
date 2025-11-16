export default function Testimonials() {
  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "1000px",
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
        Proof It Actually Works
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          opacity: 0.85,
          marginBottom: "40px",
        }}
      >
        Real results from real people using consumer law the right way.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {[
          "“Got three late payments deleted in the first round. The letters are straight to the point.”",
          "“The bankruptcy deletion guide alone was worth the price. I finally understood WHY it was illegal.”",
          "“The 12-week plan stopped my analysis paralysis. I finally knew exactly what to do next.”",
        ].map((quote, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 260px",
              maxWidth: "320px",
              background: "#111",
              borderRadius: "14px",
              padding: "18px 16px",
              border: "1px solid #222",
              fontSize: "14px",
              lineHeight: 1.6,
            }}
          >
            <p style={{ marginBottom: "10px", opacity: 0.9 }}>{quote}</p>
            <p style={{ fontSize: "12px", opacity: 0.6 }}>– Verified Buyer</p>
          </div>
        ))}
      </div>
    </section>
  );
}
