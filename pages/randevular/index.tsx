
const randevular = [
  { hasta: 'Ayşe Yılmaz', personel: 'Dr. Alan Green', tarih: '2025-04-25 10:00' },
];

export default function RandevuListesi() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Randevu Listesi</h1>
      <ul className="bg-white shadow rounded-xl p-4 space-y-2">
        {randevular.map((r, i) => (
          <li key={i} className="p-2 border rounded-xl">{r.hasta} - {r.personel} ({r.tarih})</li>
        ))}
      </ul>
    </div>
  );
}
