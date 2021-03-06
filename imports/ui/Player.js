import * as React from "react";
import {Players} from "../api/players";

export default class Player extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.player._id}>
                <p>
                    {this.props.player.name} has {this.props.player.score} points(s).
                </p>
                    <button onClick={()=> {
                        Players.update(this.props.player._id, {$inc: {score: -1}})
                    }}>-1</button>
                    <button onClick={()=> {
                        Players.update(this.props.player._id, {$inc: {score: +1}})
                    }}>+1</button>
                    <button onClick={() => {Players.remove(this.props.player._id)}}>X</button>

            </div>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
};