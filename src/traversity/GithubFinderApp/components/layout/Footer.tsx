const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content">
      <div className="flex flex-col items-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block fill-current"
          style={{ transform: 'rotate(-15deg)', borderRadius: '10%' }}
        >
          <path d="M10 1h2v4h3V1h2v4h3v2h-3v4h3v2h-3v4h-2v-4h-3v4h-2v-4H7v-2h3V7H7V5h3V1zm2 6v4h3V7h-3z" />
        </svg>
        <p className="mt-4">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
