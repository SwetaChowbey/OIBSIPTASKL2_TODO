import React, { useEffect, useState, useRef } from "react";

function Entry({ addEntry }) {
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState("");
  const fieldRef = useRef();
  const handleOnChange = (e) => setMessage(e.target.value);
  const handleFlagChange = (e) => setFlag(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (message && message.trim().length > 0) {
      addEntry({
        message,
        flag,
        date: Date.now(),
      });
      setMessage("");
      setFlag("");
    }
  };

  useEffect(() => {
    fieldRef.current.focus();
  }, []);
  const style1 = {
    borderRadius: "10px",
    padding: "0px 20px",
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="message">
          <h2>Note down here:</h2>
        </label>
        <textarea
          className="form-control mb-5"
          value={message}
          onChange={handleOnChange}
          type="text"
          id="message"
          rows="5"
          maxLength={100}
          ref={fieldRef}
        />
      </div>
      <div class="form-check form-check-inline mb-3 d-flex ">
        <div className="critical mx-2">
          <label
            style={style1}
            className="form-check-label bg-danger text-white"
            htmlFor="flagDanger"
          >
            Do it ASAP
          </label>
          <input
            className="form-check-input"
            id="flagDanger"
            type="radio"
            name="flag"
            value="danger"
            defaultChecked={flag === "danger"}
            onChange={handleFlagChange}
          />
        </div>
        <div className="critical mx-5">
          <label
            style={style1}
            className="form-check-label bg-success text-white "
            htmlFor="flagGreen"
          >
            Completed
          </label>
          <input
            className="form-check-input "
            id="flagGreen"
            type="radio"
            name="flag"
            value="success"
            defaultChecked={flag === "success"}
            onChange={handleFlagChange}
          />
        </div>
        <div className="critical mx-2">
          <label
            style={style1}
            className="form-check-label bg-dark text-white "
            htmlFor="flagInfo"
          >
            Future Use
          </label>
          <input
            className="form-check-input"
            id="flagInfo"
            type="radio"
            name="flag"
            value="dark"
            defaultChecked={flag === "dark"}
            onChange={handleFlagChange}
          />
        </div>
      </div>
      <button
        disabled={message.trim().length === 0 || !flag}
        className="btn btn-light form-control my-3"
        type="submit"
      >
        Post
      </button>
    </form>
  );
}
export default Entry;
