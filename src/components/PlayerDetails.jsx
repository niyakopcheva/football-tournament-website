import stylePlayerPosition from "../services/stylePlayerPosition";

export default function PlayerDetails({number, fullName, position}) {
    const color = stylePlayerPosition(position);
    return (
            <tr>
                <td>{number}</td>
                <td>{fullName}</td>
                <td className="position">
                    <span style={{backgroundColor: color}}>{position}</span>
                    
                    </td>
            </tr>
    );
}