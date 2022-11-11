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
          maxwidth:350,
          minWidth:250,
          fontSize: 16,
          padding: "0 5",
          justifyContent: 'center',
          }}>
          <CardActionArea>
            <CardMedia 
              component="img"
              width="80%"
              image={info.image}
              alt={info.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.id}
              </Typography>
            </CardContent>
          </CardActionArea> 

          <Link to={`/item/${info.id}`}>DETALLE</Link>
          <CardActions>
              {<ItemCount key={info.id} initial={0} stock={info.stock} onAdd={onAdd}/>}
          </CardActions>
        </Card>


      );
    }

export default Item;