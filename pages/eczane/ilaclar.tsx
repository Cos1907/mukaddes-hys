
const ilaclar = [
  { ad: 'Parol', stok: 120 },
  { ad: 'Augmentin', stok: 45 },
];

export default function Ilaclar() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">İlaç & Stok Takibi</h1>
      <table className="w-full table-auto border bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">İlaç Adı</th>
            <th className="px-4 py-2">Stok</th>
          </tr>
        </thead>
        <tbody>
          {ilaclar.map((ilac, i) => (
            <tr key={i} className="text-center">
              <td className="px-4 py-2">{ilac.ad}</td>
              <td className="px-4 py-2">{ilac.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
