import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GiftPicture from "./GiftPicture";

function DragAndDrop() {
  function addImageUnderTree(id) {
    const giftPictureList = gifts.filter(
      (giftPicture) => id === giftPicture.id
    );
    setTree((tree) => [...tree, giftPictureList[0]]);
  }
  const [tree, setTree] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageUnderTree(item.id),
    collect: (i) => ({
      isOver: !!i.isOver(),
    }),
  }));
  const gifts = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div>
      <div>
        {gifts.map((i) => (
          <GiftPicture id={i.id} url={i.url} />
        ))}
      </div>
      <button onClick={() => setTree([])}>reset</button>
      <div className="drop" ref={drop}>
        {tree.map((giftPicture) => {
          return <GiftPicture url={giftPicture.url} id={giftPicture.id} />;
        })}
      </div>
    </div>
  );
}

export default DragAndDrop;
