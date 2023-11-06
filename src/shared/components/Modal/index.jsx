import React from "react";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Container } from "./style";
import { CardMedia } from "@mui/material";

export const ModalComponent = ( { open, handleOpen, herosList } ) => {

    const handleClose = () => {
        handleOpen([])
    }

    const herosStats = herosList.map(hero => {
        let result =
          hero.powerstats.combat +
          hero.powerstats.durability +
          hero.powerstats.intelligence +
          hero.powerstats.power +
          hero.powerstats.speed +
          hero.powerstats.strength
        return  { result, name: hero.name }
    })

    const maxHeroStatsCombat = Math.max(...herosList.map(hero => hero.powerstats.combat))
    const maxHeroStatsDurability = Math.max(...herosList.map(hero => hero.powerstats.durability))
    const maxHeroStatsIntelligence = Math.max(...herosList.map(hero => hero.powerstats.intelligence))
    const maxHeroStatsPower = Math.max(...herosList.map(hero => hero.powerstats.power))
    const maxHeroStatsSpeed = Math.max(...herosList.map(hero => hero.powerstats.speed))
    const maxHeroStatsStrength = Math.max(...herosList.map(hero => hero.powerstats.strength))

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
            sx={{ mt: 1 }}
          >
            Vencedor{" "}
            <b style={{ color: "#c4ff0d" }}>
              <i>
                {herosStats[0].result < herosStats[1].result
                  ? herosStats[1].name
                  : herosStats[0].name}
              </i>
            </b>
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{ m: 5 }}
            align="center"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <div>
              <CardMedia
                component="img"
                height="80%"
                image={herosList[0].avatar}
                alt="Herói não possui imagem"
                sx={{ mb: 1 }}
              />
              <span>{herosList[0].name}</span>
            </div>
            <div className="box-powerstats">
              <div>
                {Object.entries(herosList[0].powerstats).map((item) => (
                  <span key={item[0]}>
                    {item[1]}
                    {(item[0] === "combat" && item[1] === maxHeroStatsCombat) ||
                    (item[0] === "durability" &&
                      item[1] === maxHeroStatsDurability) ||
                    (item[0] === "intelligence" &&
                      item[1] === maxHeroStatsIntelligence) ||
                    (item[0] === "power" && item[1] === maxHeroStatsPower) ||
                    (item[0] === "speed" && item[1] === maxHeroStatsSpeed) ||
                    (item[0] === "strength" &&
                      item[1] === maxHeroStatsStrength) ? (
                      <AddIcon fontSize="small" className="addIcon" />
                    ) : (
                      <RemoveIcon fontSize="small" className="removeIcon" />
                    )}
                  </span>
                ))}
              </div>
              <div>
                <span>Inteligência</span>
                <span>Força</span>
                <span>Velocidade</span>
                <span>Duração</span>
                <span>Poder</span>
                <span>Combate</span>
              </div>
              <div>
                {Object.entries(herosList[1].powerstats).map((item) => (
                  <span key={item[0]}>
                    {(item[0] === "combat" && item[1] === maxHeroStatsCombat) ||
                    (item[0] === "durability" &&
                      item[1] === maxHeroStatsDurability) ||
                    (item[0] === "intelligence" &&
                      item[1] === maxHeroStatsIntelligence) ||
                    (item[0] === "power" && item[1] === maxHeroStatsPower) ||
                    (item[0] === "speed" && item[1] === maxHeroStatsSpeed) ||
                    (item[0] === "strength" &&
                      item[1] === maxHeroStatsStrength) ? (
                      <AddIcon fontSize="small" className="addIcon" />
                    ) : (
                      <RemoveIcon fontSize="small" className="removeIcon" />
                    )}
                    {item[1]}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <CardMedia
                component="img"
                height="80%"
                image={herosList[1].avatar}
                alt="Herói não possui imagem"
                sx={{ mb: 1 }}
              />
              <span>{herosList[1].name}</span>
            </div>
          </Typography>
        </Container>
      </Modal>
    );
}