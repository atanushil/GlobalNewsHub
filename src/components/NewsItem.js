import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const NewsItem = ({ image_url, title, description, learn_more_url }) => {
  return (
    <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ height: '140px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={image_url}
          alt={title}
          sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
        <Typography
          variant="h6"
          component="div"
          sx={{ height: '60px', overflow: 'hidden', textOverflow: 'ellipsis',mb:2, display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}
        >
          {description}
        </Typography>
      </CardContent>
      <Button size="small" color="primary" href={learn_more_url} target="_blank">
        Learn More
      </Button>
    </Card>
  );
};

export default NewsItem;
