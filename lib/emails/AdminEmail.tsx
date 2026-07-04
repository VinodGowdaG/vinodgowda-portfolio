interface AdminEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function AdminEmail({
  name,
  email,
  subject,
  message,
}: AdminEmailProps) {
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
            padding: "30px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>
            Vinodgowda G Portfolio
          </h1>

          <p style={{ marginTop: 8 }}>
            New Contact Form Submission
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "35px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "12px 0" }}>
                  <strong>Name</strong>
                </td>

                <td>{name}</td>
              </tr>

              <tr>
                <td style={{ padding: "12px 0" }}>
                  <strong>Email</strong>
                </td>

                <td>{email}</td>
              </tr>

              <tr>
                <td style={{ padding: "12px 0" }}>
                  <strong>Subject</strong>
                </td>

                <td>{subject}</td>
              </tr>
            </tbody>
          </table>

          <hr
            style={{
              margin: "30px 0",
              border: "none",
              borderTop: "1px solid #ddd",
            }}
          />

          <h3>Message</h3>

          <div
            style={{
              background: "#f8fafc",
              padding: "20px",
              borderRadius: "12px",
              lineHeight: 1.8,
            }}
          >
            {message}
          </div>

          <div
            style={{
              marginTop: "35px",
              textAlign: "center",
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                display: "inline-block",
                background: "#06b6d4",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Reply to {name}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#111827",
            color: "#cbd5e1",
            textAlign: "center",
            padding: "24px",
            fontSize: "14px",
          }}
        >
          © 2026 Vinodgowda G • Portfolio Contact Notification
        </div>
      </div>
    </div>
  );
}