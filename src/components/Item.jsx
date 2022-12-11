import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { green, grey } from '@mui/material/colors';
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
          minWidth: 200,
          maxWidth: 250,
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
                Codigo de Producto: {info.code}
              </Typography>
              <Typography 
                  variant="body2" 
                  color="text.primary">
                Linea: {info.category}
              </Typography>
            </CardContent>
          </CardActionArea> 
          <Link to={`/item/${info.id}`}>
            <Button sx={{color: grey[50],
            backgroundColor: green[400],
            mb:2,
            ':hover':{
              bgcolor: green[800], 
              color: 'white'}}}
               variant="contained"
              > DETALLE </Button>
            </Link>
        </Card>


      );
    }

export default Item;