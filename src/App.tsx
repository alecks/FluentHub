import React from "react";
import Header from "./components/Header";
import HomeNav from "./components/home";

export default function() {
    return (
        <div>
            <Header />
            <main style={{ padding: "1.5em" }}>
                <HomeNav />
            </main>
        </div>
    );
}
