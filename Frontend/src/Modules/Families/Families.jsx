import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import css from './tree.module.css';
import ReactFamilyTree from 'react-family-tree';
import classNames from 'classnames';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


export const NODE_WIDTH = 140;
export const NODE_HEIGHT = 160;

function getNodeStyle({ left, top }) {
	return {
		width: NODE_WIDTH,
		height: NODE_HEIGHT,
		transform: `translate(${left * (NODE_WIDTH / 2)}px, ${top * (NODE_HEIGHT / 2)}px)`,
	};
}

function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style }){
  	const clickHandler = React.useCallback(() => onClick(node.id), [node.id, onClick]);
	const clickSubHandler = React.useCallback(() => onSubClick(node.id), [node.id, onSubClick]);
	return (
		<div className={css.root} style={style}>
			<div className={classNames(css.inner, css[node.gender], isRoot && css.isRoot, isHover && css.isHover,)} onClick={clickHandler}>
				<div className={css.id}>{node.id}</div>
				{node.hasSubTree && (<div className={classNames(css.sub, css[node.gender])} onClick={clickSubHandler}/>)}
			</div>
		</div>
	);
}

export default function Tree({ family_id }) {
	const nodes = require('../../Data/Families/'+family_id+".json")
	const firstNodeId = React.useMemo(() => nodes[0].id, [nodes]);
	const [rootId, setRootId] = React.useState(firstNodeId);

	const [selectId, setSelectId] = React.useState("");
	const [hoverId, setHoverId] = React.useState("");

    const changeSourceHandler = React.useCallback(
		(value, nodes) => {
		  setRootId(nodes[0].id);
		  setSelectId(undefined);
		  setHoverId(undefined);
		},[],
	);

	const selected = React.useMemo(() => (
		nodes.find(item => item.id === selectId)
	), [nodes, selectId]);

	return (
		<Container maxWidth="lg">
			{nodes.length > 0 && (
				<TransformWrapper>
					<TransformComponent>
						<ReactFamilyTree
							nodes={nodes}
							rootId={rootId}
							width={NODE_WIDTH}
							height={NODE_HEIGHT}
							renderNode={node => (
							<FamilyNode
								key={node.id}
								node={node}
								isRoot={node.id === rootId}
								isHover={node.id === hoverId}
								onClick={setSelectId}
								onSubClick={setRootId}
								style={getNodeStyle(node)}
							/>
							)}
						/>
					</TransformComponent>
				</TransformWrapper>
			)}
		</Container>
	);
}
