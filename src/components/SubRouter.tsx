import { Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { User } from "./User"
import {lazy, Suspense, useEffect} from "react";

const Time = lazy(() => new Promise(resolve =>
    setTimeout(() => resolve(import("../pages/Time")), 5000)
))

export const SubRouter = () => {



    return (
        <>
            <User />

            <div style={{ border: "solid 1px" }}>
                <Routes>
                    <Route>
                        <Route index element={<h1>User Index</h1>} />
                        <Route path="profile" element={<h1>Profile</h1>} />
                        <Route path="time" element={
                            <Suspense fallback={<h1>Carga ....</h1>}>
                                    <Time/>
                            </Suspense>
                        } />

                        <Route path="account" element={<h1>Acount</h1>} />
                        <Route path="list1" element={<h1>List 1</h1>} />
                        <Route path="list2" element={<h1>List 2</h1>} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}
