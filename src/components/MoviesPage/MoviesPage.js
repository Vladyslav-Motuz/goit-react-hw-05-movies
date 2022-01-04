import { useState } from "react";

function MoviesPage() {
    const [searchName, setSearchName] = useState("");

    const handleChange = (event) => {
        setSearchName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchName.trim() === "") {
            alert("Введите запрос")
            return
        }    
              
        resetForm();
    };

    const resetForm = () => {
        setSearchName("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>             
                <input
                    onChange={handleChange}                    
                    type="text"
                    value={searchName}                    
                    placeholder="Search images and photos"
                />

                <button type="submit" >
                    <span >Search</span>
                </button>
            </form>

            <h3>{searchName}</h3>
        </>
    );
};

export default MoviesPage