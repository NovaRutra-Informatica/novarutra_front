import ToasterContainer from "@components/ToasterContainer.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@router/index.tsx";
import { useEffect } from "react";
import { useThemeDetector } from "@hooks/useThemeDetector.ts";

export default function App() {
    const isDarkTheme = useThemeDetector();

    useEffect(() => {
        const favicon = document.getElementById(
            "favicon"
        ) as HTMLLinkElement | null;
        if (favicon)
            favicon.href = isDarkTheme ? "/LOGO_WHITE.png" : "/LOGO_BLUE.png";
    }, [isDarkTheme]);

    return (
        <BrowserRouter>
            <ToasterContainer />
            <AppRoutes />
        </BrowserRouter>
    );
}
