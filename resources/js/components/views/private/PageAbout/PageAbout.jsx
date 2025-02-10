import Header from "../../../layouts/Header";

export default function PageAbout() {
    const AboutText = {
        marginTop: "10px",
        fontSize: "36px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",

        color: "#333",
    };

    const AboutParagraph = {
        marginTop: "20px",
        fontSize: "20px",
        fontWeight: "700",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.8",
        color: "black",
        textAlign: "justify",
        padding: "0 20px",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '2px solid rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(5px)',
        borderRadius: '10px',
    };

    const AboutUsImage = {
        backgroundImage: `url('/Images/AboutImage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    };

    return (
        <div style={AboutUsImage}>
            <Header />
            <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
                <h1 style={AboutText}>About this Page</h1>
                <p style={AboutParagraph}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Odio hac et sodales interdum tempus bibendum dictum ultricies mi. Suscipit vitae ultrices, volutpat iaculis nulla ultrices. Luctus sagittis blandit nostra habitant purus mus. Facilisis eros diam felis gravida posuere conubia hendrerit. Dignissim diam primis hac quis; condimentum sagittis ac nascetur iaculis. Tortor eleifend aenean ut congue felis libero.

                    Sed cursus accumsan enim sem ridiculus dis arcu. Sollicitudin netus gravida eget pulvinar rutrum. Accumsan sed bibendum interdum sociosqu luctus fusce ipsum sapien luctus. Sem faucibus velit aenean natoque euismod interdum gravida semper. Sollicitudin penatibus purus fringilla nec ac. Quam et duis facilisis arcu posuere mi orci ullamcorper laoreet. Morbi cubilia penatibus aliquam imperdiet nostra vulputate tellus mus!

                    Aliquet faucibus lorem ex fusce molestie viverra et varius. Erat ridiculus lectus aptent scelerisque faucibus mollis maximus hendrerit. Condimentum ac tristique imperdiet, lacinia molestie ornare. Suspendisse malesuada blandit efficitur, viverra volutpat dictum faucibus mollis scelerisque. Enim magna tincidunt per tincidunt ornare purus! Ad felis nam nascetur enim urna dis. Magna nibh eleifend pretium hac hac morbi. Maximus pulvinar felis adipiscing; ultrices at risus ac donec. Hac praesent non erat gravida scelerisque. Erat commodo erat nam lobortis vitae rhoncus.

                    Augue per elementum libero neque per sociosqu. Nulla ex accumsan etiam placerat massa consequat aliquam vestibulum.
                    </p>
            </div>
        </div>
    );
}
