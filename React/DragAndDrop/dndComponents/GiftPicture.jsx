import React from "react";
import { useDrag } from "react-dnd";

function GiftPicture({ url, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (i) => ({
      isDragging: !!i.isDragging(),
    }),
  }));
  return (
    <>
      <img
        width={"200px"}
        height={"200px"}
        src={url}
        ref={drag}
        style={{ border: isDragging ? "5px solid #fff" : "0px" }}
      />
    </>
  );
}

export default GiftPicture;
