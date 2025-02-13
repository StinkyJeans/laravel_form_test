import React from "react";

const Certificate = () => {
  return (
    <div className="certificate-container" style={styles.container}>
      <div style={styles.certificate}>
        <h1 style={styles.title}>Certificate of Appreciation</h1>
        <p style={styles.text}>Thank you for using our website.</p>
        <p style={styles.text}>Here is a certification of appreciation given to:</p>
        <h2 style={styles.name}>[Recipient Name]</h2>
        <p style={styles.signature}>Authorized Signature</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  certificate: {
    width: "600px",
    padding: "40px",
    textAlign: "center",
    border: "5px solid #000",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  name: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  signature: {
    marginTop: "40px",
    fontSize: "16px",
    fontStyle: "italic",
  },
};

export default Certificate;
