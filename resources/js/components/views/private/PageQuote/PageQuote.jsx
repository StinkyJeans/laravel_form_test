import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PageQuote() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/quotes') // Change URL if needed
            .then(response => setQuotes(response.data))
            .catch(error => console.error('Error fetching quotes:', error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Quote</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote, index) => (
                        <tr key={index}>
                            <td>{quote.id}</td>
                            <td>{quote.name}</td>
                            <td>{quote.author}</td>
                            <td>{quote.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
