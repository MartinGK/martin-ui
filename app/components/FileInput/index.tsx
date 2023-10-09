import './FileInputs.css'

type Props = {};

export function FileInput({}: Props) {
  return (
    <label htmlFor="images" className="drop-container">
      <span className="drop-title">Drop files here</span>
      or
      <input type="file" id="images" accept="image/*" required />
    </label>
  );
}
