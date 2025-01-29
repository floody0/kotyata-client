import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import {Header, Footer} from "@/components";
import StoreProvider from "@/store/StoreProvider";

const fontMontesserat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700",],
    variable: "--font-montserrat",
});

const fontInter = Inter({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700",],
    variable: "--font-inter",
});

const fontRoboto = Roboto({
    subsets: ["latin", "cyrillic"],
    weight: ["400","500", "700"],
    variable: "--font-roboto",
});

const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const fontJosefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-josefin",
});

export const metadata: Metadata = {
    title: "Kotyata Shop",
    description: "Kotyata Shop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fontInter.className}>
                <StoreProvider>
                    <Header/>
                    <main className="main">
                        {children}
                    </main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
