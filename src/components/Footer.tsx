const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center px-2 py-1">
      <aside className="grid-flow-col items-center">
        <p>Budtkesoft</p>
        <p> - </p>
        <p>Copypasta © {new Date().getFullYear()} - Go West</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/fwbudtke/" target="_blank" rel="noopener noreferrer">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
        </a>
      </nav>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
