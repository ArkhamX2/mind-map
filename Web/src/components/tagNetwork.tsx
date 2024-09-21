import { FC, useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "../utility/useVisNetwork";

const nodes: Node[] = [
  {
    id: 1,
    label: "test",
    title: "HIIIIIIIII",
    level: 1,
    group: "struct"
  },
  {
    id: 2,
    label: "test",
    title: "BYYYYYYYYYYYEEEEEE",
    level: 2,
    group: "struct"
  }
];

const edges: Edge[] = [
  { from: 1, to: 2, id: 1 },
];

const options: Options = {
    autoResize: true,
};

const TagNetwork: FC = () => {
  const { ref, network } = useVisNetwork({
    options,
    edges,
    nodes
  });

  const handleClick = () => {
    if (!network) return;

    network.focus(1);
  };

  return (
    <>
      <button onClick={handleClick}>Focus</button>
      <div style={{ height: 700, width: "100%" }} ref={ref} />
    </>
  );
};

export default TagNetwork