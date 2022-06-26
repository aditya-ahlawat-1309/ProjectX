
import finder from "../../Media/finder.png";
import images from "../../Media/images.png";
import projects from "../../Media/Projects.png";
import notes from "../../Media/notes.png";
import Dictionary from "../../Media/Dictionary.png"
import Achievements from "../../Media/Achievements.png"
import Music from "../../Media/Music.png"
import Chat from "../../Media/Chat.png"
import Netflix from "../../Media/Netflix.png"
import Passlock from "../../Media/Passlock.png"
import Search from  "../../Media/Search.png"
import Game from "../../Media/Game.png"
import Git from "../../Media/github.png"
import Weather from "../../Media/weather.png"
import "./Icons.css"

const Icons = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          marginLeft: "7.5%",
          zIndex: 1,
          display: "flex",
          color: "white",
          zIndex:"7",
        }}
      >
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          // href="/finder"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={finder}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />

            <p> All Files</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={images}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp; Gallery</p>
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={projects}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp; Projects</p>
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Dictionary}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> Dictionary</p>
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Achievements}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p>Achievement</p>
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Passlock}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp;Passlock</p>
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://dynamicweatherapp.netlify.app"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Weather}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p>&nbsp;Weather</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://todo-aditya.netlify.app"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={notes}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> ToDoApp</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://drummusic.netlify.app"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Music}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp;&nbsp;Music</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://chatfullstack.netlify.app"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Chat}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> Chat App</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://github.com/aditya-ahlawat-1309"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Git}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp;GithHub</p>
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          style={{
            backgroundColor: "Transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "green",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "1.5%",
          }}
          href="https://dicegamedice.netlify.app"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={Game}
              width="75px"
              height="75px"
              style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
              class="Icons-animation"
            />
            <p> &nbsp;&nbsp;Games</p>
          </div>
        </a>
      </div>
    );
  }


export default Icons