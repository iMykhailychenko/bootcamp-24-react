export const Link = props => {
  console.log(props);

  return (
    <a href={props.href} title={props.title}>
      {props.children}
    </a>
  );
};
