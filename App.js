import "./App.css";
import BigCalender from "./BigCalender";
import SmallCalender from "./SmallCalender";
import saveImg from "./save.svg";
import approvalImg from "./approvals.svg";
import previewImg from "./preview.svg";
import pasteImg from "./paste.svg";
import pullImg from "./pull.svg";
import publishImg from "./publish.svg";
import deleteImg from "./delete.svg";
import copyImg from "./copy.svg";
import vectorImg from './Vector.svg';

function App() {
  return (
    <div className="container">
      <div className="left-side">
        <div className="blue">
          <div className="left-heading">
            <h3>FUTURE IK</h3>
          </div>
          <div className="content">
            <div className="image-name">
              <img src={saveImg}></img>
              <h5>Save</h5>
            </div>
            <div className="image-name">
              <img src={approvalImg}></img>
              <h5>Approve</h5>
            </div>
            <div className="image-name">
              <img src={publishImg}></img>
              <h5>Publish</h5>
            </div>
            <div className="image-name">
              <img src={pullImg}></img>
              <h5>Pull</h5>
            </div>
            <div className="image-name">
              <img src={previewImg}></img>
              <h5>Preview</h5>
            </div>
            <div className="image-name">
              <img src={copyImg}></img>
              <h5>Copy</h5>
            </div>
            <div className="image-name">
              <img src={pasteImg}></img>
              <h5>Paste</h5>
            </div>
            <div className="image-name">
              <img src={deleteImg}></img>
              <h5>Delete</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-heading">
          <img src={vectorImg}></img>
        </div>
        <div className="calender-section">
          <div className="calender-content">
            <div className="full-calender-section">
              <div className="full-calender-content">
                <div className="button-section">
                  <div className="button-section1">
                    <button>WHAT</button>
                    <button>WHEN</button>
                    <button>WHERE</button>
                    <button>SETTINGS</button>
                    <button>HISTORY</button>
                  </div>
                  <div className="button-section2">
                    <button>BASICS</button>
                    <button>ADVANCED</button>
                  </div>
                </div>
                <div className="full-calender">
                  <BigCalender />
                </div>
              </div>
            </div>
            <div className="smaller-calender-section">
              <div className="right-button-section">
                <div className="right-button-section1">
                  <button>ADDITION</button>
                  <button>EXCLUSION</button>
                  <button>REMOVE ALL</button>
                </div>
                <div className="right-button-section2">
                  <div className="date">
                    <div className="row1">
                      <label>Start Date</label>
                      <input type="date"></input>
                    </div>
                    <div className="row2">
                      <label>End Date</label>
                      <input type="date"></input>
                    </div>
                  </div>
                  <div className="time">
                    <div className="row3">
                      <label>Start Time</label>
                      <input type="time"></input>
                    </div>
                    <div className="row4">
                      <label>Start Time</label>
                      <input type="time"></input>
                    </div>
                  </div>
                </div>
              
              <div className="small-calender">
                <div className="calender">
                  <SmallCalender />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
