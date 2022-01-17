/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { useState } from 'react';
import { randomHexColor } from './helpers';

function App() {
  const [color, setColor] = useState('#ccc333');
  const exactText = `Generated Color: ${color}`;

  const styles = css`
    color: black;
    border: solid 1px gray;
    border-radius: 4px;
    height: 2em;
    margin-top: 2em;
  `;

  const boxStyles = css`
    display: block;
    border: solid 1px gray;
    border-radius: 8px;
    line-height: 50vh;
    background-color: ${color};
    width: 50vw;
    height: 50vh;
  `;
  return (
    <div className="App">
      <header className="App-header">
        <div css={boxStyles}>{exactText}</div>
        <button
          css={styles}
          onClick={(event) => {
            console.log(event);
            setColor(randomHexColor());
          }}
        >
          Generate
        </button>
      </header>
    </div>
  );
}

export default App;
