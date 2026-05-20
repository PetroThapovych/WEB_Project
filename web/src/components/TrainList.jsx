import TrainCard from "./TrainCard.jsx";

function TrainList({ trains }) {
  return (
    <div>
      {trains.length > 0 ? (
        trains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))
      ) : (
        <p>Потяги не знайдено</p>
      )}
    </div>
  );
}

export default TrainList;