import React, { useState } from "react";
import "./Home2.css";

const Home2 = () => {
  const [gamer, setGamer] = useState(true);
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const [obj, setObj] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const [xWin, setXwin] = useState("");
  const [oWin, setOwin] = useState("");
  const [draw, setDraw] = useState("");
  const [modal, setModal] = useState(true);

  function changeGamer() {
    gamer ? setGamer(false) : setGamer(true);
  }

  function getName(e) {
    if (gamer === true) {
      let newobj = {
        ...obj,
        [e.target.id]: "X",
      };
      if (!obj[e.target.id]) {
        setObj(newobj);
        arr.splice(parseInt(e.target.id), 1, "X");
        changeGamer();
      }
    } else {
      let newobj = {
        ...obj,
        [e.target.id]: "O",
      };
      if (!obj[e.target.id]) {
        setObj(newobj);
        arr.splice(parseInt(e.target.id), 1, "O");
        changeGamer();
      }
    }
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        if (arr[a] === "X") {
          setXwin("Player X won!");
          setModal(false);
        } else if (arr[a] === "O") {
          setOwin("Player O won!");
          setModal(false);
        }
      }
    }
    if (
      arr[0] &&
      arr[1] &&
      arr[2] &&
      arr[3] &&
      arr[4] &&
      arr[5] &&
      arr[6] &&
      arr[7] &&
      arr[8]
    ) {
      setDraw("Draw");
      setModal(false);
    }
  }
  function reset() {
    setArr(["", "", "", "", "", "", "", "", ""]);
    setObj({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    });
    setModal(true);
    setXwin("");
    setOwin("");
    setDraw("");
  }
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginLeft: "100px",
        }}
      >
        <div className="line line1">
          <div
            id="0"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[0]}
          </div>
          <div
            id="1"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[1]}
          </div>
          <div
            id="2"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[2]}
          </div>
        </div>
        <div className="line line2">
          <div
            id="3"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[3]}
          </div>
          <div
            id="4"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[4]}
          </div>
          <div
            id="5"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[5]}
          </div>
        </div>
        <div className="line line3">
          <div
            id="6"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[6]}
          </div>
          <div
            id="7"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[7]}
          </div>
          <div
            id="8"
            className="box"
            onClick={(e) => {
              getName(e);
            }}
          >
            {obj[8]}
          </div>
        </div>
        <p>
          {xWin}
          {oWin}
          {draw}
        </p>
        {modal ? <p> {gamer ? `Player X:` : `Player O: `}</p> : null}

        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home2;
