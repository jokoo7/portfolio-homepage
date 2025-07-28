// app/layout.tsx
// cukup re-export children saja
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
