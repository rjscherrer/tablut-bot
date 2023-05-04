import { Board, FieldState, Position } from "./model";

export const INITIAL_BOARD: Board = {
    fields: [
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.DEFENDER },
            { state: FieldState.DEFENDER },
            { state: FieldState.KING },
            { state: FieldState.DEFENDER },
            { state: FieldState.DEFENDER },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
    ],
};

export const MID_GAME: Board = {
    fields: [
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.DEFENDER },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.KING },
            { state: FieldState.DEFENDER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
    ],
};

export const END_GAME: Board = {
    fields: [
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.KING },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.DEFENDER },
            { state: FieldState.DEFENDER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.DEFENDER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
        [
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.ATTACKER },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
            { state: FieldState.EMPTY },
        ],
    ],
};

export function getAllPositions(board: Board, state: FieldState): Position[] {
    const positions: Position[] = [];
    board.fields.forEach((row, y) => {
        row.forEach((field, x) => {
            if (field.state === state) {
                positions.push({ x, y });
            }
        });
    });
    return positions;
}
