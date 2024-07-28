export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Starting adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numberOfPacked = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {numberOfPacked === 100
          ? 'You are ready to go!🚕'
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked}(${numberOfPacked}%)`}
      </em>
    </footer>
  );
}
