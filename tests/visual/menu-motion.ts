import { createApp, h, ref } from "vue";
import { Menu } from "../../components/menu";
import { Mail } from "kui-icons";
import "../../components/styles/index.less";
createApp({
  setup() {
    const collapsed = ref(false);
    return () =>
      h("div", { style: "width:256px" }, [
        h(
          "button",
          { id: "toggle", onClick: () => (collapsed.value = !collapsed.value) },
          "Toggle",
        ),
        h(Menu, {
          mode: "inline",
          inlineCollapsed: collapsed.value,
          openKeys: ["root", "nested", "deep"],
          items: [
            { key: "leaf", title: "Standalone item", icon: Mail },
            {
              key: "root",
              title: "Root",
              icon: Mail,
              children: [
                {
                  key: "nested",
                  title: "Nested",
                  icon: Mail,
                  children: [
                    {
                      key: "deep",
                      title: "Deep",
                      icon: Mail,
                      children: [
                        { key: "one", title: "First", icon: Mail },
                        { key: "two", title: "Second", icon: Mail },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }),
      ]);
  },
}).mount("#app");
