import React from 'react';
import useFetch from "../useFetch";

function ErrorComponent () {
    const [{data, loading, error}] = useFetch('http://localhost:7070/error', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{data.status}</div>
        </div>
    )
}

export default ErrorComponent;