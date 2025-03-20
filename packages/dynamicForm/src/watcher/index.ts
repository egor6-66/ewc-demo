const initWatcher = (fields: any, watch: any, setValue: any) => {
    // const withActions: Record<string, ICard.IActions> = {};
    //
    // for (const field of fields) {
    //     if (field?.actions) {
    //         withActions[field.name] = field.actions;
    //     }
    // }
    //
    // return watch((state) => {
    //     for (const [key, actions] of Object.entries(withActions)) {
    //         for (const [action, data] of Object.entries(actions)) {
    //             const callback = eval(data.callback);
    //
    //             if (typeof callback === 'function') {
    //                 let el = document.getElementById(key);
    //
    //                 if (action === 'setDisabled') {
    //                     el.dataset.disabled = callback(state);
    //                 }
    //
    //                 el = null;
    //             }
    //         }
    //     }
    //
    //     return { ...state, checkbox2: true };
    // });
};
