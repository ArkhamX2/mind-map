import { FC, useEffect, useMemo } from "react";
import { Data, Options, Edge, Node } from 'vis-network/standalone/esm/vis-network';
import useVisNetwork from "../utility/useVisNetwork";

const defaultOptions: Options = {
  autoResize: true,
  groups: {
    tag: { color: { background: 'PeachPuff' }, borderWidth: 3 },
    course: { color: { background: '#00B3E6' }, borderWidth: 1 },
  }
};

type mindProps = {
  data: Data,
  callback: (nodeId?: number) => number | undefined
}

const MindNetwork: FC<{ props: mindProps }> = ({ props }: { props: mindProps }) => {
  const { ref, network } = useVisNetwork({
    options: defaultOptions,
    edges: [],
    nodes: []
  });
  network?.setData(props.data)
  const mindNetwork = useMemo(() => {
    network?.on("selectNode", (item) => props.callback(item.nodes[0]))
    network?.on("deselectNode", () => props.callback(undefined))
    return { network }
  }, [network])

  network?.on("selectNode", (item) => props.callback(item.nodes[0]))
  network?.on("deselectNode", () => props.callback(undefined))

  const homeClick = () => {
    if (!mindNetwork.network) return;
    mindNetwork.network.focus((props.data.nodes as Node[])[0].id!);
  };

  return (
    <>
      <button onClick={homeClick}>Home</button>
      <div style={{ height: "auto", width: "auto" }} ref={ref} />
    </>
  );
};

export default MindNetwork