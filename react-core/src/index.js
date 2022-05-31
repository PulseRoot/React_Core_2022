import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
<link rel="manifest" href="/public/manifest.json" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// app.get("/list", (req, res) => { 
//     const sqlQuery = "SELECT * FROM CENTER;";
//     db.query(sqlQuery, (err, result) => {
//         res.send(result);
//     });
// });
