import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Want To KnoW Me More <br/>This Is My Portfolio
        
      </SectionTitle>
      <SectionText>
        Want Your Youtube Channel To More Efficent Here You Got It 
      </SectionText>
      <Button onClick={() => window.location="https://www.youtube.com"}> Learn More </Button>
    </LeftSection>

  </Section>
);

export default Hero;