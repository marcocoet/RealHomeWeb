export default function HomePage() {
  return (
    <div className="homepage">
      <section className="search-bar">
        <input type="text" placeholder="Enter a city, suburb, or area" />
        <button>Search</button>
      </section>

      <section className="properties-for-sale">
        <h2>Properties for Sale in the Western Cape</h2>
        <ul>
          <li>Bellville</li>
          <li>Cape Town</li>
          <li>Durbanville</li>
          <li>Hermanus</li>
          <li>Paarl</li>
          <li>Stellenbosch</li>
          <li>Summerset West</li>
          <li>George</li>
        </ul>
      </section>
    </div>
  );
}
