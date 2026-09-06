import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="site-container nav-layout">
        <Link href="/" className="nav-brand" aria-label="Yahya — Home">
          <span className="nav-brand-name">
            YAHYA<span className="nav-brand-mark">.</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Let&apos;s Connect <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
