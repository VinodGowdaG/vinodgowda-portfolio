interface AutoReplyEmailProps {
  name: string;
  subject: string;
}

export default function AutoReplyEmail({
  name,
  subject,
}: AutoReplyEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f4f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(90deg,#06b6d4,#2563eb)",
            color: "#fff",
            textAlign: "center",
            padding: "35px",
          }}
        >
          <h1 style={{ margin: 0 }}>Thank You!</h1>

          <p style={{ marginTop: 10 }}>
            Your message has been received successfully.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "35px" }}>
          <h2>Hello {name} 👋</h2>

          <p style={{ lineHeight: 1.8 }}>
            Thank you for contacting <strong>Vinodgowda G</strong>.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            I've successfully received your enquiry regarding:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: "4px solid #06b6d4",
              padding: "16px",
              margin: "20px 0",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {subject}
          </div>

          <p style={{ lineHeight: 1.8 }}>
            I'll personally review your message and respond within
            <strong> 24 hours.</strong>
          </p>

          <p style={{ lineHeight: 1.8 }}>
            In the meantime, you can explore some of my latest work.
          </p>

          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
            }}
          >
            <a
              href="https://vinodgowdag.com"
              style={{
                display: "inline-block",
                background: "#06b6d4",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 30px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Visit My Portfolio
            </a>
          </div>

          <hr
            style={{
              margin: "40px 0",
              border: "none",
              borderTop: "1px solid #e5e7eb",
            }}
          />

          <h3>Services I Offer</h3>

          <ul style={{ lineHeight: 2 }}>
            <li>🌐 Website Design & Development</li>
            <li>🎨 Branding & Graphic Design</li>
            <li>📱 Social Media Marketing</li>
            <li>📈 SEO & Digital Marketing</li>
            <li>🏢 Business Growth Solutions</li>
          </ul>

          <p style={{ marginTop: "30px", lineHeight: 1.8 }}>
            Thank you once again for reaching out.
            <br />
            I look forward to working with you.
          </p>

          <p style={{ marginTop: "30px" }}>
            Regards,
            <br />
            <strong>Vinodgowda G</strong>
            <br />
            Creative Designer • Website Developer • Digital Marketing Specialist
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#111827",
            color: "#cbd5e1",
            textAlign: "center",
            padding: "25px",
            fontSize: "14px",
          }}
        >
          © 2026 Vinodgowda G

          <br />

          Thank you for contacting me.
        </div>
      </div>
    </div>
  );
}