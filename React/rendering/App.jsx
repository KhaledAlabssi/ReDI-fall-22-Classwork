import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  function getUserPosts(e) {
    let data = posts.filter(i => i.userId == e)
    setUserPosts(i => data)
    console.log(e);
  }

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((i) =>
      setUsers(i.data)
    );
    axios("https://jsonplaceholder.typicode.com/posts").then((i) =>
      setPosts(i.data)
    );
  }, []);
  return (
    <div className="app">
      {/* Users... */}
      {users.length > 0 &&
        users.map((i) => (
          <div key={i.id} onClick={() => getUserPosts(i.id)} className="person">
            <h2>{i.name}</h2>
            <p>{i.address.city}</p>
            <p>{i.phone}</p>
          </div>
        ))}

        {/* Hidden till user is clicked */}
        {userPosts.length > 0 && userPosts.map(i => <div className="perosn-posts">
          <h3>{i.title}</h3>
          <p>{i.body}</p>
        </div>)}
 
        {/* Posts */}
      {posts.length > 0 &&
        posts.map((i) => (
          <div className="post">
            <h1>{i.title}</h1>
            <p>{i.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
