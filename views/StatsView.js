import LogoBanner from "../components/LogoBanner.js";
import StatisticGraph from "../components/StatisticGraph.js";
import StatisticList from "../components/StatisticList.js";
import StatisticMenu from "../components/StatisticMenu.js";

const htmlTemplate = /*html*/`
<div>
  <LogoBanner/>
  <h2>Reading tracker</h2>
  <StatisticMenu/>
  <StatisticGraph/>
  <StatisticList/>
</div>
`

export default {
  template: htmlTemplate,
  components: { LogoBanner, StatisticMenu, StatisticGraph, StatisticList }
};