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
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status: any) {
      setIsOnline(status);
    }

    TestAPI.getUser("asdf", handleStatusChange);

    return function cleanup() {
      TestAPI.getUser("asdf", handleStatusChange);
    };
  }, [isOnline]);

  if (isOnline === null) {
    return <div><h4 color='red'>Loading...</h4></div>
  }
  return <div><h4 color='green'>{isOnline}</h4></div>
}

export default FriendStatus