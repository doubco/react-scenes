export default (
  Target,
  { setViewportState, getViewportState, targetProps }
) => {
  return class Synchronizer extends Target {
    constructor(props) {
      super(props);

      this.state = { ...this.state, ...getViewportState() };
      // setViewportState(this.state);
    }

    componentDidMount() {
      if (this.componentWillReceiveProps) {
        this.componentWillReceiveProps(targetProps, this.state);
      }
      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (super.componentWillUpdate) {
        super.componentWillUpdate(nextProps, nextState);
      }
      setViewportState(nextState);
    }
  };
};
