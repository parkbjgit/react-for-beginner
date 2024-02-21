import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing]=useState(false);
  const onInvert=()=>{setShowing((prev)=>!prev)};
  const onClick = () => setValue((prev) => prev + 1);
  function Hello(){
    useEffect(()=>{
      console.log("created");
      return ()=>console.log("destroyed:(");
    },[]
    )
    return <h2>print hello</h2>;
  }
  const onChange = (event) => setKeyword(event.target.value);
  console.log("rendering");
  useEffect(() => { console.log("only once"); }, []);
  useEffect(() => { console.log("'keyword' changes",keyword); }, [keyword]);
  useEffect(() => { console.log("'counter' change",counter); }, [counter]);
  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} />
      <h1 className={styles.title}>welcome back!</h1>
      <Button onClick={onClick} text="continue" />
      <span>{counter}</span>
      <button onClick={onInvert}>{showing?"itstrue":"itsfalse"}</button>
      {showing?<Hello />:null}
    </div>
  );
}

export default App;
