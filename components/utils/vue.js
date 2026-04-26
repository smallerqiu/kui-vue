// export type WithInstall<T> = T & Plugin;
const globalComponents = ["message", "modal", "notice", "loading", "theme"];
export { globalComponents };
export const installGlobal = (app, component) => {
    if (globalComponents.includes(component.name)) {
        app.config.globalProperties[`$${component.name}`] = component;
    }
};
export const WithInstall = (component) => {
    const c = component;
    c.install = function (app) {
        app.component(c.name, c);
        installGlobal(app, c);
    };
    return component; //as WithInstall<T> ;
};
