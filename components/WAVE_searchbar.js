import React from 'react';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
