import React from 'react';
import useFetch from "../useFetch";

function DataComponent () {
    const [{data, loading}] = useFetch(' http://localhost:7070/data', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
           <div>{data.status}</div>
        </div>
    )
}

export default DataComponent;