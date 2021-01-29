import { useState } from "react";
import { Button } from "antd";

export default function HookDemo() {
  // useState传入的值仅作为初始的state值
  const [count, setCount] = useState(0);

  const add = () => {
    // setCount(count + 1);
    // 接收之前的 state 返回新的state 覆盖原来的state（注意如果是对象的时候 返回的值应该是对象的完整属性才可以 不是setState 的那种patch方式更新了）
    setCount(count => count + 1);
  };

  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <Button onClick={add}>Add</Button>
    </div>
  );
}
