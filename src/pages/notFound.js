import React, {useEffect} from 'react'

function NotFound() {
  useEffect(() => {
    document.title = "404 :(";
  }, []);
  return (
    <div>404 bro</div>
  )
}

export default NotFound