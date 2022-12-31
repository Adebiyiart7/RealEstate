const TextWithNumOfLines = ({ className, children, lines = 2 }) => {
  const inlineStyle = {
    lineClamp: lines,
    overflow: "hidden",
    WebkitLineClamp: lines,
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    lineHeight: 1.2
  };

  return (
    <div style={inlineStyle} className={className}>
      {children}
    </div>
  );
};

export default TextWithNumOfLines;
