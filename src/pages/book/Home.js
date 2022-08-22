import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  // 함수 실행시 최초 한번 실행되는 것 = useEffect
  useEffect(() => {
    // IO발생, 네트워크 통신을 하니까 다운로드를 받아야함.
    // then -> promise 를 받음, 빈통장을 주고 돈 주겠다고 약속
    // 그 다음 then -> 이때 줄게
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBooks(res);
      }); // 비동기 함수
  }, []); //한번만 실행하도록 빈 배열 넣음.dependency
  // 데이터 받아오는동안 밑으로 쭉 내려가다가 비동기니까
  // 중간에 그려지면 다시 그리고
  // 다 그려지면 setBooks에 상태가 변하니까 또 그려준대
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
