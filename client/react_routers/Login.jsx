import React from "react";
import {Route} from "react-router-dom";

export default function Login() {
    return (
        <div>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/Unit1" element={<Unit1 />} />
                <Route path="/Unit2" element={<Unit2 />} />
                <Route path="/Unit3" element={<Unit3 />} />
                <Route path="/Unit4" element={<Unit4 />} />
                <Route path="/Unit5" element={<Unit5 />} />
                <Route path="/Unit6" element={<Unit6 />} />
             </Route>
        </div>
    )
}


