export const Link = props => {
  return (
    <a href={props.href} title={props.title}>
      {props.children}
    </a>
  );
};
