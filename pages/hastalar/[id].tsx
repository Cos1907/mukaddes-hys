
import { useRouter } from 'next/router';

const dummyPatient = {
  id: 1,
  name: 'Ayşe Yılmaz',
  tc: '12345678901',
  birthDate: '1970-06-21',
  gender: 'Kadın',
  disabilityType: 'Ruhsal',
  reportStatus: 'Var',
  reportRate: '%80',
  reportStart: '2023-01-01',
  reportEnd: '2025-01-01',
  block: 'A',
  groupCode: 'EG',
  roomNumber: '101',
  guardianName: 'Zehra Yılmaz',
  guardianRelation: 'Kızı',
  guardianContact: '0555-123-4567'
};

export default function HastaDetay() {
  const router = useRouter();
  const { id } = router.query;

  const patient = dummyPatient; // Gerçek projede veritabanından çekilecek

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Hasta Detay Sayfası</h1>
      <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-lg">
        <div>
          <p><strong>Ad Soyad:</strong> {patient.name}</p>
          <p><strong>TC:</strong> {patient.tc}</p>
          <p><strong>Doğum Tarihi:</strong> {patient.birthDate}</p>
          <p><strong>Cinsiyet:</strong> {patient.gender}</p>
          <p><strong>Engel Türü:</strong> {patient.disabilityType}</p>
          <p><strong>Rapor Durumu:</strong> {patient.reportStatus}</p>
          <p><strong>Rapor Oranı:</strong> {patient.reportRate}</p>
        </div>
        <div>
          <p><strong>Rapor Başlangıç:</strong> {patient.reportStart}</p>
          <p><strong>Rapor Bitiş:</strong> {patient.reportEnd}</p>
          <p><strong>Blok:</strong> {patient.block}</p>
          <p><strong>Grup Kodu:</strong> {patient.groupCode}</p>
          <p><strong>Oda No:</strong> {patient.roomNumber}</p>
          <p><strong>Vasi Adı:</strong> {patient.guardianName}</p>
          <p><strong>Yakınlık:</strong> {patient.guardianRelation}</p>
          <p><strong>İletişim:</strong> {patient.guardianContact}</p>
        </div>
      </div>
      <div className="text-right mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          onClick={() => console.log('Düzenle butonuna tıklandı')}
        >
          Bilgileri Düzenle
        </button>
      </div>
    </div>
  );
}
