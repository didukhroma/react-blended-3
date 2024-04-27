import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId)
      .then(setCountry)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Link to={goBack.current}>Go back</Link>
        {isLoading && <Loader />}
        {error && <Heading>Something went wrong...</Heading>}
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
