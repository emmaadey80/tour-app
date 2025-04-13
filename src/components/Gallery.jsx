import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

// TourCard is responsible for fetching books and rending the list

function Gallery ({tours, setTours, onRemove}) {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
 
    // Function to fetch tours from the API
    useEffect(() => {
        console.log("Gallery useEffect running");
        const fetchTours = async () => {
    try {
        const response = await fetch("/api/react-tours-project");
        const data = await response.json();
        console.log("Fetched tours:", data);
        setTours(data); // Save data to global state
        setLoading(false); // Set loading to false
    } catch (error) {
        console.error("Error fetching tours:", error);
        setError('Failed to fetch tours');
        setLoading(false); // Set loading to false
    }
};
    fetchTours();
}, [setTours]);

if (loading) {
    return <h2>Loading...</h2>;
}

if (error) { 
    return <h2>{error}</h2>;
}

return (
    <section>
        <h3>Rendering {tours.length} tours</h3>
        {console.log(tours)} {/* Log the tours here */}
    {tours.map((tour) => (
      <TourCard key={tour.id} {...tour} onRemove={onRemove} />
    ))}
    </section>
);
}
 
export default Gallery;

