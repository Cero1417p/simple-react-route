import React from "react"
import "./App.css"
import { SubRouter } from "./components/SubRouter"
import { Home } from "./pages/Home"
import { Index } from "./pages/Index"
import { NotFound } from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"
import {Layout} from "./components/Layout"

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="home" element={<Home />} />
                    <Route path="user/*" element={<SubRouter />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
