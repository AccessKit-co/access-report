"use client";

import { useRef, useState, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

interface Category {
    id: string;
    description: string;
    priority: number;
}

interface ApiResponse {
    categories: Category[];
    // other properties from the API response if needed
}

const URLSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [errorCount, setErrorCount] = useState<number>(0);
    const [contrastCount, setContrastCount] = useState<number>(0);
    const [structureCount, setStructureCount] = useState<number>(0);
    const [alertsCount, setAlertsCount] = useState<number>(0);

    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = event.currentTarget.value;
            try {
                const response = await fetch(`https://wave.webaim.org/api/request?key=Hx9brA2T3220&url=${url}`);
                const json: ApiResponse = await response.json();
                console.log(json);
                const { categories } = json;
                setCategories(categories);
                var { error: { count } } = categories;
                setErrorCount(count);
                var { contrast: { count } } = categories;
                setContrastCount(count);
                var { structure: { count } } = categories;
                setStructureCount(count);
                var { alerts: { count } } = categories;
                setAlertsCount(count);
                console.log(count)
            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center flex justify-center w-full h-full">
            <div className="relative w-full h-full">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <AiOutlineSearch className="text-xl text-gray-600" />
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:pl-3"
                    placeholder="Search for your website..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default URLSearch;
