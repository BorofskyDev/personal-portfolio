import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Focusing on the latest in web development, my range is centered around
      frontend development, but also have navigated backend development as well
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          React
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
          Experience with: <br />
          Node.js <br /> 
          PostgreSQL
        </ListParagraph>
      </ListItem>
      {/* <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience with >br />
          React
        </ListParagraph>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
