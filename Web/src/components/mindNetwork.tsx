import { FC, useEffect } from "react";
import { Data, Options, Edge, Node } from 'vis-network/standalone/esm/vis-network';
import useVisNetwork from "../utility/useVisNetwork";

const defaultOptions: Options = {
  autoResize: true,
  groups: {
    tag: { color: { background: 'PeachPuff' }, borderWidth: 3 },
    course: { color: { background: '#00B3E6' }, borderWidth: 1 },
  }
};

const MindNetwork: FC<{ props: Data }> = ({ props }: { props: Data }) => {
  const { ref, network } = useVisNetwork({
    options: defaultOptions,
    edges: props.edges as Edge[],
    nodes: props.nodes as Node[]
  });
  network?.on("selectNode", () => console.log("goToUrl"))

  const handleClick = () => {
    if (!network) return;
    network.focus((props.nodes as Node[])[0].id!);
  };

  return (
    <>
      <button onClick={handleClick}>Home</button>
      <div style={{ height: "auto", width: "auto" }} ref={ref} />
    </>
  );
};

export default MindNetwork