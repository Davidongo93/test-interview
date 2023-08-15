import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import MessagesTable from '../src/components/MessagesTable';

function App() {
    const [quote, setQuote] = useState(null);
    const [saved, setSaved] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [messagesLoaded, setMessagesLoaded] = useState(false);

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

    const loadMessages = () => {
        if (!messagesLoaded) {
            axios.get('http://localhost:3001/messages/all')
                .then(response => {
                    setMessages(response.data);
                    setMessagesLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching messages:', error);
                });
        }
    };

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

            <button
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4"
                onClick={() => {
                    setShowHistory(!showHistory);
                    loadMessages();
                }}
            >
                {showHistory ? 'Hide History' : 'Show History'}
            </button>

            {showHistory && <MessagesTable messages={messages} />}
        </div>
    );
}

export default App;
