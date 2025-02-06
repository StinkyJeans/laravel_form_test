import { Link } from "react-router-dom";
import { Layout } from "antd";

export default function Header() {
    return (
        <Layout.Header
            style={{
                backgroundColor: "#00CDFE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                position: "sticky",
                top: 0,
                opacity: '0.50',
            }}
        >
            <div>
            <ul style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 60}}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                {/* <li>
                    <Link to="/quote">Quote Tables</Link>
                </li> */}
                <li>
                    <Link to="/users">View Users</Link>
                </li>
            </ul>
            </div>
        </Layout.Header>

    );
}
