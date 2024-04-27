import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCounties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(setCounties)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <CountryList countries={countries} />
        {error && <Heading>Something went wrong...</Heading>}
      </Container>
    </Section>
  );
};
