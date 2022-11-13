import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material';
import {red,blue} from '@mui/material/colors'

const Item=({info})=>{

  const onAdd =(quantity)=>{
    console.log(`Compraste ${quantity} unidades`)
  }

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
          <CardActions>
              {<ItemCount key={info.id} initial={1} stock={info.stock} onAdd={onAdd}/>}
          </CardActions>
        </Card>


      );
    }

export default Item;