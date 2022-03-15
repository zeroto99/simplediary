import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:'팡이',
//     content:'밥먹을 때는 개도 안건드린다',
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:'포미',
//     content:'날봐날봐',
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:'뿌꾸',
//     content:'산책!!!!!!!!!가자!!!!!!',
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
