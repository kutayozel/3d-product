import Image from "next/image";
import Canvas from "@/canvas";

import { Inter } from "next/font/google";
import Customizer from "@/components/Customizer";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <Main />
      <Canvas />
      <Customizer />
    </main>
  );
}
