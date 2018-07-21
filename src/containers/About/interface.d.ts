interface AboutProps {
    getAppInfo() : void,
    loading: boolean,
    error: boolean,
    about: {
        version: string
        author: any
    }
}
