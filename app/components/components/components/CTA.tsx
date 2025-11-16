export default function CTA() {
  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "900px",
        margin: "0 auto 60px auto",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#111,#222)",
          borderRadius: "18px",
          padding: "28px 20px",
          border: "1px solid #333",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            marginBottom: "10px",
          }}
        >
          Your Credit Isn’t Broken. The System Is.
        </h2>
        <p
          style={{
            fontSize: "17px",
            opacity: 0.88,
            marginBottom: "26px",
            lineHeight: 1.5,
          }}
        >
          Stop guessing and start sending the right paper, with the right law,
          at the right time. Take back control of your report and your life.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            // TODO: replace # with Gold checkout link
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              background: "#D4AF37",
              color: "#000",
              fontWeight: 800,
              fontSize: "16px",
              minWidth: "210px",
            }}
          >
            Get Gold Edition – $76
          </a>
          <a
            href="#pricing"
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              border: "1px solid #555",
              fontWeight: 600,
              fontSize: "15px",
              minWidth: "190px",
            }}
          >
            See all options
          </a>
        </div>
      </div>
    </section>
  );
}
