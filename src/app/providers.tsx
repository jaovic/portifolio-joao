"use client";

import "../i18n/i18n";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
