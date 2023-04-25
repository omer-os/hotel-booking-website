import React from "react";

type Props = {};

export default function UiInput({}: Props) {
  return (
    <div className="relative">
      <input type="text" className="input input-bordered" />
    </div>
  );
}
