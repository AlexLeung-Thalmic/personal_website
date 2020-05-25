import React from 'react';
import styled from 'styled-components';
import TimelineItem from './TimelineItem';

const Timeline = ({ exp }) => {
  return (
    <TimelineWrapper className="about-page" >
      <div className="section-center">
        <article>
          <h2 className="about-title subtitle" style={{textAlign:'center'}}>Timeline</h2>
        </article>

        <article className="timeline-container">
          {exp.map((item,index) => (
            <TimelineItem data={item} index={index} key={item.id} />
          ))}
        </article>
      </div>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.section`
padding-bottom: 10rem;
margin-top: -6rem;
background: hsl(210, 36%, 96%);

  .timeline-container {
    display:flex;
    flex-direction: column;
    padding: 2.4rem 0;
    position: relative;
  }
  .timeline-container:after {
    background-color: lightgray;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    left: calc(50% - 1px);
  }
`;

export default Timeline
