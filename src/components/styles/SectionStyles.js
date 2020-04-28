import styled from 'styled-components';

const Section = styled.section`
  margin: 2em auto;
  padding: 0 1em;
  max-width: 550px;

  @media only screen and (max-width: 600px) {
    padding: 0 0.5em;
  }
`;

const SectionDetail = styled.div`
  padding: 1em;
  margin-left: 1em;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
`;

export { Section, SectionDetail };
