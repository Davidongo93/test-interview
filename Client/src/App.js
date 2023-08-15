import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import MessagesTable from '../src/components/';

function App() {
    const [quote, setQuote] = useState(null);
    const [saved, setSaved] = useState(false);
    const [messages, setMessages] = useState([]); 

    const fetchRandomQuote = () => {
        axios.get('http://localhost:3001/messages')
            .then(response => {
                setQuote(response.data);
                setSaved(false);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    };

    const saveQuote = () => {
        if (quote) {
            axios.post('http://localhost:3001/messages', { message: quote })
                .then(response => {
                    setSaved(true);
                })
                .catch(error => {
                    console.error('Error saving quote:', error);
                });
        }
    };

    const copyToClipboard = () => {
        if (quote) {
            navigator.clipboard.writeText(quote);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3001/messages/all')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            });
    }, []);

    return (
        <div className="bg-gray-900 h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-semibold mb-4">Random Quotes App</h1>
        
            <button
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded mb-4"
                onClick={fetchRandomQuote}
            >
                Generate New Quote
            </button>

            <div className="bg-gray-800 p-4 rounded shadow">
                <p className="text-lg">
                    {quote !== null ? `"${quote}"` : 'Please press the generate button'}
                </p>
            </div>
            <div className="mt-4">
                <button
                    className={`bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded mr-2`}
                    onClick={copyToClipboard}
                >
                    Copy to Clipboard
                </button>
                <button
                    className={`bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded ${saved ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={saveQuote}
                    disabled={saved}
                >
                    {saved ? 'Saved' : 'Save'}
                </button>
            </div>

            <MessagesTable messages={messages} />
        </div>
    );
}

export default App;
