import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import EnterpriseAdminConsole from "./enterpriseAdminConsole.md";
import PortalExhibition from "./portalExhibition.md";
import DocumentationLayout from "./documentationLayout.md";
import WorkbenchLayout from "./workbenchLayout.md";
import MessagingCollaboration from "./messagingCollaboration.md";
import LowCodeLayout from "./lowCodeLayout.md";
import { computed, inject } from "vue";
export default {
  setup() {
    const locale = inject("locale");
    const Info = computed(() => {
      return locale.value.name === "zh-cn" ? InfoCn : InfoEn;
    });
    return { Info };
  },
  render() {
    return (
      <div class="demo-layout">
        <this.Info />
        <EnterpriseAdminConsole />
        <PortalExhibition />
        <DocumentationLayout />
        <WorkbenchLayout />
        <MessagingCollaboration />
        <LowCodeLayout />
      </div>
    );
  },
};
