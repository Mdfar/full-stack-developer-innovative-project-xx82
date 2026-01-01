import React, { useState } from 'react'; import axios from 'axios';

function App() { const [query, setQuery] = useState(''); const [result, setResult] = useState(''); const [loading, setLoading] = useState(false);

const handleSearch = async () => { setLoading(true); try { const { data } = await axios.post('http://localhost:3001/api/query', { query, userId: 'staqlt-demo-001' }); setResult(data.insight); } catch (err) { setResult('Error connecting to intelligence engine.'); } setLoading(false); };

return ( <div style={{ padding: '40px', fontFamily: 'sans-serif' }}> <h1>Staqlt Intelligence Portal</h1> <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}> <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask your data anything..." style={{ padding: '10px', width: '300px' }} /> <button onClick={handleSearch} disabled={loading}> {loading ? 'Analyzing...' : 'Execute AI Search'} </button> </div> {result && ( <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}> <h3>AI Insight:</h3> <p>{result}</p> </div> )} </div> ); }

export default App;