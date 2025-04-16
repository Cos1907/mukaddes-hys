
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function PatientGroupForm() {
  const [formData, setFormData] = useState({
    groupName: "",
    groupCode: "",
    responsible: "",
    patientList: [
      { sira: 1, name: "" },
      { sira: 2, name: "" },
      { sira: 3, name: "" }
    ]
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePatientChange = (index, value) => {
    const updatedList = [...formData.patientList];
    updatedList[index].name = value;
    setFormData((prev) => ({ ...prev, patientList: updatedList }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Grup Tanımlama Formu</h1>
      <Card className="rounded-2xl shadow p-6">
        <CardContent className="space-y-4">
          <div>
            <Label>Grup Adı</Label>
            <Input
              value={formData.groupName}
              onChange={(e) => handleChange("groupName", e.target.value)}
              placeholder="Örn: Engelli Kadınlar"
            />
          </div>
          <div>
            <Label>Grup Kodu</Label>
            <Input
              value={formData.groupCode}
              onChange={(e) => handleChange("groupCode", e.target.value)}
              placeholder="Örn: EG, EJ, EK"
            />
          </div>
          <div>
            <Label>Grup Sorumlusu</Label>
            <Input
              value={formData.responsible}
              onChange={(e) => handleChange("responsible", e.target.value)}
              placeholder="Ali Untucan Şimşek"
            />
          </div>

          <div>
            <Label>Hasta Listesi</Label>
            <div className="grid grid-cols-1 gap-2">
              {formData.patientList.map((patient, index) => (
                <Input
                  key={index}
                  value={patient.name}
                  onChange={(e) => handlePatientChange(index, e.target.value)}
                  placeholder={`#${index + 1} Hasta İsmi`}
                />
              ))}
            </div>
          </div>

          <Button className="w-full mt-4" onClick={handleSubmit}>
            Kaydet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
