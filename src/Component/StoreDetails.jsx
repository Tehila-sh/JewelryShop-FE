import React from 'react';
import { Typography, Grid, Button, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '##013754',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  info: {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
    color: '#FFFFFF',
  },
  column: {
    marginBottom: '20px',
  },
  text: {
    color: '#FFFFFF',
  },
};

const StoreDetails = () => {
  const number = "+1 (555) 123-4567";
  const whatsapp = "+1 (555) 987-6543";
  const email = "Tehila2874@gmail.com";
  const instagram = "https://www.instagram.com/glimmeringjewels/";
  const website = "http://localhost:3000";
  const address = "123 Diamond Avenue, Sparkling City, Gemland";
  const hours = "Sun - Thur: 9:00 AM - 7:00 PM";

  return (
    <Grid container spacing={3} alignItems="stretch">
      {/* Search us */}
      <Grid item xs={12} md={4}>
        <div>
          <Typography variant="h5" style={{ ...styles.text, marginBottom: '5px' }}>
            Search us:
          </Typography>
          <div style={styles.column}>
            <div style={styles.info}>
              <LocationOnIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Address:</strong> {address}
              </Typography>
            </div>
            <div style={styles.info}>
              <AccessTimeIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Opening Hours:</strong> {hours}
              </Typography>
            </div>
            <div style={styles.info}>
              <InstagramIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Instagram:</strong> <Link href={instagram} target="_blank" rel="noopener" style={styles.text}>{instagram}</Link>
              </Typography>
            </div>
            <div style={styles.info}>
              <WebIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Website:</strong> <Link href={website} target="_blank" rel="noopener" style={styles.text}>{website}</Link>
              </Typography>
            </div>
          </div>
        </div>
      </Grid>

      {/* Contact us */}
      <Grid item xs={12} md={4}>
        <div style={{marginLeft:'50px'}}>
          <Typography variant="h5" style={{ ...styles.text, marginBottom: '5px' }}>
            Contact us:
          </Typography>
          <div style={styles.column}>
            <div style={styles.info}>
              <PhoneIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Number:</strong> {number}
              </Typography>
            </div>
            <div style={styles.info}>
              <WhatsAppIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>WhatsApp:</strong> {whatsapp}
              </Typography>
            </div>
            <div style={styles.info}>
              <EmailIcon style={{ ...styles.icon }} />
              <Typography variant="body1" style={styles.text}>
                <strong>Email:</strong> <Link href={`mailto:${email}`} target="_blank" rel="noopener" style={styles.text}>{email}</Link>
              </Typography>
            </div>
          </div>
          <div style={styles.info}>
            <Button component={Link} to="/about" style={styles.text}>
              About us
            </Button>
            <Button component={Link} to="/contact" style={styles.text}>
              Contact us
            </Button>
          </div>
        </div>
      </Grid>

      {/* Location */}
      <Grid item xs={12} md={3}>
        <div>
          <Typography variant="h5" style={{ ...styles.text, marginBottom: '5px' }}>
            Location:
          </Typography>
          <div style={{ position: 'relative', width: '100%', height: '120px', textAlign: 'right' }}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${address}`}
              target="_blank"
              rel="noopener"
            >
              <img src="/assets/backgrounds/map.png" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </a>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '0.5px' }}>
            {/* Add any additional content here if needed */}
          </Paper>
        </Grid>
      <Grid item xs={12} md={12} align="center" > {/* Center the logo */}
  <img src='/assets/backgrounds/sparkleMedium.gif' alt="Logo" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
</Grid>


    </Grid>
  );
};

export default StoreDetails;
