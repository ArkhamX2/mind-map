import * as d3 from "d3"; // we will need d3.js

export const data = {
    nodes: [
        { id: "Myriel", group: 'team1' },
        { id: "Anne", group: 'team1' }
    ],
    links: [
        { source: "Anne", target: "Myriel", value: 1 },
        { source: "Napoleon", target: "Myriel", value: 1 }
    ]
}