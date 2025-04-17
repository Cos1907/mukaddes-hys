import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// ✅ Type tanımı en üstte!
interface Group {
  kod: string;
  sorumlu: string;
  uyeler: string;
  altlar: string;
}

export default function GrupPdfGoruntuleme() {
  // ❗️Burası çok kritik!
  const [groups, setGroups] = useState<Group[]>([]); // ✅ Tip verildi!

  useEffect(() => {
    fetch("/api/gruplar")
      .then((res) => res.json())
      .then((data: Group[]) => {
        setGroups(data);
      })
      .catch((err) => {
        console.error("Veri alınamadı:", err);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">PDF Görünüm – Tanımlı Gruplar</h1>

      {groups.length === 0 ? (
        <p className="text-gray-500">Hiç grup verisi bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {groups.map((group: Group, index: number) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-1">
                <div>
                  <Label className="text-sm text-gray-500">Grup Kodu:</Label>
                  <p>{group.kod}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Sorumlu:</Label>
                  <p>{group.sorumlu}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Üyeler:</Label>
                  <p>{group.uyeler}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Altlar:</Label>
                  <p>{group.altlar || "-"}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
