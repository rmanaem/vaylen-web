import Navbar from "./Navbar";
import Footer from "./Footer";
import { getSortedPosts } from "@/lib/blog";

interface StandardPageProps {
    children: React.ReactNode;
}

export default function StandardPage({ children }: StandardPageProps) {
    // Check for blog posts to show/hide Journal link
    const posts = getSortedPosts();
    const hasPosts = posts.length > 0;

    return (
        <>
            <Navbar showJournal={hasPosts} />

            {/* Add padding-top so content doesn't hide behind fixed navbar */}
            <div className="pt-24">
                {children}
            </div>

            <Footer />
        </>
    );
}
