import { useState, useEffect } from "react";

export default function DonneesCategories() {
  const [result, setResult] = useState();

  const idMiniature = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/videos/miniatures/${idMiniature}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error here, e.g., set a default value or display an error message
      }
    };
    fetchData;
  }, []);
}
