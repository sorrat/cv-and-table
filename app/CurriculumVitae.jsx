import React from 'react';


export function CurriculumVitae(props) {
  return (
    <article className="content">

      <div className="horizontal-section">
        <div className="CurriculumVitae--photo">
          <img src={props.photo} />
        </div>

        <div>
          <h2>
            {props.fullname}
          </h2>
          <div>
            {props.biography}
          </div>
        </div>
      </div>

      <div>
        <a href={"mailto:" + props.email} className="email">E-mail me</a>
      </div>

    </article>
  );
}
