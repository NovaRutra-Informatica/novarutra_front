import { Route, Routes } from "react-router-dom";
import Main from "@pages/Main.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
        </Routes>
    );
}
