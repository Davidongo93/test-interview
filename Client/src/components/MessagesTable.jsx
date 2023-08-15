import React from 'react';

function MessagesTable({ messages }) {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Messages History</h2>
            <table className="bg-gray-800 p-4 rounded shadow">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr key={message.id}>
                            <td className="px-4 py-2">{message.id}</td>
                            <td className="px-4 py-2">{message.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MessagesTable;
