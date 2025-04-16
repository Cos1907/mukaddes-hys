
import { useState } from 'react';

export default function HastaDuzenle() {
  const [name, setName] = useState('Ayşe Yılmaz');
  const [tc, setTC] = useState('12345678901');
  const [birthDate, setBirthDate] = useState('1970-06-21');

  const handleSubmit = () => {
    console.log('Kaydedildi:', { name, tc, birthDate });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Hasta Bilgilerini Düzenle</h1>
      <div className="space-y-4 bg-white shadow p-6 rounded-xl">
        <input className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 border rounded" value={tc} onChange={(e) => setTC(e.target.value)} />
        <input type="date" className="w-full p-2 border rounded" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded-xl">Kaydet</button>
      </div>
    </div>
  );
}
