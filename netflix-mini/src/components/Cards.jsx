import React from 'react'


export default function Cards(props) {
  return (
    <>
    <a href="" class="card">
      <img src={props.img} class="card__image" alt="" height="200px" width="200px" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.name}</h3>            
            <span class="card__status">{props.time}</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>  
    </>
  )
}
