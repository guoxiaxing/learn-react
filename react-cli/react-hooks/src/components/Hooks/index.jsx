import { useState, useEffect, useRef } from "react";
// import { Button } from "antd";
import { Input, Button } from "antd";

export default function HookDemo() {
  // useState传入的值仅作为初始的state值
  const [count, setCount] = useState(0);
  const input = useRef(null);
  // Fragment 会在 React 编译完成之后被去掉 而且它只接受一个 key 属性
  // <></> 标签与 Fragment 标签的区别就是 它不能有任何的属性

  // const add = () => {
  //   // setCount(count + 1);
  //   // 接收之前的 state 返回新的state 覆盖原来的state（注意如果是对象的时候 返回的值应该是对象的完整属性才可以 不是setState 的那种patch方式更新了）
  //   setCount(count => count + 1);
  // };
  // 第二个参数传递一个 [] 相当于 componentDidMount 生命周期
  // 不传相当于 componentDidMount + componentDidUpdate
  // 第二个参数是数组 也可以传依赖的值(stateValue) 依赖的值发生改变的时候就会重新执行该函数
  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      // 该函数会在每次组件重新渲染之前执行
    };
  }, []);

  const show = () => {
    alert(input.current.state.value ? input.current.state.value : "no data");
  };

  return (
    <div>
      {/* <h1>当前求和为：{count}</h1>
      <Button onClick={add}>Add</Button> */}
      <h1>当前值为：{count}</h1>
      <Input ref={input} />
      <Button onClick={show}>Show</Button>
    </div>
  );
}
