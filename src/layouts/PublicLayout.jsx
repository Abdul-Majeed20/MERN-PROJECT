// layouts/PublicLayout.jsx
import Header from "../components/Header"; // your own header

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
