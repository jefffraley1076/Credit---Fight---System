export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #222",
        padding: "26px 20px",
        fontSize: "13px",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, marginBottom: "4px" }}>
            Credit Fight System
          </div>
          <div>Federal law • Plain language • Real results.</div>
        </div>
        <div>
          <div>Support:{" "}
            <a href="mailto:support@creditfightsystem.com">
              support@creditfightsystem.com
            </a>
          </div>
          <div>© {new Date().getFullYear()} Jeff Fraley. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
