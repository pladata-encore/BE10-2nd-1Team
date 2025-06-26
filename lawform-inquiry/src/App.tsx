import React, {useEffect} from "react";
import Inquiry from "./components/Inquiry.tsx";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-800 mt-20">
            <main className="mx-auto">
                <Inquiry/>
            </main>
        </div>
    );
}

export default App;