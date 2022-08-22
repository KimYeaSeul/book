import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  // 구조 분할 할다아ㅏㅏㅇ
  const { id, title, author } = props.book;

  return (
    <div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Link to={'/book/' + id} className="btn btn-primary">
              상세보기
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BookItem;
