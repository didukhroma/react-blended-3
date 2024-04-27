import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
      </Container>
    </Section>
  );
};
