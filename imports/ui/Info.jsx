import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const Info = props => {
  const [links, setLinks] = useState([])

  useTracker(() => {
    setLinks(Links.find({}).fetch())
  }, [])


  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
}



export default InfoContainer = (Info);
