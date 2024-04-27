import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ flag, country, id }) => (
        <GridItem key={id}>
          <img src={flag} alt={country} />
        </GridItem>
      ))}
    </Grid>
  );
};
