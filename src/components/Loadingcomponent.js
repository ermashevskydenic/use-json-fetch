import React from 'react';
import useFetch from "../useFetch";

function Loadingcomponent () {
    const [{data, loading, error}] = useFetch('http://localhost:7070/loading', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{data.status}</div>
        </div>
    )
}

export default Loadingcomponent;