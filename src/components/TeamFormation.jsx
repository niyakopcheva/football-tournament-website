import { useEffect, useState } from 'react';
import '../css/footballField.css';
import getTeamName from '../queries/getTeamName';
import { parseCSVFile } from '../services/csvParser';

export default function TeamFormation({ match, teams, teamID }) {
    const [records, setRecords] = useState([]);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [recordsData, playersData] = await Promise.all([
                    parseCSVFile('/csv_files/records.csv'),
                    parseCSVFile('/csv_files/players.csv')
                ]);
                setRecords(recordsData);
                setPlayers(playersData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    },[])

    if (loading) {
        return <div>Loading...</div>;
    }

    const currentPlayerRecords = records.filter(record => record.MatchID === match.ID && record.fromMinutes === '0');
    const currentPlayers = players
        .filter(player => player.TeamID === teamID
            && currentPlayerRecords.map(record => record.PlayerID).includes(player.ID)
        );
        console.log(currentPlayers);

    const goalKeeper = currentPlayers.find(player => player.Position === 'GK').FullName;
    const newPlayers = currentPlayers.filter(player => player !== goalKeeper);


    const playerName = "Player";
    return (
        <div className="formation">
            <h2>{getTeamName(teams, teamID)}</h2>
            <div className="wrapper">
                <div className="campo">
                    <div className="semi1"></div>
                    <div className="semi2"></div>
                    <div className="divisoria"></div>
                    <div className="interior"></div>
                    <div className="penalty"></div>

                    <div className="player-position">
                        <div id="gk" className="gk">
                        <label htmlFor="gk">{goalKeeper}</label>
                            GK</div>
                    </div>
                    <div className="player-position">
                        <div id="lb" className="lb">
                            <label htmlFor="lb">{newPlayers[0].FullName}</label>
                            CB
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="rb" className="rb">
                            <label htmlFor="rb">{newPlayers[1].FullName}</label>
                            CB
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="lwb" className="lwb">
                            <label htmlFor="lwb">{newPlayers[2].FullName}</label>
                            LB
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="rwb" className="rwb">
                            <label htmlFor="rwb">{newPlayers[3].FullName}</label>
                            RB
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="lm" className="lm">
                            <label htmlFor="lm">{newPlayers[4].FullName}</label>
                            LM
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="cm" className="cm">
                            <label htmlFor="cm">{newPlayers[5].FullName}</label>
                            CM
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="rm" className="rm">
                            <label htmlFor="rm">{newPlayers[6].FullName}</label>
                            RM
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="wl" className="wl">
                            <label htmlFor="wl">{newPlayers[7].FullName}</label>
                            WL
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="cf" className="cf">
                            <label htmlFor="cf">{newPlayers[8].FullName}</label>
                            CF
                        </div>
                    </div>
                    <div className="player-position">
                        <div id="wr" className="wr">
                            <label htmlFor="wr">{newPlayers[9].FullName}</label>
                            WR
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>

    );
}