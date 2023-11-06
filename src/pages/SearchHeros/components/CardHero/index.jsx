import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';

import { Container } from "./style";

export const CardHero = ({ id, name, strength, avatar, powerstats, handleOnClick, herosSelecteds }) => {

    const cardBoxColor =
      strength >= 100 && strength < 200
        ? "box-cardGreen"
        : strength >= 200 && strength < 300
        ? "box-cardBlue"
        : strength >= 300 && strength < 400
        ? "box-cardOrange"
        : "box-cardRed"

  return (
    <Container>
      <Card sx={{ maxWidth: 400 }} component='div' className={`${cardBoxColor} ${herosSelecteds.includes(id) ? 'cardSelected': ''}`}>
        <CardActionArea component='button' onClick={() => handleOnClick({id, name, avatar, powerstats})}>
        <CardMedia
          image={avatar}
          title={name}
          component="img"
          alt="O herói não possui imagem"
        />
        <CardContent className='text-options'>
          <Typography align="center" gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography align="center" display='flex' alignItems='center' justifyContent='center' variant="h6" component="div" >
            <BoltIcon />{strength ? strength : "0"}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
