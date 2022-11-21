import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';


const Item=({info})=>{

    return (
        <Card sx={{
          backgroundColor:'#7fb2eb',
          fontSize: 12,
          justifyContent: 'center',
          alignItems: 'center',
          textAling:'center',
          textIndent: 5,
          borderRadius: 10,
          border: 1,
          width: 0.6,
          }}>
          <CardActionArea>
            <CardMedia 
              component="img"
              height="200"
              image={info.image}
              alt={info.name}
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h4" 
                component="div">
                  {info.name}
              </Typography>
              <Typography 
                  variant="body2" 
                  color="text.primary">
                {info.id}
              </Typography>
              <Typography 
                  variant="body2" 
                  color="text.primary">
                {info.category}
              </Typography>
            </CardContent>
          </CardActionArea> 
          <Link to={`/item/${info.id}`}><p>DETALLE</p></Link>
        </Card>


      );
    }

export default Item;