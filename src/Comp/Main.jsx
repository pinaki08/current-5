import { areaOfrectangle } from "../utility/formula";

function NewRectangle() {
  const length = 9;
  const width = 3;
  const area = areaOfrectangle(length, width);
  return (
    <div>
      <h2>
        {" "}
        <button> learn simply</button>{" "}
      </h2>
      <p>
        Rectangle having length : <b>{length}</b> and width :<b>{width}</b> so
        area of rectangle will be <b>{area}</b>
      </p>
    </div>
  );
}

export default NewRectangle;
