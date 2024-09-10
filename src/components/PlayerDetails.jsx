export default function PlayerDetails({number, fullName, position}) {
    return (
            <tr>
                <td>{number}</td>
                <td>{fullName}</td>
                <td>{position}</td>
            </tr>
    );
}