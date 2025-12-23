// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-white/10 bg-black text-gray-400">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* BRAND & LEGAL IDENTITY (Critical for Apple) */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">VAYLEN</h3>
                    <p className="text-sm">
                        © {currentYear} <span className="text-gray-200">La Compagnie Vaylen Inc.</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Vaylen is a trading name of La Compagnie Vaylen Inc.
                    </p>
                </div>

                {/* COMPLIANCE LINKS (Critical for Apple) */}
                <div className="flex gap-8 text-sm font-medium">
                    <Link href="/privacy" className="hover:text-white transition-colors">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-white transition-colors">
                        Terms
                    </Link>
                    <a href="mailto:legal@vaylen.app" className="hover:text-white transition-colors">
                        Contact
                    </a>
                </div>

            </div>
        </footer>
    );
}