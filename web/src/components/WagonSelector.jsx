function WagonSelector({
  selectedWagon,
  setSelectedWagon,
  setSelectedSeats,
}) {
  const wagons = [1, 2, 3, 4, 5];

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Вибір вагона</h3>

      {wagons.map((wagon) => (
        <button
          key={wagon}
          onClick={() => {
            setSelectedWagon(wagon);
            setSelectedSeats([]);
          }}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor:
              selectedWagon === wagon
                ? "#4caf50"
                : "#ddd",
          }}
        >
          Вагон {wagon}
        </button>
      ))}
    </div>
  );
}

export default WagonSelector;