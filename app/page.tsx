import HomeClient from "./components/HomeClient";
import { LatestArticles } from "./components/LatestArticles";
import Footer from "./components/Footer";
import { getSortedArticles } from "@/lib/journal";

export default function Home() {
  // Check if articles exist (Server Side)
  const articles = getSortedArticles();
  const hasArticles = articles.length > 0;

  return (
    <main className="min-h-screen bg-obsidian text-ink selection:bg-steel-active selection:text-obsidian">
      {/* Pass the boolean down to the client component */}
      <HomeClient showJournal={hasArticles} />

      <LatestArticles articles={articles} />
      <Footer />
    </main>
  );
}