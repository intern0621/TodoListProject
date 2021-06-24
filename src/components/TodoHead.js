/* 맨 위에 위치하여 날짜, 요일, 할 일 개수를 보여주는 컴포넌트 */ 

import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 10px;
    color: #868e96;
    font-size: 21px;
    font-weight: bold;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

/* CSS collector 사용하여 TodoHead function 선언 */
function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2021년 6월 24일</h1>
      <div className="day">목요일</div>
      <div className="tasks-left">할 일 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
