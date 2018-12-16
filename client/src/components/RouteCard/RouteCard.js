import React from "react";
import ReactModal from "react-modal";
import "./styles.scss";

// const RouteCard = route => {
//   console.log('route', route.route)
//   return (
//     <div className="row">
//       <div className="col s12 m7">
//         <div className="card">
//           <div className="card-image">
//             <img src="https://i.stack.imgur.com/rdi7Y.png" />
//             <span className="card-title">{ route.route.name }</span>
//           </div>
//           <div className="card-content">
//             <p><span className="card-subtittle">Arrival:</span> {route.route.arrival}</p>
//             <p><span className="card-subtittle">Departure:</span> {route.route.departure}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

class RouteCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  componentDidMount() {
    ReactModal.setAppElement("body");
  }

  render() {
    console.log("RouteCard");
    console.log(this.props);
    return (
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: "url(" + this.props.route.pickupImgUrl + ")"
            }}
          />
          <ul className="details" />
        </div>
        <div className="description">
          <h1>{this.props.route.title}</h1>
          <div className="row">
            <h2 style={{ float: "left" }}>Arrival:</h2>
            <p>{this.props.route.arrival}</p>
          </div>
          <div className="row">
            <h2 style={{ float: "left" }}>Arrival Time:</h2>
            <p>{this.props.route.arrival_time}</p>
          </div>
          <div className="row">
            <h2 style={{ float: "left" }}>Departure:</h2>
            <p>{this.props.route.departure}</p>
          </div>
          <div className="row">
            <h2 style={{ float: "left" }}>Departure Time:</h2>
            <p>{this.props.route.departure_time}</p>
          </div>
          <p className="read-more">
            <button
              onClick={() => {
                this.setState({ isModalOpen: true });
              }}
              className="btn modal-trigger"
            >
              Route Image
            </button>
            <ReactModal
              isOpen={this.state.isModalOpen}
              shouldCloseOnOverlayClick={true}
            >
              <div className="modalContainer">
                <img
                  className="imgModal"
                  style={{ width: "100%" }}
                  src={this.props.route.routeImgUrl}
                />
                <button
                  onClick={() => {
                    this.setState({ isModalOpen: false });
                  }}
                  className="btn modal-trigger"
                >
                  Close
                </button>
              </div>
            </ReactModal>
          </p>
        </div>
      </div>
    );
  }
}

class RoutesContainer extends React.Component {
  render() {
    console.log("this.props.routes", this.props.routes);
    return this.props.routes.map(route => {
      return <RouteCard route={route} />;
    });
  }
}
export default RoutesContainer;
