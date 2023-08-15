import React from 'react';

function App() {
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold mb-4">Random Quotes App</h1>
        

            <div className="bg-white p-4 rounded shadow">
                <p className="text-lg">
                    "lorem ipsumm dasdaddf"
                </p>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
                    Compartir
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Guardar
                </button>
            </div>
        </div>
    );
}

export default App;
