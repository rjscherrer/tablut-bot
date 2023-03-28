package ch.zuehlke.fullstack.hackathon.model;

import ch.zuehlke.common.GameAction;
import ch.zuehlke.tablut.Board;
import ch.zuehlke.tablut.Coordinates;
import ch.zuehlke.tablut.Field;
import ch.zuehlke.tablut.FieldState;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class InternalGameState {

    private final Board board;

    private final List<GameAction> actionHistory;

    public InternalGameState() {
        this.board = Board.createInitialBoard();
        this.actionHistory = new ArrayList<>();
    }

    public List<GameAction> getActionHistory() {
        return actionHistory;
    }

    public boolean attackersTurn() {
        return actionHistory.size() % 2 == 0;
    }

    public boolean defendersTurn() {
        return !attackersTurn();
    }


    public Set<GameAction> getPossibleActions() {
        if (attackersTurn()) {
            return getPossibleActionsForAttacker();
        }
        return getPossibleActionsForDefender();
    }

    private Set<GameAction> getPossibleActionsForAttacker() {
        return board.getAllFieldsAsList().stream()
                .filter(field -> field.state().equals(FieldState.ATTACKER))
                .flatMap(a -> findAvailableActions(a).stream()).collect(Collectors.toSet());
    }

    private Set<GameAction> findAvailableActions(Field field) {

        var result = new HashSet<GameAction>();
        result.addAll(findAvailableActions(field, Coordinates::left));
        result.addAll(findAvailableActions(field, c -> c.right(9)));
        result.addAll(findAvailableActions(field, Coordinates::up));
        result.addAll(findAvailableActions(field, c -> c.down(9)));

        return result;
    }

    private Set<GameAction> findAvailableActions(Field field, Function<Coordinates, Optional<Coordinates>> neighbourGetter) {
        var result = new HashSet<GameAction>();

        var neighbour = neighbourGetter.apply(field.coordinates());
        while (neighbour.isPresent()) {
            var neighbourCoordinates = neighbour.get();
            var neighbourField = board.getFieldForCoordinate(neighbourCoordinates);
            if ((neighbourField.state() == FieldState.EMPTY && !neighbourField.isCastle()) ||
                    (field.state() == FieldState.KING && neighbourField.isCastle())) {
                result.add(new GameAction(field.coordinates(), neighbourField.coordinates()));
            } else {
                break;
            }
            neighbour = neighbourGetter.apply(neighbourCoordinates);
        }
        return result;
    }

    private Set<GameAction> getPossibleActionsForDefender() {
        return board.getAllFieldsAsList().stream()
                .filter(field -> field.state() == FieldState.DEFENDER || field.state() == FieldState.KING)
                .flatMap(a -> findAvailableActions(a).stream()).collect(Collectors.toSet());
    }

    public void playAction(GameAction gameAction) {
        getActionHistory().add(gameAction);
        board.movePiece(gameAction.from(), gameAction.to());

        var toField = board.getFieldForCoordinate(gameAction.to());

        checkPinchCapture(toField, Coordinates::left);
        checkPinchCapture(toField, c -> c.right(9));
        checkPinchCapture(toField, Coordinates::up);
        checkPinchCapture(toField, c -> c.down(9));
    }

    private void checkPinchCapture(Field filed, Function<Coordinates, Optional<Coordinates>> neighbourGetter) {
        neighbourGetter.apply(filed.coordinates())
                .map(board::getFieldForCoordinate)
                .ifPresent(neighbour -> {
                    if (filed.state().isEnemy(neighbour.state())) {
                        neighbourGetter.apply(neighbour.coordinates())
                                .map(board::getFieldForCoordinate)
                                .ifPresent(nextNeighbour -> {
                                    if (neighbour.state().isEnemy(nextNeighbour.state())) {
                                        board.updateField(new Field(neighbour.coordinates(), FieldState.EMPTY));
                                    }
                                });
                    }
                });
    }

    public Board board() {
        return board;
    }

    public boolean isGameFinished() {
        return hasDefenderWon() || isDraw() || hasAttackerWon();
    }

    public boolean isDraw() {
        return getActionHistory().size() >= 200;
    }

    public boolean hasDefenderWon() {
        if (attackersTurn() && getPossibleActions().isEmpty()) {
            return true;
        }
        return board.getAllFieldsAsList().stream()
                .filter(a -> a.state() == FieldState.KING)
                .anyMatch(Field::isBorder);
    }

    public boolean hasAttackerWon() {
        if (defendersTurn() && getPossibleActions().isEmpty()) {
            return true;
        }
        return board.getAllFieldsAsList().stream()
                .filter(a -> a.state() == FieldState.KING)
                .findAny()
                .isEmpty();

    }
}
