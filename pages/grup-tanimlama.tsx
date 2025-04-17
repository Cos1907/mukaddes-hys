import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// ✅ Grup tipi tanımı
interface Group {
  kod: string;
  sorumlu: string;
  uyeler: string;
  altlar: string;
}

export default function GrupPdfGoruntuleme() {
  // ✅ State tipi tanımlı
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch("/api/gruplar")
      .then((res) => res.json())
      .then((data: Group[]) => setGroups(data))
      .catch((error) => console.error("Veri alınamadı:", error));
  }, []);

  // ✅ Excel aktarım fonksiyonu
  const handleExportToExcel = () => {
    const worksheetData = groups.map((group) => ({
      "Grup Kodu": group.kod,
      "Sorumlu": group.sorumlu,
      "Üyeler": group.uyeler,
      "Altlar": group.altlar,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Gruplar");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "gruplar.xlsx");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Tanımlı Hasta Grupları</h1>

      {/* ✅ Excel Butonu */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleExportToExcel}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Excel'e Aktar
        </button>
      </div>

      {groups.length === 0 ? (
        <p className="text-center text-gray-500">Hiç grup verisi bulunamadı.</p>
      ) : (
        <div className="space-y-6">
          {groups.map((grp: Group, i: number) => (
            <Card key={i} className="rounded-xl overflow-hidden shadow bg-white border">
              <CardContent className="p-4 space-y-3">
                <div className="bg-red-100 text-red-800 text-center py-2 font-bold text-lg rounded">
                  Grup Adı / No: {grp.kod}
                </div>

                <div className="text-sm"><strong>Grup Sorumlusu:</strong> {grp.sorumlu}</div>

                <div className="text-sm font-semibold border-b py-1">Engelli Tanımlaması</div>

                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2 text-left">Üyeler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grp.uyeler.split(";").map((uye, j) => (
                      <tr key={j}>
                        <td className="border p-2">{uye}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-sm pt-2">
                  <strong>Altlar:</strong> {grp.altlar || "-"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
