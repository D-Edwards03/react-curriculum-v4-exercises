export default function SnackList() {
  const snacks = [
    { name: 'Popcorn', rank: 5 },
    { name: 'Ice Cream', rank: 4 },
    { name: 'Kettle Chips', rank: 3 },
    { name: 'Chocolate Chip Cookies', rank: 2 },
    { name: 'Peanut M&M', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} - Rank {snack.rank}
        </li>
      ))}
    </ol>
  );
}
