import styled from "styled-components";
import { Card } from "../components/Card";
import Modal from "react-modal/lib/components/Modal";
import { SongContext } from "../context/SongContext";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";
import { FiPlay } from "react-icons/fi";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";
const Style = styled.div`
  width: 100vh;
  height: 70vh;
  border-radius: 4px;
  margin: auto;
  display: grid;
  padding: 10px;
  /* gap: 20px; */
  grid-template-columns: 250px 1fr;
  .imgDiv {
    padding: 10px;
    p {
      font-size: 18px;
      font-weight: 600;
      color: #b4b2b0;
    }
    h1 {
      font-weight: 600;
      font-size: 25px;
      padding-bottom: 5px;
      color: #5e5b5b;
    }
  }
  .buttonBox {
    display: flex;
    justify-content: space-between;
    width: 92%;
    position: relative;
    top: -20px;
    z-index: 1;
    .button {
      padding: 10px;
      display: flex;
      height: 40px;
      justify-content: center;
      gap: 10px;
      align-items: center;
      border: none;
      color: white;
      font-size: 19px;
      width: 100px;
      font-weight: 500;
      background-color: #ff645a;
      border-radius: 4px;
      :hover {
        background: #dc4f4a;
        cursor: pointer;
      }
    }
  }
  .songlist {
    padding-right: 15px;
    .list {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    h1 {
      font-size: 50px;
      font-weight: 600;
      color: #575756;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    box-shadow: 0px 1px 2px #e1e0df;
    border-radius: 4px;
    padding: 10px;
    p {
      font-size: 12px;
      color: #b4b2b0;
    }
    div {
      display: flex;
      gap: 10px;
      justify-content: left;
      align-items: center;
      h3 {
        font-weight: 600;
        color: #656363;
        font-size: 16px;
      }
      p {
        color: #ff645a;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .crossBtn {
    font-size: 25px;
    float: right;
    margin-top: 8px;
    cursor: pointer;
  }
  .clear {
    clear: both;
  }
  .loadingDiv {
    width: 95vh;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Songs = () => {
  const { toogle, handleToogle } = useContext(SongContext);
  const { loading, data } = useSelector((store) => store.songs);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0px",
      marginRight: "-50%",
      boxShadow: "0px 0px 8px #fffef",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(5, 5, 5, 0.3)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <Modal style={customStyles} isOpen={toogle}>
      <Style>
        {loading ? (
          <div className="loadingDiv">
            <BallTriangle
              heigth="100"
              width="100"
              color="grey"
              arialLabel="loading-indicator"
            />
          </div>
        ) : (
          <>
            <div className="imgDiv">
              <Card image={data?.image || ""} />
              <div className="buttonBox">
                <div className="button">
                  {" "}
                  <FiPlay /> Play
                </div>
                <div className="button">
                  {" "}
                  <BsArrowRepeat /> Suffle
                </div>
              </div>
              <h1>{data?.artist?.name || "Demo"}</h1>
              <p>{data?.genre || "Demo"}</p>
            </div>
            <div className="songlist">
              <IoCloseSharp
                onClick={() => handleToogle()}
                className="crossBtn"
              />
              <div className="clear"></div>
              <h1>Album</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                blanditiis! Ex ipsum sed cupiditate, molestiae eligendi quos
                ullam impedit odit, quaerat in qui. Placeat sapiente amet
                doloremque asperiores, autem adipisci.
              </p>
              <div className="list">
                {data?.songs?.length > 0 ? (
                  data.songs.map((e, i) => (
                    <div key={e._id} className="row">
                      <div>
                        <p>{i + 1}</p>
                        <h3>{e.name}</h3>
                      </div>
                      <p>{e.duration}</p>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="row">
                      <div>
                        <p>1</p>
                        <h3>Demo</h3>
                      </div>
                      <p>3.21</p>
                    </div>
                    <div className="row">
                      <div>
                        <p>2</p>
                        <h3>DemoSong</h3>
                      </div>
                      <p>3.09</p>
                    </div>
                    <div className="row">
                      <div>
                        <p>3</p>
                        <h3>DemoSong</h3>
                      </div>
                      <p>2.41</p>
                    </div>
                    <div className="row">
                      <div>
                        <p>4</p>
                        <h3>DemoSong</h3>
                      </div>
                      <p>3.07</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Style>
    </Modal>
  );
};
