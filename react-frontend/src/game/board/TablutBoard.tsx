import styled from "styled-components";
import {Field, KingField} from "./Field";

type TablutBoardProps = {
    board: number[][];
};

export default function TablutBoard({board}: TablutBoardProps) {
    const Row = styled.div`
      display: flex;
    `;
    const TablutRow = styled.div`
      display: flex;
      margin: 0 auto;
    `;
    const RowIndex = styled.span`
      margin: 0.5em;
      align-self: center;
    `;
    const ColIndex = styled.span`
      margin: 0.5em;
      align-self: center;
    `;
    const ColumnIndexContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      margin-left: 0.5em;
    `;
    const TablutBoardContainer = styled.div`
      flex-wrap: wrap;
      padding: 10px;
      width: fit-content;
    `;

    function columnCoordinateOf(colIndex: number) {

        return (
            String.fromCharCode(65 + colIndex)
        );
    }

    return (
        <TablutBoardContainer>
            <ColumnIndexContainer>
                {board[0].map((_, colIndex) => (
                    <ColIndex>
                        {columnCoordinateOf(colIndex)}
                    </ColIndex>
                ))}
            </ColumnIndexContainer>
            {board.map((row, rowIndex) => (
                <TablutRow>
                    <RowIndex>{rowIndex + 1}</RowIndex>
                    <Row key={rowIndex}>
                        {
                            row.map((field, colIndex) => {
                                if (rowIndex === 4 && colIndex === 4) {
                                    return <KingField fieldValue={field} key={`${rowIndex}${colIndex}`}/>
                                } else {
                                    return <Field fieldValue={field} key={`${rowIndex}${colIndex}`}/>
                                }
                            })
                        }
                    </Row>
                </TablutRow>
            ))}
        </TablutBoardContainer>
    );
}