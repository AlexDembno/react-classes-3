import useFetchEvents from 'hooks/useFatchEvents';

function EventSubPage() {
  const event = useFetchEvents();
  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width="200" />
        </div>
      )}
    </>
  );
}

export default EventSubPage;
