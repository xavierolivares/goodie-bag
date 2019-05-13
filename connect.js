const connect = (mapState,mapDispatch) => (componentToWrap) => {
    return React.Component {
        constructor() {
            this.state = store.getState()
        }
        componentDidMount() {
            let unsubscribe = store.subscribe()
        }
        componentWillUnMount() {
            unsubscribe();
        }

        render() {
            return <componentToWrap props= {...mapState, ...mapDispatch} />
        }
    }
}

// these functions return objects