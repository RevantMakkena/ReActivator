import React, {useState, useMemo, useCallback} from "react";

export function UseCallbackComponent() {
  const [length, set_length] = useState(3);
  const [name, set_name] = useState("John Doe");

  const on_name_changed = useCallback(
    (e) => set_name(e.target.value),
    []
  );
  const on_length_changed = useCallback(
    (e) => set_length(Number(e.target.value)),
    []
  );

  return (
    <>
      <div className='adjustHeight'>
        <div className='container'>
          <input value={name} onChange={on_name_changed} />
          <NameDisplay name={name} />
          <hr />
          <input value={length} onChange={on_length_changed} />
          <FibDisplay length={length} />
        </div>
      </div>
    </>
  );
}

function FibDisplay({length}) {
  const numbers = useMemo(() => {
    console.log("Calculating numbers...");
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return (
    <p>
      {length} numbers of the fibonacci sequence: {numbers.join(", ")}
    </p>
  );
}

const NameDisplay = React.memo(function ({name}) {
  console.log("Rerendering name...");
  return <p>Your name is {name}</p>;
});
