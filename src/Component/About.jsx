import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const About = () => {
  window.scrollTo(0, 0)
  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#013754' }}>
        About SPARKLE
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#013754' }}>
        The crystal cutting work of the founder of the company, Mr. Nir Shuster, began many years ago in the early 60's.
        His dream was to innovate something innovative in the jewelry world, a precise combination of innovation and uncompromising quality.
        Step by step his dream came true and our company became the leading jewelry and accessories brand in the world.
        Today the family continues the tradition...
      </Typography>

      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#013754', marginTop: '20px' }}>
        Raw Materials
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#013754' }}>
        SPARKLE jewelry is designed from a variety of high-quality raw materials such as sterling silver, 14 carat gold (without coatings), inlays of gems and pearls that enrich the jewelry.
      </Typography>

      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#013754', marginTop: '20px' }}>
        Handmade
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#013754' }}>
        The Scandinavian concept behind the brand is based on the selection of magnificent handmade jewelry, which allows everyone to design the jewelry according to their personal style and according to their budget. Beyond bracelets you can find plenty of impressive rings, earrings with presence and elegant necklaces.
      </Typography>

      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#013754', marginTop: '20px' }}>
        Personal
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#013754' }}>
        The perfect gift, uniquely suitable for everyone, for every occasion and for every budget.
      </Typography>

      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#013754', marginTop: '20px' }}>
        SPARKLE Jewelry
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#013754' }}>
        SPARKLE jewelry is sold worldwide in over 70 countries, on all six continents and in approximately 10,300 points of sale, including approximately 950 flagship stores. The company was founded in 1982 and is headquartered in Copenhagen, Denmark. SPARKLE has over 6,900 employees, of which 4,900 are employed in the production plant located in Jamopolis, Thailand. The company is listed on NASDAQ OMX on the Copenhagen Stock Exchange in Denmark.
      </Typography>
    </Container>
  );
};

export default About;
