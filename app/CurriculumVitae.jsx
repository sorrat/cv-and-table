import React from 'react';


export function CurriculumVitae(props) {
  return (
    <div className="content">
      <div className="section group">

        <div className="col span_1_of_4">
          <img src={props.photo}/>
        </div>

        <div className="col span_2_of_4">
          <h2>
            {props.fullname}
          </h2>
          <article>
            {props.biography}
          </article>
        </div>

      </div>

      <div>
        <a href={"mailto:" + props.email} className="email">E-mail me</a>
      </div>

    </div>
  );
}
