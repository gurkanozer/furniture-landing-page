import React from "react";
import { ListContainer, ListItem, ListLink } from "./style";
const LinkList = ({ title, links }) => {
  return (
    <ListContainer>
      <ListItem>
        <ListLink isTitle={true}>{title}</ListLink>
      </ListItem>
      {links.map((link, index) => (
        <ListItem>
          <ListLink key={index} href={link.link}>
            {link.child} {link.text}
          </ListLink>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default LinkList;
