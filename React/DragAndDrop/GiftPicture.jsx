import React from "react";
import { useDrag } from "react-dnd";

function GiftPicture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (i) => ({
      isDragging: !!i.isDragging(),
    }),
  }));
  return (
    <div>
      <img
      width={'200px'}
        src={url}
        ref={drag}
        style={{ border: isDragging ? "5px solid #333" : "0px" }}
      />
    </div>
  );
}

export default GiftPicture;
