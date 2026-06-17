function App() {

  // ── PAGE STYLE ──────────────────────────────────
  const pageStyle = {
    minHeight: "100vh",         
    backgroundColor: "#f2f2f2", 
    display: "flex",            
    justifyContent: "center",   
    alignItems: "center",        
  };

  // ── FORM BOX STYLE ───────────────────────────────
  const formStyle = {
    backgroundColor: "#ffffff",                 
    padding: "40px",                            
    borderRadius: "12px",                        
    width: "400px",                              
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", 
  };

  // ── HEADING STYLE ────────────────────────────────
  const headingStyle = {
    textAlign: "center",   
    marginBottom: "24px",  
    fontSize: "22px",      
    color: "#222222",      
  };

  // ── INPUT FIELD STYLE ────────────────────────────
  const inputStyle = {
    width: "100%",                
    padding: "10px 12px",         
    marginBottom: "16px",         
    border: "1px solid #cccccc",  
    borderRadius: "6px",          
    fontSize: "14px",             
    boxSizing: "border-box",      
  };

  // ── LABEL STYLE ──────────────────────────────────
  const labelStyle = {
    display: "block",     
    marginBottom: "5px",  
    fontSize: "14px",    
    color: "#444444",    
    fontWeight: "bold",    
  };

  // ── BUTTON STYLE ─────────────────────────────────
  const buttonStyle = {
    width: "100%",             
    padding: "12px",            
    backgroundColor: "#3b82f6",  
    color: "#ffffff",            
    border: "none",              
    borderRadius: "6px",        
    fontSize: "16px",           
    cursor: "pointer",          
    marginTop: "8px",            
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