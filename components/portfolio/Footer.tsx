const Footer = () => (
  <footer className="py-8 px-6 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      Coded with care by Mostafa Kamar, MD (in progress) ·{" "}
      <span className="text-primary">{"</>"}</span> +{" "}
      <span className="text-primary">♥</span>
    </p>
    <p className="text-xs text-muted-foreground mt-1">
      © {new Date().getFullYear()} · Available for freelance & full‑time
    </p>
  </footer>
);

export default Footer;
