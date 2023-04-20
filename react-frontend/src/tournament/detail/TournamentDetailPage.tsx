import TournamentTable from "./TournamentTable";
import { TournamentDto, TournamentStatus } from "../../shared/domain/model";
import { useParams } from "react-router";
import remoteService from "../../services/RemoteService";
import { useEffect, useState } from "react";
import LoadingPage from "../../shared/loading/LoadingPage";

export default function TournamentDetailPage() {

    let { tournamentId } = useParams();

    let [tournament, setTournament] = useState<TournamentDto>();

    useEffect(() => {
        remoteService.get<TournamentDto>("/api/lobby/tournament/" + tournamentId)
            .then((response: TournamentDto) => {
                setTournament(response);
            })
    }, [tournamentId]);

    if (tournament === undefined) {
        return <LoadingPage/>;
    }

    // TODO ZTOPCHA-21: improve these messages
    if (!tournament) {
        return <div>This tournament does not exist</div>;
    }

    if (tournament.status === TournamentStatus.NOT_STARTED) {
        return <div>Waiting for players...</div>;
    }

    if (tournament.status === TournamentStatus.DELETED) {
        return <div>Deleted</div>;
    }

    if (tournament.status === TournamentStatus.FINISHED) {
        return <div>Finished</div>;
    }


    return <TournamentTable tournament={tournament}/>;

}