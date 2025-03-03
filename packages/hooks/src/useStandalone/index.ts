function useStandalone<M extends string>(currentModule: M) {
    const checkStandalone = () => {
        return window.location.pathname.split('/')[1] === currentModule.toLowerCase();
    };

    return { checkStandalone };
}

export default useStandalone;
