import { useParams } from "react-router";
import TablutBoard from "./board/TablutBoard";
import styled from "styled-components";
import remoteService from "../services/RemoteService";
import { presentSuccessToast } from "../common/ToastComponent";
import { useGamePolling } from "../shared/hooks/GameStatePollingHook";
import PlayerDisplay from "./playerDisplay/PlayerDisplay";
import { GameStatus, Player } from "../shared/domain/model";
import LoadingPage from "../shared/ui/loading/LoadingPage";
import Button from "../shared/ui/button/Button";

export interface PlayerRoles {
    attacker: Player | null;
    defender: Player | null;
}

const GameStateContainer = styled.div`
  margin-left: 1.0em;
`;

const BoardContainer = styled.div`
  margin-left: 0.5em;
`;

const GameContainer = styled.div`
  margin-left: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function GamePage() {

    let { gameId } = useParams();
    const { game, playerRoles, isLoading } = useGamePolling(gameId!, 1000);

    if (isLoading) {
        return <LoadingPage/>;
    } else if (!isLoading && !game) {
        return <h2>Game does not exist :(</h2>
    }

    // TODO ZTOPCHA-14: Hide start game button if user is not admin
    return (
        <>
            <GameContainer>
                <BoardContainer>
                    <Title> Game {gameId} </Title>
                    <PlayerDisplay players={playerRoles}/>
                    <TablutBoard board={game?.state.board!}/>
                    {game?.status === GameStatus.NOT_STARTED &&
                        <Button onClick={() => handleStartGame(gameId!)}>"Start Game"</Button>}
                </BoardContainer>
                <GameStateContainer>
                </GameStateContainer>
            </GameContainer>

        </>
    )
}

const handleStartGame = (gameId: string) => {

    remoteService.post(`/api/lobby/game/${gameId}/start`)
        .then(() => {

            presentSuccessToast(`Game "${gameId}" has started`)

        });
}
