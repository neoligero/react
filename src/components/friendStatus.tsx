import React, { useState, useEffect } from 'react';

interface IFriendProps {
  friend: {
    id: string
  }
}

const TestAPI = {
  getUser: (id: string, cb: Function) => {
    setTimeout(function() {cb(true); console.log(id)}, 2000)
  }
}

function FriendStatus(props: any) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleStatusChange(status: any) {
      setIsOnline(true);
    }

    TestAPI.getUser("asdf", handleStatusChange);

    return function cleanup() {
      TestAPI.getUser("asdf", handleStatusChange);
    };
  }, [isOnline]);

  if (isOnline === false) {
    return <div><h4 color='red'>Loading...</h4></div>
  }
  return <div><h4 style={{color:'green'}}>user{isOnline}</h4></div>
}

export default FriendStatus