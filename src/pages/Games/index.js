import React, { useEffect, useState } from 'react';

import { getGameList } from '../../utils/localStorage';
import { Content, Card, Image, Title, Span, Info, Type, InfoContent } from './styles';

function Games({ match }) {
  const [game, setGame] = useState({});

  const gameId = match.params.id;

  useEffect(() => {
    if (gameId) {
      const foundedGame = (getGameList() || {}).find((g) => g.id.toString() === gameId);
      setGame(foundedGame);
    }
  }, [gameId]);

  return (
    <Content>
  
      {game && game.id ? (
        <Card>
          {game.background_image && (
            <Image
              src={game.background_image}
              alt={game.name}
            />
          )}
          {game.name && (
            <Title>{game.name}</Title>
          )}
          <InfoContent>
            <Info>
              <Type>Categoria: </Type>
              {game.genres.map((genre) => (
                <Span>{genre.name}{game.genres.length > 1 ? ',' : ''}&nbsp;</Span>
              ))}
            </Info>
            <Info>
              <Type>Plataformas: </Type>
              {game.platforms.map((p) => (
                <Span>{p.platform.name}{game.platforms.length > 1 ? ',' : ''}&nbsp;</Span>
              ))}
            </Info>
           
          </InfoContent>
        </Card>
      ) : <></>}
    </Content>
  );
}

export default Games;