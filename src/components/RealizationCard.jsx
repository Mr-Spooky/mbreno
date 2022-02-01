import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Dialog, DialogContent, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles({
  dialog: {
    maxHeight: '80vh !important',
  },
  images: {
    maxHeight: '75vh !important',
  },
});

function RealizationCard({
  title, subtitle, image, images,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: '300px', margin: '10px', cursor: 'pointer', borderRadius: '15px',
        }}
        onClick={() => setOpen(true)}
      >
        <CardMedia component="img" image={image} alt="image" height="200px" />
        <CardContent sx={{ padding: '5px !important', height: '100%' }}>
          <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
          <Typography sx={{ fontSize: '12px' }}>{subtitle}</Typography>
        </CardContent>
      </Card>
      <Dialog classes={{ paper: classes.dialog }} open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          {
            images.length !== 0
              ? (
                <Carousel showArrows infiniteLoop dynamicHeight showThumbs={false} showStatus={false}>
                  <div>
                    <img className={classes.images} src={image} alt="réalisation" />
                  </div>
                  {
                    images.length !== 0 && images.map((img) => (
                      <div key={img}>
                        <img className={classes.images} src={img} alt="réalisation" />
                      </div>
                    ))
                  }
                </Carousel>
              )
              : (
                <Carousel showArrows infiniteLoop dynamicHeight showThumbs={false} showStatus={false}>
                  <div>
                    <img className={classes.images} src={image} alt="réalisation" />
                  </div>
                </Carousel>
              )
          }
        </DialogContent>
      </Dialog>
    </>
  );
}

RealizationCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array),
};

RealizationCard.defaultProps = {
  images: [],
};

export default RealizationCard;
