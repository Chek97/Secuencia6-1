import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One punch", "Dragon ball", "Samurai x"]);

    const handleAddCategory = (newCategory) => {
        //setCategories([...categories, 'Valorant']);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1> GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => handleAddCategory(event)} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}