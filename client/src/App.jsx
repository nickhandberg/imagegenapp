import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { CreatePost, Home } from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
                <div className="flex justify-start">
                    <Link to="/">
                        <h1 className="font-extrabold text-[#222328] text-[32px] ">
                            ImageGenApp
                        </h1>
                    </Link>
                    <p className="text-xs pr-1">made with</p>
                    <img className="h-4" src={logo} />
                </div>

                <Link
                    to="/create-post"
                    className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
                >
                    Create
                </Link>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
