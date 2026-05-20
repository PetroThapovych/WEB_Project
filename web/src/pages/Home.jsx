import { useState } from "react";
import trainsData from "../data/trains";
import TrainList from "../components/TrainList";

function Home() {
  const [search, setSearch] = useState("");

  const filteredTrains = trainsData.filter((train) =>
    train.route.toLowerCase().includes(search.toLowerCase()) ||
    train.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Список потягів</h1>

      <input
        type="text"
        placeholder="Пошук за маршрутом або номером"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <TrainList trains={filteredTrains} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
};

export default Home;