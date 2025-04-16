
import Link from 'next/link';

const patients = [
  { id: 1, name: 'Ayşe Yılmaz', group: 'EG', room: '101' },
  { id: 2, name: 'Mehmet Demir', group: 'EJ', room: '102' },
];

export default function HastaListesi() {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Hasta Listesi</h1>
      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        {patients.map((patient) => (
          <Link key={patient.id} href={`/hastalar/${patient.id}`}>
            <div className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
              <p><strong>{patient.name}</strong> — Grup: {patient.group} — Oda: {patient.room}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
