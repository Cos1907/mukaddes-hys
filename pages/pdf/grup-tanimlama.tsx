
import { useEffect, useState } from 'react';

export default function GrupTanimlamaPDF() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('/api/gruplar')
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">GRUP TANIMLAMA LİSTESİ</h1>
      <div className="flex justify-between text-sm mb-2">
        <div><p><strong>Ay / Yıl:</strong> Kas.24</p></div>
        <div><p><strong>Güncelleme Tarihi:</strong> 1.11.2024</p></div>
      </div>

      {groups.map((grp, i) => (
        <div key={i} className="border mb-6 rounded-xl overflow-hidden shadow bg-white">
          <div className="bg-red-100 text-red-800 text-center py-2 font-bold">Grup Adı/No: {grp.kod}</div>
          <div className="px-4 py-2 text-sm"><strong>Grup Sorumlusu:</strong> {grp.sorumlu}</div>
          <div className="px-4 text-sm font-semibold border-b py-1">Engelli Tanımlaması</div>
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 w-20">S. No</th>
                <th className="border px-2 py-1">Adı Soyadı</th>
              </tr>
            </thead>
            <tbody>
              {grp.uyeler?.split(';').map((uye, idx) => (
                <tr key={idx}>
                  <td className="border px-2 py-1 text-center">{grp.kod}{idx + 1}</td>
                  <td className="border px-2 py-1">{uye}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid grid-cols-3 border-t">
            {grp.altlar?.split(';').map((alt, idx) => (
              <div key={idx} className="border text-center p-2 text-xs">
                {idx + 1} - {alt}
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-right text-xs mt-2 italic">Sayfa 4</p>
    </div>
  );
}
