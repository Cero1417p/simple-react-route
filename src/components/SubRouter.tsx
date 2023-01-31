import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import { NotFound } from './NotFound'
import { User } from './user'

export const SubRouter = () => {
    return (
        <>
            <User />

            <div style={{ border: "solid 1px" }}>
                <Routes>
                    <Route >
                        <Route index element={<h1>User Index</h1>} />
                        <Route path="profile" element={<h1>Profile</h1>} />
                        <Route path="account" element={<h1>Acount</h1>} />
                        <Route path="list1" element={<h1>List 1</h1>} />
                        <Route path="list2" element={<h1>List 2</h1>} />
                        <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </div>

        </>
    )
}
