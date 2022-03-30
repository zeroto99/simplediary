import { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount');
    return () => {
      // unmout 시점에 실행
      console.log('unmout');
    }
  }, []);
  
  return <div>Unmount Testing component</div>
}

const Lifecycle = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => setVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisible && <UnmountTest />}
    </div>
  )
}

export default Lifecycle;


