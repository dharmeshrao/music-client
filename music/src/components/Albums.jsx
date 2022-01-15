import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { NavbarTop } from "./Navbar";
import { SideBar } from "./SideBar";
import { BallTriangle } from "react-loader-spinner";
import { SongContext } from "../context/SongContext";
import { useSelector } from "react-redux";
import { FcPrevious, FcNext } from "react-icons/fc";

const Style = styled.div`
  display: grid;
  gap: 35px;
  grid-template-columns: 300px 1fr 5px;
  .browseMusic {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select {
      width: 250px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      select {
        width: 70px;
        font-size: 18px;
        border: none;
        :focus {
          outline: none;
        }
        :after {
          outline: none;
        }
      }
    }
    div {
      margin-right: 50px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      h3 {
        font-size: 22px;
        font-weight: 500;
      }
    }
    .abcd {
      color: #6d6d6d !important;
    }
  }
  .Shadow {
    width: 100%;
    border: 1px solid #eeeded;
    margin-bottom: 20px;
  }
  .cardDiv {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
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
  const { handleSongs, handleToogle } = useContext(SongContext);
  const [page, setPage] = useState(1);
  const [listData, setData] = useState([]);
  const [pagelimit, setPagelimit] = useState([]);
  const handleFetch = async () => {
    setData([]);
    try {
      const { data } = await axios.get(
        `https://breakable-gold-outfit.cyclic.app/albums/?page=${page}`
      );
      setPagelimit(data);
      setData(data.album);
    } catch (err) {
      alert("no data");
    }
  };

  useEffect(() => {
    handleFetch();
  }, [page]);
  const handleAlbum = (e) => {
    handleSongs(e._id);
    handleToogle();
  };
  const { data } = useSelector((store) => store.auth);
  if (data?.token) {
    let newData = data.user.albums;
    return (
      <Style>
        <SideBar />
        <div>
          <NavbarTop />
          <div className="Shadow"></div>
          <div className="browseMusic">
            <p>Browse your albums here {data.user.name}</p>
          </div>
          <div className="cardDiv">
            {newData.length > 0 ? (
              newData.map((e) => (
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
  }
  return (
    <Style>
      <SideBar />
      <div>
        <NavbarTop />
        <div className="Shadow"></div>
        <div className="browseMusic">
          <p>Browse albums here</p>
          <div className="select">
            <select name="sort" id="">
              <option value="">Sort</option>
              <option value="">2021</option>
            </select>
            <div>
              <FcPrevious
                className={page === 1 ? "abcd" : ""}
                onClick={() => {
                  if (page === 1) return;
                  setPage(page - 1);
                }}
              />
              <h3>
                {page} / {pagelimit.showAll}
              </h3>
              <FcNext
                className="abcd"
                onClick={() => {
                  if (page === pagelimit.showAll) return;
                  setPage(page + 1);
                }}
                className="abcd"
              />
            </div>
          </div>
        </div>
        <div className="cardDiv">
          {listData.length > 0 ? (
            listData.map((e) => (
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
