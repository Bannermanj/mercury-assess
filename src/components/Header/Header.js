import "./Header.scss";

import Button from "../Button/Button";

const Header = ({ buttonTitle, linkText, linkUrl, onClick }) => {
  return (
    <header className="header">
      <Button
        className="button-header"
        buttonTitle={buttonTitle}
        onClick={onClick}
      />
      <a
        alt="karljoke joke api docs"
        target="_blank"
        className="header-link"
        rel="noreferrer"
        href={linkUrl}
      >
        {linkText}
      </a>
    </header>
  );
};
export default Header;
