import LogoBanner from "../components/LogoBanner.js"
import SettingsSection from "../components/SettingsSection.js";

const htmlTemplate = /*html*/`
<div>
  <LogoBanner/>
  <SettingsSection/>
</div>
`

export default {
  template: htmlTemplate,
  components: { LogoBanner, SettingsSection }
};