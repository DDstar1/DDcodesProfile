import NavBar from "@/my_components/3d_playground/NavBar";
import Script from "next/script";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <NavBar />

      <Suspense>{children}</Suspense>
    </main>
  );
}
