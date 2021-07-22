import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import getGamesApi from '../../services';
import { saveLocalGamesList } from '../../utils/localStorage';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)"
  },

  root: {
    maxWidth: 450,
    margin: '1.5rem',
    textAlign: 'center',
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
    
  },
  media: {
    height: 300,
    
  },

});

function MediaCard() {
  const classes = useStyles();
  
  const [games, SetGames] = useState([]);

  useEffect(() => {
    const getGames = (async () => {
      const response = await getGamesApi();
      if (response) {
        saveLocalGamesList(response);
        SetGames(response);
      }
    });
    getGames();
  }, []);

  return (
    <>
      {Object.values(games).map((game) => (
        <>
          {game.id && (
            <Card className={classes.root} key={game.id}>
              <Link to={`/details/${game.id}`}>
                <CardActionArea>
                  {game.background_image && (
                    <CardMedia
                      key={game.id}
                      className={classes.media}
                      image={game.background_image}
                      title={game.name}
                    />
                  )}
                  
                  <CardContent>
                    {game.name && (
                      <Typography gutterBottom variant="h5" component="h2" >
                        {game.name}
                      </Typography>
                    )}

                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          )}
        </>
      ))}
    </>
  );
}

export default MediaCard;