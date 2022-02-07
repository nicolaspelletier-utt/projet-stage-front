import React from 'react';

class StatsComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/stats/comments")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    value: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }
    render() {
        const { error,isLoaded,value } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Chargement…</div>;
          } else {
            return (
              <h2>{value.comments}</h2>
            );
          }
    }
}
export default StatsComments;