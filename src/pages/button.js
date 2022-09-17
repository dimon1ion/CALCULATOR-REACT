export default function Button(props) {
  const text = props.text;
  const onClick = props.onClick;
  if (text != undefined) {
    return (
      <button
        className="w-100"
        onClick={(event) => {onClick(event)}}
      >
        {text}
      </button>
    );
  }
}
