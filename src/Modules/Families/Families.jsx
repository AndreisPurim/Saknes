import React from 'react';
import { create } from 'pinch-zoom-pan';
import css from './tree.module.css';
import ReactFamilyTree from 'react-family-tree';

import classNames from 'classnames';

export const PinchZoomPan = React.memo(
  function PinchZoomPan({ min, max, captureWheel, className, style, children }) {
    const root = React.useRef(null);
    React.useEffect(() => {
      const element = root.current;
      if (!element) return;
      return create({ element, minZoom: min, maxZoom: max, captureWheel });
    }, [min, max, captureWheel]);
    return (
      <div ref={root} className={classNames(className, css.root)} style={style}>
        <div className={css.point}>
          <div className={css.canvas}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);
  
function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style }){
    const clickHandler = React.useCallback(() => onClick(node.id), [node.id, onClick]);
    const clickSubHandler = React.useCallback(() => onSubClick(node.id), [node.id, onSubClick]);
    return (
      <div className={css.root} style={style}>
        <div
          className={classNames(
            css.inner,
            css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
          onClick={clickHandler}
        >
          <div className={css.id}>{node.id}</div>
          {node.hasSubTree && (
            <div
              className={classNames(css.sub, css[node.gender])}
              onClick={clickSubHandler}
            />
          )}
        </div>
      </div>
    );
}

export const NODE_WIDTH = 70;
export const NODE_HEIGHT = 80;

function getNodeStyle({ left, top }) {
  return {
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
    transform: `translate(${left * (NODE_WIDTH / 2)}px, ${top * (NODE_HEIGHT / 2)}px)`,
  };
}

export default function Tree({ family_id }) {
  const nodes = require('../../Data/Families/'+family_id+".json")
  const firstNodeId = React.useMemo(() => nodes[0].id, [nodes]);
  const [rootId, setRootId] = React.useState(firstNodeId);

  const [selectId, setSelectId] = React.useState("");
  const [hoverId, setHoverId] = React.useState("");
  return (
    <div>
      {nodes.length > 0 && (
        // <PinchZoomPan min={0.5} max={2.5} captureWheel className={css.wrapper}>
          <ReactFamilyTree
            nodes={nodes}
            rootId={rootId}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            className={css.tree}
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
        // </PinchZoomPan>
      )}
    </div>
  );
}
