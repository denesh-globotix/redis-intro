import { useState } from "react";

export default function SearchForm() {
    const [hits, setHits] = useState([])

    const search = async (event) => {
        const q = event.target.value;

        if (q.length > 2) {
            const params = new URLSearchParams({ q })

            //TODO: Good idea to debounce this code
            const res = await fetch('/api/search?' + params);

            const result = await res.json()
            console.log(result)
            setHits(result['cars']);
        }
    }
    return(
        <div>
            <h2>Enter the car to search:</h2>
            <input onChange={search} type="text" />
            <ul>
                {hits.map((hit) => (
                    <li key={hit.entityId}>
                        {hit.make} {hit.model}
                    </li>
                ))}
            </ul>
        </div>
    );
}