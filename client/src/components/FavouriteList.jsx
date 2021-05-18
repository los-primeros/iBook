import React from "react"


class FavouriteList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        // console.log("hi",this.props)
        const { item } = this.props.location.state
        console.log('item**', item)
        //     const [arrayOfFavorie, setArrayOfFavorite] =useState([])
        //     var containe = -1
        //       for(var i =0; i< arrayOfFavorie.length; i++) {
        //          if (arrayOfFavorie[i]["name"] === item.name) {
        //              containe = i
        //             }
        //         }
        //           if (containe === -1) {
        //               setArrayOfFavorite(item)
        //           }
        // console.log("aaaaaraayy",arrayOfFavorie)
        return (

            <div className="contanerFavorie" style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }}>

                <div className="card" style={{ width: '70%' }}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text" style={{ fontSize: '25px' }}>{item.address}</p>

                        <p className="card-text">{item.Description}</p>
                        <p className="card-text" style={{ fontWeight: "bold" }}>{item.price}</p>
                        {/* <button type="button" class="btn btn-danger">Delete</button> */}
                    </div>
                </div>
            </div>

        );
    }
}

export default FavouriteList;
