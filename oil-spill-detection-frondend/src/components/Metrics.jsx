export default function Metrics({ items }) {
  return (
    <section className="metrics">
      {items.map((item, i) => (
        <article className={"metric metric-" + i} key={item.label}>
          <span className="metric-symbol">{item.symbol}</span>
          <div>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
            <small>{item.detail}</small>
          </div>
        </article>
      ))}
    </section>
  );
}
