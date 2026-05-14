function App() {

  // PAGE STYLE   
    const pageStyle = {
    minHeight: "100vh",              // Full screen height
    backgroundColor: "#f2f2f2",     // Light gray background
    display: "flex",                 // Enable Flexbox
    justifyContent: "center",        // Center card left-to-right
    alignItems: "center",            // Center card top-to-bottom
    fontFamily: "Arial, sans-serif", // Clean font for whole page
  };

  // CARD STYLE 
  const cardStyle = {
    backgroundColor: "#ffffff",                  // White background
    padding: "32px 28px",                        // Inner spacing
    borderRadius: "16px",                        // Rounded corners
    width: "360px",                              // Card width
    boxShadow: "0px 4px 16px rgba(0,0,0,0.12)", // Soft drop shadow
    textAlign: "center",                         // Center all content
  };

  //  PROFILE IMAGE STYLE 
  const profileImageStyle = {
    width: "90px",               // Image width
    height: "90px",              // Image height (same = circle)
    borderRadius: "50%",         // Turns square image into circle
    objectFit: "cover",          // Crops image neatly inside circle
    display: "block",            // Needed for margin auto to work
    margin: "0 auto 14px",       // Centers image + adds space below
    border: "3px solid #3b82f6", // Blue ring around the image
  };

  //  USER NAME STYLE 
  const nameStyle = {
    fontSize: "20px",    // Bigger font for the name
    fontWeight: "bold",  // Bold text
    color: "#1a1a2e",    // Dark color
    margin: "0 0 4px 0", // Small space below name
  };

  //  USERNAME
  const handleStyle = {
    fontSize: "13px",     // Small font
    color: "#888888",     // Gray color
    marginBottom: "16px", // Space below handle
  };

  //  DIVIDER LINE STYLE 
  const dividerStyle = {
    border: "none",                 // Remove default border
    borderTop: "1px solid #eeeeee", // Thin light gray line
    margin: "16px 0",               // Space above and below
  };

  //  POST TEXT STYLE 
  const postTextStyle = {
    fontSize: "15px",     // Readable font size
    color: "#333333",     // Dark gray text
    lineHeight: "1.7",    // Space between lines (easier to read)
    textAlign: "left",    // Left-align the post text
    marginBottom: "24px", // Space below the post text
  };

  //  BUTTON STYLE 
  const buttonStyle = {
    width: "100%",              // Full width of the card
    padding: "12px",            // Space inside the button
    backgroundColor: "#3b82f6", // Blue background
    color: "#ffffff",           // White text
    border: "none",             // No border
    borderRadius: "8px",        // Rounded corners
    fontSize: "15px",           // Text size
    fontWeight: "bold",         // Bold text
    cursor: "pointer",          // Hand cursor on hover
  };

  //  RETURN: THE CARD UI 
  return (

    // Outer div = full page background
    <div style={pageStyle}>

      {/* The white post card */}
      <div style={cardStyle}>

        {/*  Profile Image  */}
        <img
          src="https://images.pexels.com/photos/36831879/pexels-photo-36831879.jpeg"
          alt="Profile"
          style={profileImageStyle}
        />

        {/*  User Name  */}
        <p style={nameStyle}>Abhitanshu</p>

        {/*  Username Handle  */}
        <p style={handleStyle}>@abhitanshu.codes</p>

        {/*  Dividing line  */}
        <hr style={dividerStyle} />

        {/*  Post Message Text  */}
        <p style={postTextStyle}>
          Just finished building my first React project and I am so proud!
          Learning to code is challenging but every small win feels amazing.
          Keep going, everyone — you have got this!
        </p>

        {/*  Post Button  */}
        <button style={buttonStyle}>
          Post
        </button>

      </div>
    </div>
  );
}

export default App;