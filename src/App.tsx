import React from "react";
import Header from "./components/Header";
import HomeNav from "./components/HomeNav";

export default function App() {
    return (
        <div>
            <Header />
            <main style={{ padding: "2em" }}>
                <HomeNav />
            </main>
        </div>
    );
}
