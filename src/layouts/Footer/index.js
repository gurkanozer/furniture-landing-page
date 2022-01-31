import React from 'react';
import {FooterContainer, Container, BrandContainer, BrandLogo, Paragraph,OtherLinks, OtherLinkItem, OtherLink, Copy} from './style';
import {LinkList} from '../../components';
import {
  ImFacebook,
  ImTwitter,
  ImInstagram
 } from "react-icons/im";
 import {MdOutlineCopyright} from "react-icons/md";

const Footer = () => {
  const serviceLinks = [
    {
        link:"#",
        text:"Email Marketing"
    },
    {
        link:"#",
        text:"Campaigns"
    },
    {
        link:"#",
        text:"Branding"
    },
];
const furnitureLinks = [
  {
    link:"#",
    text:"Beds"
  },
  {
    link:"#",
    text:"Chair"
  },
  {
    link:"#",
    text:"All"
  }
];
const socialLinks = [
  {
    link:"#",
    text:` Facebook`,
    child:<ImFacebook/>
  },
  {
    link:"#",
    text:` Twitter`,
    child:<ImTwitter/>
  },
  {
    link:"#",
    text:` Instagram`,
    child:<ImInstagram/>
  }
]
  return (
      <FooterContainer>
        <Container>
          <BrandContainer>
            <BrandLogo>Panto</BrandLogo>
            <Paragraph>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</Paragraph>
          </BrandContainer>
          <LinkList title="Service" links={serviceLinks}/>
          <LinkList title="Furniture" links={furnitureLinks}/>
          <LinkList title="Follow Us" links={socialLinks}/>
          <OtherLinks>
            <OtherLinkItem>
              <OtherLink href="#">Terms & Conditions</OtherLink>
            </OtherLinkItem>
            <OtherLinkItem>
              <OtherLink href="#">Privacy Policy</OtherLink>
            </OtherLinkItem>
          </OtherLinks>
          <Copy>Copyright <MdOutlineCopyright/> 2022</Copy>
        </Container>
      </FooterContainer>
  );
};

export default Footer;
