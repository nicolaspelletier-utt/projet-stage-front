import React from 'react';

class StatsUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/stats/users",{
            credentials:'include'
        })
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
        const values = this.state.value.map(function(table){
            return <tr>
                <td scope="row">{table.id}</td>
                <td scope="row">{table.name}</td>
                <td scope="row">{table.count}</td>
            </tr>
        })
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Chargement…</div>;
          } else {
            return (
              <div>
                  <table className='table'>
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Count</th>
                          </tr>
                      </thead>
                      <tbody>
                        {values}
                      </tbody>

                  </table>
              </div>
            );
          }
    }
}
export default StatsUsers;