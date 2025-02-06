import Header from "../../../layouts/Header";

export default function PageHome() {
    const QuoteContainer = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "20px",
        columnGap: "50px",
        alignItems: "center",
        justifyItems: "center",
        minHeight: "50vh",
    };

    const QuoteHeader ={
        marginTop: "100px",
        color: "#333",
        fontSize: "36px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "left",
    }

    const QuoteBody = {
            padding: "20px",
            fontSize: "18px",
            textAlign: "center",
            borderRadius: "10px",
            textAlign: "left",
    };

    const backgroundImage = {
        backgroundImage: `url('/Images/homeBackground.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    }
    return (
        <div style={backgroundImage}>
            <Header/>
                <div style={QuoteContainer}>
                    <div style={QuoteBody}>
                        <div style={QuoteHeader}>
                            <h1>Get your quote of<br></br> the day</h1>
                        </div>
                        <div>
                            <p>
                                Quotes serve as daily reminders of wisdom, inspiration, <br></br> and perspective,
                                helping to motivate, guide, and uplift us in our <br></br> everyday lives.
                            </p>
                        </div>
                        <div>
                            <a
                                href=""
                                style={{
                                    color: 'blue', textDecoration: 'none',fontWeight: 'bold', marginTop: '10px',  display: 'inline-block'}}
                                >
                                Get a quote
                            </a>
                        </div>
                    </div>
                </div>
    </div>
    )
}


