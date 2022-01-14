import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { NavbarTop } from "./Navbar";
import { SideBar } from "./SideBar";
import { BallTriangle } from "react-loader-spinner";
import { SongContext } from "../context/SongContext";

const Style = styled.div`
  display: grid;
  gap: 35px;
  grid-template-columns: 300px 1fr 5px;
  .browseMusic {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .Shadow {
    width: 100%;
    border: 1px solid #eeeded;
    margin-bottom: 20px;
  }
  .cardDiv {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
  .loading {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Albums = () => {
  const { handleSongs , handleToogle } = useContext(SongContext);
  const [data, setData] = useState([]);
  const handleFetch = async () => {
    const { data } = await axios.get(
      "https://breakable-gold-outfit.cyclic.app/albums"
    );
    setData(data.album);
  };

  useEffect(() => {
    handleFetch();
  }, []);
  const handleAlbum = (e) => {
    handleSongs(e._id)
    handleToogle()
  };
  return (
    <Style>
      <SideBar />
      <div>
        <NavbarTop />
        <div className="Shadow"></div>
        <div className="browseMusic">
          <p>Browse albums here</p>
        </div>
        <div className="cardDiv">
          {data.length > 0 ? (
            data.map((e) => (
              <div onClick={() => handleAlbum(e)} key={e._id}>
                <Card image={e.image} name={e.name} artist={e.artist.name} />
              </div>
            ))
          ) : (
            <div className="loading">
              <BallTriangle
                heigth="100"
                width="100"
                color="grey"
                arialLabel="loading-indicator"
              />
            </div>
          )}
        </div>
      </div>
    </Style>
  );
};
