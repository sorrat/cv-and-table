import React from 'react';

import {NavigationBar} from './NavigationBar.jsx'
import {CurriculumVitae} from './CurriculumVitae.jsx'


const CV = {
  photo: 'photo.jpg',
  fullname: 'John Doe',
  biography: `John Doe is sometimes used to refer to a typical male in other contexts as well, in a similar manner to John Q. Public in the United States or Joe Public, John Smith or Joe Bloggs in Britain. For example: the first name listed on a form might be John Doe, along with a fictional address or other fictional information to provide an example of how to fill in the form. The name is also used frequently in US popular culture, for example in the Frank Capra film Meet John Doe. John Doe was also the name of a 2002 American television series.`,
  email: 'example@example.com'
}


class FirstPage extends React.Component {
  componentDidMount() {
    document.title = "1. Резюме";
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <CurriculumVitae {...CV} />
      </div>
    );
  }
}

export {FirstPage};
