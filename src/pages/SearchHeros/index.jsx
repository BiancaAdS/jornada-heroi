import React, { useContext, useEffect, useState } from "react"

import { AuthContext } from "../../context/auth/AuthContex";

import { Autocomplete, TextField, Grid  } from "@mui/material";

import { CardHero } from "./components/CardHero"
import { ModalComponent } from "../../shared/components/Modal";

import { herosInstance } from '../../services/Api'

import { Container, ListboxComponent, ListItemComponent } from "./style"


export const SearchHeros = () => {

    const { userDetails } = useContext(AuthContext)

    const [listHeros, setListHeros] = useState([])
    const [heroFilter, setHeroFilter] = useState('')
    const [herosSelecteds, setHerosSelected] = useState([])

    const handleFilterSearch = (data, filterOption) => {
        return data.filter((heros) => {
           return heros.name
             .toLowerCase()
             .includes(
               filterOption.name
                 ? filterOption.name.toLowerCase()
                 : filterOption.toLowerCase()
             )
        })
    }

    const handleSelectHero = (nameHero) => {
        setHeroFilter(nameHero)
    }

    useEffect(() => {
        const extractListHeros = async () => {
          try {
            const { data } = await herosInstance.get();
            if (data && heroFilter) {
              setListHeros(handleFilterSearch(data, heroFilter));
            } else if (data) {
              setListHeros(data);
            }
          } catch (error) {
            console.log('Error: ', error.message)
          }
        }
        extractListHeros()
    }, [heroFilter])

    const listIdHerosSelected = herosSelecteds.map(hero => hero.id)
    
    const handleOnClick = (data) => {
        if(!listIdHerosSelected.includes(data.id)) {
            setHerosSelected([ ...herosSelecteds, data ])
        } else {
            setHerosSelected(herosSelecteds.filter(elem => elem.id !== data.id))
        }
    }   
    
    return (
      <Container>
        <h1 style={{ color: "white" }}>
          Jornada do Herói - <i>{userDetails && userDetails.username}</i>
        </h1>

        <div className="box-filter">
          <Autocomplete
            id="free-solo-demo"
            className="autocomplete"
            freeSolo
            blurOnSelect
            clearText="Limpar"
            closeText="Fechar"
            loadingText="Procurando heróis..."
            noOptionsText="Herói não encontrado."
            popupIcon=""
            defaultValue=""
            ListboxComponent={ListboxComponent}
            options={listHeros.map((option) => option)}
            getOptionLabel={(option) => (option.name ? option.name : option)}
            fullWidth
            onChange={(event, value) => handleSelectHero(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                className="autocomplete-input"
                placeholder="Busque o Herói pelo nome"
              />
            )}
            renderOption={(params, option) => (
              <ListItemComponent {...params} key={option.id}>
                {option.name}
              </ListItemComponent>
            )}
          />
        </div>

        <div className="box-list">
          <Grid container spacing={2}>
            {listHeros.map((item) => (
              <Grid item xs={12} sm={4} lg={3} key={item.id}>
                <CardHero
                  id={item.id}
                  name={item.name}
                  strength={
                    item.powerstats.combat +
                    item.powerstats.durability +
                    item.powerstats.intelligence +
                    item.powerstats.power +
                    item.powerstats.speed +
                    item.powerstats.strength
                  }
                  avatar={item.images.lg}
                  powerstats={item.powerstats}
                  handleOnClick={handleOnClick}
                  herosSelecteds={listIdHerosSelected}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        {herosSelecteds.length === 2 && (
          <ModalComponent
            open={herosSelecteds.length === 2}
            handleOpen={setHerosSelected}
            herosList={herosSelecteds}
          />
        )}
      </Container>
    )
}