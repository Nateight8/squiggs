import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Html } from "@react-three/drei";
import Three from "@/components/threejs/Three";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const canvasStyle = {
    height: "100vh",
  };
  return (
    <>
      <Head>
        <title>Dev By Nate | Squiggs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas style={canvasStyle}>
        <Html></Html>
        <Three />
      </Canvas>
    </>
  );
}
