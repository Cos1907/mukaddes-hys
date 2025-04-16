
export default function Dashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Yönetim Paneli</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <p className="text-sm">Toplam Doktor</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <p className="text-sm">Toplam Hasta</p>
          <p className="text-2xl font-bold">124</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <p className="text-sm">Boş Oda Sayısı</p>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
}
