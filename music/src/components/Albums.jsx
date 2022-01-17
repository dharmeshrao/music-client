import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { NavbarTop } from "./Navbar";
import { SideBar } from "./SideBar";
import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { SongContext } from "../context/SongContext";
import { useSelector } from "react-redux";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { PageContext } from "../context/PageContext";
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
      width: 350px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      select {
        width: 150px;
        font-size: 18px;
        border: none;
        :focus {
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
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Albums = () => {
  const { handleSongs, handleToogle } = useContext(SongContext);
  const query = useQuery();
  let x = query.get("page");
  let y = query.get("genre");
  const { page, setPage } = useContext(PageContext);
  const [listData, setData] = useState([]);
  const [pagelimit, setPagelimit] = useState([]);
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const handleFetch = async () => {
    setData([]);
    try {
      const { data } = await axios.get(
        `https://music-app-demo-kuch.herokuapp.com/albums/data/?page=${
          x || 1
        }&genre=${y || ""}`
      );
      setPagelimit(data);
      setData(data.album);
    } catch (err) {
      alert("no data");
    }
  };
  const handleSelect = (e) => {
    let x = e.target.value;
    if (x === "") return history.push("/");
    history.push(`/?genre=${e.target.value}`);
  };
  useEffect(() => {
    handleFetch();
    if (x) setPage(+x);
  }, [x, y]);
  const handleAlbum = (e) => {
    handleSongs(e._id);
    handleToogle();
  };
  const handlePageInc = (e) => {
    history.push(`/?page=${e}`);
  };
  const handlePageDec = (e) => {
    history.push(`/?page=${e}`);
  };
  const { data } = useSelector((store) => store.auth);

 if(x > pagelimit.showAll || pagelimit.showAll === 0){
   return <div>404 No Page Found</div>
 }



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
            <select onChange={(e) => handleSelect(e)} name="sort" id="">
              <option value="">{y ? "Show All" : "Sort By Genre"}</option>
              <option defaultValue={y === "Pop"} value="Pop">
                Pop
              </option>
              <option defaultValue={y === "Jazz"} value="Jazz">
                Jazz
              </option>
              <option defaultValue={y === "Dance"} value="Dance">
                Dance
              </option>
              <option defaultValue={y === "Hiphop"} value="Hiphop">
                Hiphop
              </option>
              <option defaultValue={y === "Folk"} value="Folk">
                Folk
              </option>
            </select>
            <div>
              <FcPrevious
                className={page === 1 ? "abcd" : ""}
                onClick={() => {
                  if (page <= 1) return;
                  setPage(page - 1);
                  handlePageDec(page - 1);
                }}
              />
              <h3>
                {x || 1} / {pagelimit.showAll}
              </h3>
              <FcNext
                className="abcd"
                onClick={() => {
                  if (page >= pagelimit.showAll) return;
                  setPage(page + 1);
                  handlePageInc(page + 1);
                }}
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
