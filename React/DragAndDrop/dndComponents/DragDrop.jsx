import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GiftPicture from "./GiftPicture";

function DragDrop() {
  const [tree, setTree] = useState([]);
  const [trees, setTrees] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageUnderTree(item.id),
    collect: (i) => ({ isOver: !!i.isOver }),
  }));
  function addImageUnderTree(id) {
    const giftPictureList = gifts.filter((i) => id === i.id);
    setTree((i) => [...i, giftPictureList[0]]);
  }
  const gifts = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1661758284381-37eca4009fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1544639044-4f142ceb6a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1608755727748-dfa2e44f255b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div>
      <div>
        {gifts.map((i) => (
          <GiftPicture url={i.url} id={i.id} />
        ))}
      </div>
      <div className="receive" ref={drop}>
        {tree.map((giftPicture) => {
          return <GiftPicture url={giftPicture.url} id={giftPicture.id} />;
        })}
      </div>
    </div>
  );
}

export default DragDrop;
