import HomeClient from "./components/HomeClient";
import { LatestArticles } from "./components/LatestArticles";
import Footer from "./components/Footer";
import { getSortedPosts } from "@/lib/blog"; // 1. Import the blog logic

export default function Home() {
  // 2. Check if posts exist (Server Side)
  const posts = getSortedPosts();
  const hasPosts = posts.length > 0;

  return (
    <main className="min-h-screen bg-obsidian text-ink selection:bg-steel-active selection:text-obsidian">
      {/* 3. Pass the boolean down to the client component */}
      <HomeClient showJournal={hasPosts} />

      <LatestArticles />
      <Footer />
    </main>
  );
}