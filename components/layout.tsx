
import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <Image
          src="https://www.mukaddesaksoy.com/panel/uploads/settings_v/1280x720/logo1-2.png"
          alt="Mukaddes Aksoy Logo"
          width={200}
          height={60}
          className="object-contain"
        />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 text-center text-sm py-4 mt-10 border-t">
        Development by <span className="font-semibold">Asil Nevo</span>
      </footer>
    </div>
  );
}
