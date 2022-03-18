import React, { useState } from "react";

function Component(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex gap-8">
            <button
                className="rounded-full bg-zinc-100 hover:bg-zinc-50 active:translate-y-1 p-3 font-semibold text-slate-600 hover:text-slate-800 drop-shadow-md"
                onClick={() => setCount(count + 1)}
            >
                {props.text}
            </button>
            <p className="pt-3">{count}</p>
        </div>

    );
}

export default Component;