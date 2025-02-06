import Header from "../../../layouts/Header";

export default function PageContactUs() {
    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "20px",
        columnGap: "50px",
        alignItems: "center",
        marginTop:'50px',
    };

    const contactUsStyle = {
        padding: "20px",
        fontSize: "18px",
        textAlign: "center",
        borderRadius: "10px",
    };

    const inputStyle = {
        display: "block",
        width: "100%",
        padding: "20px",
        marginBottom: "30px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '2px solid rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(5px)',
    };

    const FormSubmitButton = {
        borderRadius: "5px",
        border: "1px solid #ccc",
        padding: "10px",
    }

    const contactText = {
        marginTop: "10px",
        color: "#333",
        fontSize: "36px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
    }

    const backgroundImage = {
        backgroundImage: `url('/Images/contactUs.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    }

    return (
        <div style={backgroundImage}>
            <Header />
            <div style={containerStyle}>
                <div style={contactUsStyle}>
                    <div>
                        <h1 style={contactText}>Contact Us</h1>
                    </div>
                    <form style={inputStyle}>
                        <input type="text" name="name" placeholder="Name" required style={inputStyle} />
                        <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                        <textarea name="message" placeholder="Message" required style={inputStyle}></textarea>
                        <button style={FormSubmitButton} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
