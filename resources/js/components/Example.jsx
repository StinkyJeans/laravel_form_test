import {createRoot} from "react-dom/client"
import {Card} from 'antd';

export default function Example() {
    return <Card>Example hey hey</Card>
};

createRoot(document.getElementById('root')).render(<Example/>);
