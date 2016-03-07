import React from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes.jsx';
import laneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {

	render() {

		return (
			<div>
				<button className="add-Lane" onClick={this.addLane}>+</button>
				<AltContainer 
					stores={[LaneStore]}
					inject={{
						lanes: () => LaneStore.getState().lanes || []
					}}
				>
					<Lanes />
				</AltContainer>
			</div>
		);
	}

	addLane() {
		laneActions.create({name: 'new lane'});
	}

}


