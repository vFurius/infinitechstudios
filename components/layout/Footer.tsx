export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer 
      className="text-center py-4 text-sm text-gray-500 font-sans">
      © 2024 - {year} InfiniTech Studios
    </footer>
  );
};
