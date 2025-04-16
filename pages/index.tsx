
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("asil");
  const [password, setPassword] = useState("asilnevo");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "asil" && password === "asilnevo") {
      router.push("/grup-tanimlama");
    } else {
      setError("Hatalı giriş bilgileri. Lütfen tekrar deneyiniz.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-500">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <div className="flex justify-center mb-6">
          <Image
            src="https://www.mukaddesaksoy.com/panel/uploads/settings_v/1280x720/logo1-2.png"
            width={180}
            height={60}
            alt="logo"
          />
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Mukaddes Aksoy Yaşlı Bakım Merkezi</h2>
        <div className="space-y-4">
          <input
            className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-all duration-200"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}
