import React, { useEffect } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TimelineItem = ({ data, index }) => {
  const { position, desc, company, startDate, endDate } = data;

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  })

  return (

    <TimeItemWrapper>
      <div className="timeline-item-content">
        <div data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
          <h2>{position}</h2>
          {desc.map(i => (
            <p key={i.id}>{i.name}</p>
          ))}
        </div>
        <div className="time" data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
          <h4>{company}</h4>
          <span>{startDate}{endDate ? ` - ${endDate}` : ''}</span>
        </div>
      </div>
    </TimeItemWrapper>
  )
}

const TimeItemWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
  padding-right: 2rem;
  margin: 5rem 0;
  width: 50%;
  position: relative;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  &:nth-child(odd){
    align-self:flex-end;
    justify-content:flex-start;
    padding-right: 0;
    padding-left: 2rem;
  }

  &:nth-child(odd)::before{
    content: '';
    position:absolute;
    top: 10px;
    left: -5px;
    width:10px;
    height:10px;
    background: rgba(233,33,99,1);
    border-radius:50%;
    box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
    z-index:1;
  }

  &:nth-child(even)::before{
    content: '';
    position:absolute;
    top: 10px;
    right: -5px;
    width:10px;
    height:10px;
    background: rgba(233,33,99,1);
    border-radius:50%;
    box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
    z-index:1;
  }

  .timeline-item-content {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &:nth-child(odd) .timeline-item-content {
    align-items: flex-start;
    text-align: left;
  }

  &:nth-child(odd) .time{
    width: 145px;
    position: absolute;
    top: 6px;
    left: -180px;
    text-align: right;
  }

  &:nth-child(even) .time{
    width: 145px;
    position: absolute;
    top: 6px;
    right: -180px;
    text-align: left;
  }

    @media (min-width: 768px) {
    h2{
       font-size: 2.5rem;
    }

    &:nth-child(odd) .time {
      width: 200px;
      left: -240px;
      top:8px;
      }

    &:nth-child(even) .time{
      width: 200px;
      right: -240px;
      top:8px;
    }
  }
`;

export default TimelineItem
