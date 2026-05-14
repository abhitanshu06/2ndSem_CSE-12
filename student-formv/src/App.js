function App() {

  // ── PAGE STYLE ──────────────────────────────────
  const pageStyle = {
    minHeight: "100vh",          // Full screen height
    backgroundColor: "#f2f2f2", // Light gray background
    display: "flex",             // Enable Flexbox
    justifyContent: "center",    // Center horizontally
    alignItems: "center",        // Center vertically
  };

  // ── FORM BOX STYLE ───────────────────────────────
  const formStyle = {
    backgroundColor: "#ffffff",                  // White background
    padding: "40px",                             // Space inside the form
    borderRadius: "12px",                        // Rounded corners
    width: "400px",                              // Fixed width
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // Soft shadow
  };

  // ── HEADING STYLE ────────────────────────────────
  const headingStyle = {
    textAlign: "center",   // Center the heading text
    marginBottom: "24px",  // Space below heading
    fontSize: "22px",      // Text size
    color: "#222222",      // Dark color
  };

  // ── INPUT FIELD STYLE ────────────────────────────
  const inputStyle = {
    width: "100%",                // Full width inside the form
    padding: "10px 12px",         // Space inside the input box
    marginBottom: "16px",         // Space below each input
    border: "1px solid #cccccc",  // Light gray border
    borderRadius: "6px",          // Slightly rounded corners
    fontSize: "14px",             // Text size inside input
    boxSizing: "border-box",      // Prevents overflow
  };

  // ── LABEL STYLE ──────────────────────────────────
  const labelStyle = {
    display: "block",      // Makes label sit above the input
    marginBottom: "5px",   // Space between label and input
    fontSize: "14px",      // Label text size
    color: "#444444",      // Dark gray color
    fontWeight: "bold",    // Bold text
  };

  // ── BUTTON STYLE ─────────────────────────────────
  const buttonStyle = {
    width: "100%",                // Full width button
    padding: "12px",              // Space inside button
    backgroundColor: "#3b82f6",   // Blue background
    color: "#ffffff",             // White text
    border: "none",               // No border
    borderRadius: "6px",          // Rounded corners
    fontSize: "16px",             // Text size
    cursor: "pointer",            // Pointer cursor on hover
    marginTop: "8px",             // Space above button
  };

  // ── RETURN: THE FORM UI ──────────────────────────
  return (

    // Outer div = full page wrapper
    <div style={pageStyle}>

      {/* Inner div = the white form card */}
      <div style={formStyle}>

        {/* Form Heading */}
        <h2 style={headingStyle}>Student Registration Form</h2>

        {/* ── Field 1: Student Name ── */}
        <label style={labelStyle}>Student Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          style={inputStyle}
        />

        {/* ── Field 2: Email ── */}
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />

        {/* ── Field 3: Password ── */}
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          style={inputStyle}
        />

        {/* ── Field 4: Course ── */}
        <label style={labelStyle}>Course</label>
        <input
          type="text"
          placeholder="e.g. B.Tech, BCA, MCA"
          style={inputStyle}
        />

        {/* ── Field 5: Mobile Number ── */}
        <label style={labelStyle}>Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          style={inputStyle}
        />

        {/* ── Register Button ── */}
        <button style={buttonStyle}>
          Register
        </button>

      </div>
    </div>
  );
}

export default App;