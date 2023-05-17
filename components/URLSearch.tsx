"use client";

import { useRef, useState, KeyboardEvent, use } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useIssueStore, usePageReportStore } from "../store/PageReportStore";


interface Category {
    id: string;
    description: string;
    priority: number;
}

interface ApiResponse {
    categories: Category[];
    // other properties from the API response if needed
}

export const URLSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    const PageReport = usePageReportStore();


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
                const response = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&url=${url}`);
                const json: ApiResponse = await response.json();
                console.log(json);
                const { categories } = json;
                setCategories(categories);
                PageReport.setError(categories.error.count);
                PageReport.setContrast(categories.contrast.count);
                PageReport.setAlert(categories.alert.count);
                PageReport.setStructure(categories.structure.count);
                console.log(categories.error.count);
                console.log(PageReport.error);
                console.log(PageReport.contrast.count);
                console.log(PageReport.structure);


            } catch (error) {
                console.log("Error:", error);
            }

        }
    };

    return (
        <div className="items-center flex justify-center w-full h-full mb-4">
            <div className="relative flex flex-row w-full h-full rounded-lg border border-gray-200">
                <div className="w-1/12 left-3 items-center" ref={clickPoint}>
                    <AiOutlineSearch className="text-xl text-gray-600" />
                </div>
                <input
                    type="text"
                    className="block p-4 pl-10 w-full h-full text-gray-900 bg-gray-50 focus:pl-3 mx-2"
                    placeholder="Search for your website..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

