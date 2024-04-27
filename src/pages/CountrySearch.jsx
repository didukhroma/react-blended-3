import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  useEffect(() => {
    const region = searchParams.get('region');

    if (!region) {
      return;
    }
    fetchByRegion(region)
      .then(setCountries)
      .catch(({ message }) => setError(message))
      .finally(setIsLoading(false));
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        <CountryList countries={countries} />
        {error && <Heading>Something went wrong...</Heading>}
      </Container>
    </Section>
  );
};
