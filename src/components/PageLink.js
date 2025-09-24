const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <a
        href={link.href}
        className={itemClass}
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
    </li>
  );
};

export default PageLink;
