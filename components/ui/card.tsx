
import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white rounded-xl shadow-md p-4">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
