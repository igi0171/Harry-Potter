import React, { useState, useEffect } from "react";
import Character from "./Character";

import styles from "./Characters.module.css";

const Characters = (props) => {
  const [findCharacter, setFindCharacter] = useState("");
  const [charactersAlphabetical, setCharactersAlphabetical] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === "Vernon Dursley") {
          data[i].image = "https://i.imgur.com/O7OWjpV.png";
        }
        if (data[i].name === "Petunia Dursley") {
          data[i].image = "https://i.imgur.com/BeMTbcU.png";
        }
        if (data[i].name === "Dudley Dursley") {
          data[i].image = "https://i.imgur.com/wNNZOu4.png";
        }
        if (data[i].name === "Lily Potter") {
          data[i].image = "https://i.imgur.com/yMyS1jv.png";
        }
        if (data[i].name === "James Potter") {
          data[i].image = "https://i.imgur.com/T8CJr9Q.png";
        }
        if (data[i].name === "Albus Dumbledore") {
          data[i].image = "https://i.imgur.com/gU7j1rB.png";
        }
        if (data[i].name === "Madam Pomfrey") {
          data[i].image = "https://i.imgur.com/ZgtrVKl.png";
        }
        if (data[i].name === "Mrs Figg") {
          data[i].image = "https://i.imgur.com/jgGRpmk.png";
        }
        if (data[i].name === "Marge Dursley") {
          data[i].image = "https://i.imgur.com/IqMC8YJ.png";
        }
        if (data[i].name === "Yvonne") {
          data[i].image = "https://i.imgur.com/tfOFrPD.png";
        }
        if (data[i].name === "Piers Polkiss") {
          data[i].image = "https://i.imgur.com/mfExEh7.png";
        }
        if (data[i].name === "Dennis") {
          data[i].image = "https://i.imgur.com/AXH4AOj.png";
        }
        if (data[i].name === "Malcolm") {
          data[i].image = "https://i.imgur.com/uzNs4nk.png";
        }
        if (data[i].name === "Gordon") {
          data[i].image = "https://i.imgur.com/bdCARLx.png";
        }
        if (data[i].name === "Miranda Gaushawk") {
          data[i].image = "https://i.imgur.com/nnfWybt.png";
        }
        if (data[i].name === "Bathilda Bagshot") {
          data[i].image = "https://i.imgur.com/yQnGN9G.png";
        }
        if (data[i].name === "Adalbert Waffling") {
          data[i].image = "https://i.imgur.com/QwHBApV.png";
        }
        if (data[i].name === "Emeric Switch") {
          data[i].image = "https://i.imgur.com/ijZ2WuY.png";
        }
        if (data[i].name === "Phyllida Spore") {
          data[i].image = "https://i.imgur.com/c5Bb5ZX.png";
        }
        if (data[i].name === "Arsenius Jigger") {
          data[i].image = "https://i.imgur.com/8xhVB2Z.png";
        }
        if (data[i].name === "Newt Scamander") {
          data[i].image = "https://i.imgur.com/2pxqOOp.png";
        }
        if (data[i].name === "Quentin Trimble") {
          data[i].image = "https://i.imgur.com/0oRxdmR.png";
        }
        if (data[i].name === "Tom") {
          data[i].image = "https://i.imgur.com/UbEFCzD.png";
        }
        if (data[i].name === "Doris Crockford") {
          data[i].image = "https://i.imgur.com/U1HYVIo.png";
        }
        if (data[i].name === "Quirinus Quirrel") {
          data[i].image = "https://i.imgur.com/bM9DZ8d.png";
        }
        if (data[i].name === "Griphook") {
          data[i].image = "https://i.imgur.com/DZ9Djdt.png";
        }
        if (data[i].name === "Madam Malkin") {
          data[i].image = "https://i.imgur.com/OSYaU6l.png";
        }
        if (data[i].name === "Vindictus Viridian") {
          data[i].image = "https://i.imgur.com/H9fhdVr.png";
        }
        if (data[i].name === "Garrick Ollivander") {
          data[i].image = "https://i.imgur.com/FcswXPF.png";
        }
        if (data[i].name === "Hedwig") {
          data[i].image = "https://i.imgur.com/QgtCtTA.png";
        }
        if (data[i].name === "Molly Weasley") {
          data[i].image = "https://i.imgur.com/KGQw7MO.png";
        }
        if (data[i].name === "Percy Weasley") {
          data[i].image = "https://i.imgur.com/TUYxWMy.png";
        }
        if (data[i].name === "Fred Weasley") {
          data[i].image = "https://i.imgur.com/2lfOlp8.png";
        }
        if (data[i].name === "George Weasley") {
          data[i].image = "https://i.imgur.com/vzDorMb.png";
        }
        if (data[i].name === "Lee Jordan") {
          data[i].image = "https://i.imgur.com/z3rYTUD.png";
        }
        if (data[i].name === "Bill Weasley") {
          data[i].image = "https://i.imgur.com/r80z6Lb.png";
        }
        if (data[i].name === "Charlie Weasley") {
          data[i].image = "https://i.imgur.com/kNVlNuF.png";
        }
        if (data[i].name === "Fat Friar") {
          data[i].image = "https://i.imgur.com/JlK2awI.png";
        }
        if (data[i].name === "Peeves") {
          data[i].image = "https://i.imgur.com/1njy9V3.png";
        }
        if (data[i].name === "Hannah Abbott") {
          data[i].image = "https://i.imgur.com/GobXFuL.png";
        }
        if (data[i].name === "Susan Bones") {
          data[i].image = "https://i.imgur.com/cvNaBjy.png";
        }
        if (data[i].name === "Terry Boot") {
          data[i].image = "https://i.imgur.com/WkzQwnl.png";
        }
        if (data[i].name === "Mandy Brocklehurst") {
          data[i].image = "https://i.imgur.com/oBd6vis.png";
        }
        if (data[i].name === "Lavender Brown") {
          data[i].image = "https://i.imgur.com/7AQj1b6.png";
        }
        if (data[i].name === "Millicent Bulstrode") {
          data[i].image = "https://i.imgur.com/2OlLUc8.png";
        }
        if (data[i].name === "Justin Finch-Fletchley") {
          data[i].image = "https://i.imgur.com/2nAZKtA.png";
        }
        if (data[i].name === "Seamus Finnegan") {
          data[i].image = "https://i.imgur.com/sDqBDoe.png";
        }
        if (data[i].name === "Morag MacDougal") {
          data[i].image = "https://i.imgur.com/O3SXlMK.png";
        }
        if (data[i].name === "Lily Moon") {
          data[i].image = "https://i.imgur.com/4OmDkTv.png";
        }
        if (data[i].name === "Theodore Nott") {
          data[i].image = "https://i.imgur.com/UqqbZOE.png";
        }
        if (data[i].name === "Pansy Parkinson") {
          data[i].image = "https://i.imgur.com/3sbxTiR.png";
        }
        if (data[i].name === "Parvati Patil") {
          data[i].image = "https://i.imgur.com/NoEtrBG.png";
        }
        if (data[i].name === "Padma Patil") {
          data[i].image = "https://i.imgur.com/XSDyOm3.png";
        }
        if (data[i].name === "Sally-Anne Perks") {
          data[i].image = "https://i.imgur.com/xZrDOTE.png";
        }
        if (data[i].name === "Lisa Turpin") {
          data[i].image = "https://i.imgur.com/PwispB9.png";
        }
        if (data[i].name === "Blaise Zabini") {
          data[i].image = "https://i.imgur.com/j35D1u9.png";
        }
        if (data[i].name === "Nearly Headless Nick") {
          data[i].image = "https://i.imgur.com/NolxOI7.png";
        }
        if (data[i].name === "Bloody Baron") {
          data[i].image = "https://i.imgur.com/o09rqDW.png";
        }
        if (data[i].name === "Fat Lady") {
          data[i].image = "https://i.imgur.com/wPd9SRS.png";
        }
        if (data[i].name === "Pomona Sprout") {
          data[i].image = "https://i.imgur.com/FrYCzp0.png";
        }
        if (data[i].name === "Cuthbert Binns") {
          data[i].image = "https://i.imgur.com/DgV5TEu.png";
        }
        if (data[i].name === "Emeric the Evil") {
          data[i].image = "https://i.imgur.com/jFNrnlo.png";
        }
        if (data[i].name === "Uric the Oddball") {
          data[i].image = "https://i.imgur.com/apMluVk.png";
        }
        if (data[i].name === "Filius Flitwick") {
          data[i].image = "https://i.imgur.com/U3uHgtM.png";
        }
        if (data[i].name === "Madam Hooch") {
          data[i].image = "https://i.imgur.com/LY74aKQ.png";
        }
        if (data[i].name === "Oliver Wood") {
          data[i].image = "https://i.imgur.com/pp0PbYF.png";
        }
        if (data[i].name === "Gregory the Smarmy") {
          data[i].image = "https://i.imgur.com/jdmJUvt.png";
        }
        if (data[i].name === "Wizard Baruffio") {
          data[i].image = "https://i.imgur.com/JpGO6d1.png";
        }
        if (data[i].name === "Angelina Johnson") {
          data[i].image = "https://i.imgur.com/GZrtpr1.png";
        }
        if (data[i].name === "Marcus Flint") {
          data[i].image = "https://i.imgur.com/KxwD94Z.png";
        }
        if (data[i].name === "Alicia Spinet") {
          data[i].image = "https://i.imgur.com/PgdUUZS.png";
        }
        if (data[i].name === "Katie Bell") {
          data[i].image = "https://i.imgur.com/2hc7mcA.png";
        }
        if (data[i].name === "Adrian Pucey") {
          data[i].image = "https://i.imgur.com/RRa0QYN.png";
        }
        if (data[i].name === "Miles Bletchley") {
          data[i].image = "https://i.imgur.com/xSV0aN9.png";
        }
        if (data[i].name === "Terrence Higgs") {
          data[i].image = "https://i.imgur.com/fifZuX5.png";
        }
        if (data[i].name === "Fluffy") {
          data[i].image = "https://i.imgur.com/2798S32.png";
        }
        if (data[i].name === "Nicolas Flamel") {
          data[i].image = "https://i.imgur.com/Pj7FCXz.png";
        }
        if (data[i].name === "Gellert Grindelwald") {
          data[i].image = "https://i.imgur.com/uBNzsQI.png";
        }
        if (data[i].name === "Norberta") {
          data[i].image = "https://i.imgur.com/aGyv9JY.png";
        }
        if (data[i].name === "Ronan") {
          data[i].image = "https://i.imgur.com/jpITCNi.png";
        }
        if (data[i].name === "Bane") {
          data[i].image = "https://i.imgur.com/iX8sGgp.png";
        }
        if (data[i].name === "Firenze") {
          data[i].image = "https://i.imgur.com/XoizLT6.png";
        }
        if (data[i].name === "Elfrick the Eager") {
          data[i].image = "https://i.imgur.com/Y0CZfid.png";
        }
        if (data[i].name === "Perenelle Flamel") {
          data[i].image = "https://i.imgur.com/2Ye89oK.png";
        }
        if (data[i].name === "Bertie Bott") {
          data[i].image = "https://i.imgur.com/GYDlWxH.png";
        }
        if (data[i].name === "Dobby") {
          data[i].image = "https://i.imgur.com/tVz6TIr.png";
        }
        if (data[i].name === "Mr Mason") {
          data[i].image = "https://i.imgur.com/VqEBGpW.png";
        }
        if (data[i].name === "Mrs Mason") {
          data[i].image = "https://i.imgur.com/AKjiarr.png";
        }
        if (data[i].name === "Perkins") {
          data[i].image = "https://i.imgur.com/fV84cCR.png";
        }
        if (data[i].name === "Celestina Warbeck") {
          data[i].image = "https://i.imgur.com/EWWC3sE.png";
        }
        if (data[i].name === "Gilderoy Lockhart") {
          data[i].image = "https://i.imgur.com/pQ26hyE.png";
        }
        if (data[i].name === "Mundungus Fletcher") {
          data[i].image = "https://i.imgur.com/OZHCLE4.png";
        }
        if (data[i].name === "Mr Borgin") {
          data[i].image = "https://i.imgur.com/5DvS7gt.png";
        }
        if (data[i].name === "Mr Borgin") {
          data[i].image = "https://i.imgur.com/5DvS7gt.png";
        }
        if (data[i].name === "Mr Granger") {
          data[i].image = "https://i.imgur.com/SOhU3Y9.png";
        }
        if (data[i].name === "Mrs Granger") {
          data[i].image = "https://i.imgur.com/iquF9SY.png";
        }
        if (data[i].name === "Dr Filibuster") {
          data[i].image = "https://i.imgur.com/uHd3Uct.png";
        }
        if (data[i].name === "Colin Creevey") {
          data[i].image = "https://i.imgur.com/RuJM8rL.png";
        }
        if (data[i].name === "Gladys Gudgeon") {
          data[i].image = "https://i.imgur.com/xpZpi9y.png";
        }
        if (data[i].name === "Veronica Smethley") {
          data[i].image = "https://i.imgur.com/tCMa6nM.png";
        }
        if (data[i].name === "Patrick Delaney-Podmore") {
          data[i].image = "https://i.imgur.com/Djn7loK.png";
        }
        if (data[i].name === "Z. Nettles") {
          data[i].image = "https://i.imgur.com/0pKuHyd.png";
        }
        if (data[i].name === "D.J. Prod") {
          data[i].image = "https://i.imgur.com/4KiyU7Q.png";
        }
        if (data[i].name === "Elsie Prod") {
          data[i].image = "https://i.imgur.com/xMFR7sI.png";
        }
        if (data[i].name === "Moaning Myrtle") {
          data[i].image = "https://i.imgur.com/1izNMgC.png";
        }
        if (data[i].name === "Godric Gryffindor") {
          data[i].image = "https://i.imgur.com/89K54ie.png";
        }
        if (data[i].name === "Rowena Ravenclaw") {
          data[i].image = "https://i.imgur.com/rx9H2EU.png";
        }
        if (data[i].name === "Helga Hufflepuff") {
          data[i].image = "https://i.imgur.com/OuOX7l9.png";
        }
        if (data[i].name === "Salazar Slytherin") {
          data[i].image = "https://i.imgur.com/XyiKuQg.png";
        }
        if (data[i].name === "Madame Pince") {
          data[i].image = "https://i.imgur.com/yOKZEDn.png";
        }
        if (data[i].name === "Milicent Bullstroude") {
          data.splice(i, 1);
        }
        if (data[i].name === "Ernie Macmillan") {
          data[i].image = "https://i.imgur.com/CDsvxEN.png";
        }
        if (data[i].name === "Armando Dippet") {
          data[i].image = "https://i.imgur.com/ONuzBVk.png";
        }
        if (data[i].name === "Penelope Clearwater") {
          data[i].image = "https://i.imgur.com/18MesuX.png";
        }
        if (data[i].name === "Cornelius Fudge") {
          data[i].image = "https://i.imgur.com/VFk452S.png";
        }
        if (data[i].name === "Aragog") {
          data[i].image = "https://i.imgur.com/hgbr6Eu.png";
        }
        if (data[i].name === "Mosag") {
          data[i].image = "https://i.imgur.com/3JQT8B9.png";
        }
        if (data[i].name === "Stanley Shunpike") {
          data[i].image = "https://i.imgur.com/q5l6jCP.png";
        }
        if (data[i].name === "Ernest Prang") {
          data[i].image = "https://i.imgur.com/vo2Q1yQ.png";
        }
        if (data[i].name === "Madam Marsh") {
          data[i].image = "https://i.imgur.com/0jhEfkU.png";
        }
        if (data[i].name === "Florean Fortescue") {
          data[i].image = "https://i.imgur.com/rm9poaW.png";
        }
        if (data[i].name === "Sir Cadogan") {
          data[i].image = "https://i.imgur.com/Fx5OKaW.png";
        }
        if (data[i].name === "Sybill Trelawney") {
          data[i].image = "https://i.imgur.com/6wFt21U.png";
        }
        if (data[i].name === "Buckbeak") {
          data[i].image = "https://i.imgur.com/59c4Ppi.png";
        }
        if (data[i].name === "Peter Pettigrew") {
          data[i].image = "https://i.imgur.com/e8oYefq.png";
        }
        if (data[i].name === "Madam Rosmerta") {
          data[i].image = "https://i.imgur.com/bNkxWoq.png";
        }
        if (data[i].name === "Derek") {
          data[i].image = "https://i.imgur.com/6lKhWR3.png";
        }
        if (data[i].name === "Septima Vector") {
          data[i].image = "https://i.imgur.com/IzauTxp.png";
        }
        if (data[i].name === "Cassius Warrington") {
          data[i].image = "https://i.imgur.com/5tG0UTW.png";
        }
        if (data[i].name === "Graham Montague") {
          data[i].image = "https://i.imgur.com/CxduDxp.png";
        }
        if (data[i].name === "Peregrine Derrick") {
          data[i].image = "https://i.imgur.com/ec2LBF7.png";
        }
        if (data[i].name === "Lucian Bole") {
          data[i].image = "https://i.imgur.com/xLkGDeG.png";
        }
        if (data[i].name === "Walden Macnair") {
          data[i].image = "https://i.imgur.com/u8cGI5A.png";
        }
        if (data[i].name === "Franc Bryce") {
          data[i].image = "https://i.imgur.com/iVgD8dj.png";
        }
        if (data[i].name === "Dot") {
          data[i].image = "https://i.imgur.com/Vvh1Lge.png";
        }
        if (data[i].name === "Bertha Jorkins") {
          data[i].image = "https://i.imgur.com/5fSlr2E.png";
        }
        if (data[i].name === "Barty Crouch") {
          data[i].image = "https://i.imgur.com/dTZ5hIN.png";
        }
        if (data[i].name === "Ludo Bagman") {
          data[i].image = "https://i.imgur.com/Drkj2Zc.png";
        }
        if (data[i].name === "Amos Diggory") {
          data[i].image = "https://i.imgur.com/bZqSdUU.png";
        }
        if (data[i].name === "Mr Roberts") {
          data[i].image = "https://i.imgur.com/e2aWx0b.png";
        }
        if (data[i].name === "Mr Payne") {
          data[i].image = "https://i.imgur.com/jlfeMs7.png";
        }
        if (data[i].name === "Basil") {
          data[i].image = "https://i.imgur.com/nIr3gQq.png";
        }
        if (data[i].name === "Archie Aymslowe") {
          data[i].image = "https://i.imgur.com/wmfLkMj.png";
        }
        if (data[i].name === "Cuthbert Mockridge") {
          data[i].image = "https://i.imgur.com/KzkO3Fz.png";
        }
        if (data[i].name === "Gilbert Wimple") {
          data[i].image = "https://i.imgur.com/yxW5b2d.png";
        }
        if (data[i].name === "Arnold Peasegood") {
          data[i].image = "https://i.imgur.com/eF0xAI5.png";
        }
        if (data[i].name === "Broderick Bode") {
          data[i].image = "https://i.imgur.com/EV6XrgF.png";
        }
        if (data[i].name === "Saul Croaker") {
          data[i].image = "https://i.imgur.com/M3EbPc2.png";
        }
        if (data[i].name === "Ali Bashir") {
          data[i].image = "https://i.imgur.com/9feQY21.png";
        }
        if (data[i].name === "Victor Krum") {
          data[i].image = "https://i.imgur.com/IOZY4O5.png";
        }
        if (data[i].name === "Winky") {
          data[i].image = "https://i.imgur.com/WBLNcwh.png";
        }
        if (data[i].name === "Narcissa Malfoy") {
          data[i].image = "https://i.imgur.com/2ZrkazV.png";
        }
        if (data[i].name === "Vasily Dimitrov") {
          data[i].image = "https://i.imgur.com/h8AHk7L.png";
        }
        if (data[i].name === "Clara Ivanova") {
          data[i].image = "https://i.imgur.com/bLnyhgR.png";
        }
        if (data[i].name === "Lev Zograf") {
          data[i].image = "https://i.imgur.com/Po7rUwx.png";
        }
        if (data[i].name === "Alexei Levski") {
          data[i].image = "https://i.imgur.com/5DFTjFB.png";
        }
        if (data[i].name === "Pyotr Vulchanov") {
          data[i].image = "https://i.imgur.com/MXcvI1R.png";
        }
        if (data[i].name === "Ivan Volkov") {
          data[i].image = "https://i.imgur.com/OzNQSxf.png";
        }
        if (data[i].name === "Connolly") {
          data[i].image = "https://i.imgur.com/YJeTqs3.png";
        }
        if (data[i].name === "Barry Ryan") {
          data[i].image = "https://i.imgur.com/tnYp9Gz.png";
        }
        if (data[i].name === "Troy") {
          data[i].image = "https://i.imgur.com/le5dAqt.png";
        }
        if (data[i].name === "Mullet") {
          data[i].image = "https://i.imgur.com/jWNWzKv.png";
        }
        if (data[i].name === "Moran") {
          data[i].image = "https://i.imgur.com/pFsMn2q.png";
        }
        if (data[i].name === "Quigley") {
          data[i].image = "https://i.imgur.com/r3KKxmh.png";
        }
        if (data[i].name === "Aidan Lynch") {
          data[i].image = "https://i.imgur.com/4fSfRw6.png";
        }
        if (data[i].name === "Hassan Mostafa") {
          data[i].image = "https://i.imgur.com/w05ibiN.png";
        }
        if (data[i].name === "Dennis Creevey") {
          data[i].image = "https://i.imgur.com/CbfnhBG.png";
        }
        if (data[i].name === "Aurora Sinistra") {
          data[i].image = "https://i.imgur.com/7kOWTxE.png";
        }
        if (data[i].name === "Stewart Ackerley") {
          data[i].image = "https://i.imgur.com/iYE1c7Z.png";
        }
        if (data[i].name === "Malcolm Baddock") {
          data[i].image = "https://i.imgur.com/tbgenQM.png";
        }
        if (data[i].name === "Eleanor Branstone") {
          data[i].image = "https://i.imgur.com/vGHSPVC.png";
        }
        if (data[i].name === "Owen Cauldwell") {
          data[i].image = "https://i.imgur.com/ar1Tsem.png";
        }
        if (data[i].name === "Emma Dobbs") {
          data[i].image = "https://i.imgur.com/I3GP27E.png";
        }
        if (data[i].name === "Laura Madley") {
          data[i].image = "https://i.imgur.com/4JohSHq.png";
        }
        if (data[i].name === "Natalie McDonald") {
          data[i].image = "https://i.imgur.com/D8lyjO6.png";
        }
        if (data[i].name === "Graham Pritchard") {
          data[i].image = "https://i.imgur.com/WKESmJP.png";
        }
        if (data[i].name === "Orla Quirke") {
          data[i].image = "https://i.imgur.com/7ODoiFD.png";
        }
        if (data[i].name === "Kevin Whitby") {
          data[i].image = "https://i.imgur.com/RrfnQGh.png";
        }
        if (data[i].name === "Eloise Midgen") {
          data[i].image = "https://i.imgur.com/BXKupGV.png";
        }
        if (data[i].name === "Alastor Moody") {
          data[i].image = "https://i.imgur.com/uRwUwdt.png";
        }
        if (data[i].name === "Madame Maxime") {
          data[i].image = "https://i.imgur.com/G8DLRnX.png";
        }
        if (data[i].name === "Igor Karkaroff") {
          data[i].image = "https://i.imgur.com/QKOATVx.png";
        }
        if (data[i].name === "Poliakoff") {
          data[i].image = "https://i.imgur.com/2Lvh5c5.png";
        }
        if (data[i].name === "Fawcett") {
          data[i].image = "https://i.imgur.com/BsXXq1c.png";
        }
        if (data[i].name === "Summers") {
          data[i].image = "https://i.imgur.com/g1fz6Vs.png";
        }
        if (data[i].name === "Fleur Delacour") {
          data[i].image = "https://i.imgur.com/wCFMRMg.png";
        }
        if (data[i].name === "Gregorovic") {
          data[i].image = "https://i.imgur.com/ANFRTEB.png";
        }
        if (data[i].name === "Rita Skeeter") {
          data[i].image = "https://i.imgur.com/A1wXjMN.png";
        }
        if (data[i].name === "Stebbins") {
          data[i].image = "https://i.imgur.com/mfDqYrS.png";
        }
        if (data[i].name === "Wilhelmina Grubbly-Plank") {
          data[i].image = "https://i.imgur.com/JyXvGDb.png";
        }
        if (data[i].name === "Bozo") {
          data[i].image = "https://i.imgur.com/XgH2nOP.png";
        }
        if (data[i].name === "Evan Rosier") {
          data[i].image = "https://i.imgur.com/m5QLqSA.png";
        }
        if (data[i].name === "Wilkes") {
          data[i].image = "https://i.imgur.com/MpX0npT.png";
        }
        if (data[i].name === "Avery") {
          data[i].image = "https://i.imgur.com/d8Z2b6b.png";
        }
        if (data[i].name === "Antonin Dolohov") {
          data[i].image = "https://i.imgur.com/bo7kFdZ.png";
        }
        if (data[i].name === "Travers") {
          data[i].image = "https://i.imgur.com/L2AHRvb.png";
        }
        if (data[i].name === "Marlene McKinnon") {
          data[i].image = "https://i.imgur.com/vbNtKiJ.png";
        }
        if (data[i].name === "Mulciber") {
          data[i].image = "https://i.imgur.com/nBwSHZS.png";
        }
        if (data[i].name === "Augustus Rookwood") {
          data[i].image = "https://i.imgur.com/f5hSPe1.png";
        }
        if (data[i].name === "Frank Longbottom") {
          data[i].image = "https://i.imgur.com/MUDcxNd.png";
        }
        if (data[i].name === "Alice Longbottom") {
          data[i].image = "https://i.imgur.com/4dDp0DD.png";
        }
        if (data[i].name === "Violet") {
          data[i].image = "https://i.imgur.com/5cj7mgh.png";
        }
        if (data[i].name === "Apollyon Pringle") {
          data[i].image = "https://i.imgur.com/QkzcgPn.png";
        }
        if (data[i].name === "Ogg") {
          data[i].image = "https://i.imgur.com/WbbkwWS.png";
        }
        if (data[i].name === "Mafalda Hopkirk") {
          data[i].image = "https://i.imgur.com/BVPkOg0.png";
        }
        if (data[i].name === "Nymphadora Tonks") {
          data[i].image = "https://i.imgur.com/Ab1cRYl.png";
        }
        if (data[i].name === "Elphias Doge") {
          data[i].image = "https://i.imgur.com/wnCdQ2j.png";
        }
        if (data[i].name === "Dedalus Diggle") {
          data[i].image = "https://i.imgur.com/8nQt6GP.png";
        }
        if (data[i].name === "Sturgis Podmore") {
          data[i].image = "https://i.imgur.com/QuVW8WU.png";
        }
        if (data[i].name === "Hestia Jones") {
          data[i].image = "https://i.imgur.com/2BCmuKu.png";
        }
        if (data[i].name === "Ragnok") {
          data[i].image = "https://i.imgur.com/jmOjEcw.png";
        }
        if (data[i].name === "Alphard Black") {
          data[i].image = "https://i.imgur.com/i1dxb2G.png";
        }
        if (data[i].name === "Regulus Black") {
          data[i].image = "https://imgur.com/2jS1sEG.png";
        }
        if (data[i].name === "Phineas Nigelus Black") {
          data[i].image = "https://i.imgur.com/ETDPV1X.png";
        }
        if (data[i].name === "Araminta Meliflua Black") {
          data[i].image = "https://i.imgur.com/2jqlute.png";
        }
        if (data[i].name === "Elladora Black") {
          data[i].image = "https://i.imgur.com/GLwt9h1.png";
        }
        if (data[i].name === "Andromeda Tonks") {
          data[i].image = "https://i.imgur.com/d2fSDJ1.png";
        }
        if (data[i].name === "Ted Tonks") {
          data[i].image = "https://i.imgur.com/nEbRxVU.png";
        }
        if (data[i].name === "Rodolphus Lestrange") {
          data[i].image = "https://i.imgur.com/8qNJ3qm.png";
        }
        if (data[i].name === "Rabastan Lestrange") {
          data[i].image = "https://i.imgur.com/QCWcFjW.png";
        }
        if (data[i].name === "Eric Munch") {
          data[i].image = "https://i.imgur.com/Oh8yF7V.png";
        }
        if (data[i].name === "Bob") {
          data[i].image = "https://i.imgur.com/QfaFu4T.png";
        }
        if (data[i].name === "Bengie Fenwick") {
          data[i].image = "https://i.imgur.com/HBGK8T5.png";
        }
        if (data[i].name === "Edgar Bones") {
          data[i].image = "https://i.imgur.com/9gGKSPZ.png";
        }
        if (data[i].name === "Amelia Bones") {
          data[i].image = "https://i.imgur.com/SQwrozJ.png";
        }
        if (data[i].name === "Caradoc Dearborn") {
          data[i].image = "https://i.imgur.com/sTeMKZu.png";
        }
        if (data[i].name === "Gideon Prewett") {
          data[i].image = "https://i.imgur.com/kA4kNKy.png";
        }
        if (data[i].name === "Fabian Prewett") {
          data[i].image = "https://i.imgur.com/ntqGsGF.png";
        }
        if (data[i].name === "Aberforth Dumbledore") {
          data[i].image = "https://i.imgur.com/xBD45Ka.png";
        }
        if (data[i].name === "Dorcas Meadowes") {
          data[i].image = "https://i.imgur.com/mZE5ka8.png";
        }
        if (data[i].name === "Algie Longbottom") {
          data[i].image = "https://i.imgur.com/vyd61fN.png";
        }
        if (data[i].name === "Anthony Goldstein") {
          data[i].image = "https://i.imgur.com/A6DVZUg.png";
        }
        if (data[i].name === "Stubby Boardman") {
          data[i].image = "https://i.imgur.com/5jF2xz4.png";
        }
        if (data[i].name === "Doris Purkiss") {
          data[i].image = "https://i.imgur.com/V2uYzce.png";
        }
        if (data[i].name === "Euan Abercrombie") {
          data[i].image = "https://i.imgur.com/OfIObYf.png";
        }
        if (data[i].name === "Rose Zeller") {
          data[i].image = "https://i.imgur.com/hi7edBb.png";
        }
        if (data[i].name === "Patricia Stimpson") {
          data[i].image = "https://i.imgur.com/a0jo1Uw.png";
        }
        if (data[i].name === "Kenneth Towler") {
          data[i].image = "https://i.imgur.com/q6e28As.png";
        }
        if (data[i].name === "Vicky Frobisher") {
          data[i].image = "https://i.imgur.com/dZOoQmL.png";
        }
        if (data[i].name === "Geoffrey Hooper") {
          data[i].image = "https://i.imgur.com/QfauURH.png";
        }
        if (data[i].name === "Cassandra Trelawney") {
          data[i].image = "https://i.imgur.com/gm8gViF.png";
        }
        if (data[i].name === "Michael Corner") {
          data[i].image = "https://i.imgur.com/zzh4mor.png";
        }
        if (data[i].name === "Zacharias Smith") {
          data[i].image = "https://i.imgur.com/6dufeER.png";
        }
        if (data[i].name === "Barnabas the Barmy") {
          data[i].image = "https://i.imgur.com/hzRItCB.png";
        }
        if (data[i].name === "Karkus") {
          data[i].image = "https://i.imgur.com/vYDO36s.png";
        }
        if (data[i].name === "Golgomath") {
          data[i].image = "https://i.imgur.com/cXgQP8A.png";
        }
        if (data[i].name === "Fridwulfa") {
          data[i].image = "https://i.imgur.com/Tv1YFcp.png";
        }
        if (data[i].name === "Andrew Kirke") {
          data[i].image = "https://i.imgur.com/Zj3YUZZ.png";
        }
        if (data[i].name === "Jack Sloper") {
          data[i].image = "https://i.imgur.com/QBgCu3k.png";
        }
        if (data[i].name === "Everard") {
          data[i].image = "https://i.imgur.com/H0qynV7.png";
        }
        if (data[i].name === "Dilys Derwent") {
          data[i].image = "https://i.imgur.com/ZrjvCm6.png";
        }
        if (data[i].name === "Hippocrates Smethwyck") {
          data[i].image = "https://i.imgur.com/hAUUEXT.png";
        }
        if (data[i].name === "Augustus Pye") {
          data[i].image = "https://i.imgur.com/QJF2TEC.png";
        }
        if (data[i].name === "Urquhart Rackharrow") {
          data[i].image = "https://i.imgur.com/gyb3tEb.png";
        }
        if (data[i].name === "Willy Widdershins") {
          data[i].image = "https://i.imgur.com/OInnwGC.png";
        }
        if (data[i].name === "Agnes") {
          data[i].image = "https://i.imgur.com/kp6mONy.png";
        }
        if (data[i].name === "Miriam Strout") {
          data[i].image = "https://i.imgur.com/evOY4Ye.png";
        }
        if (data[i].name === "Madam Puddifoot") {
          data[i].image = "https://i.imgur.com/QxDpMke.png";
        }
        if (data[i].name === "Summerby") {
          data[i].image = "https://i.imgur.com/oZftCGF.png";
        }
        if (data[i].name === "Marietta Edgecombe") {
          data[i].image = "https://i.imgur.com/9pVsOY2.png";
        }
        if (data[i].name === "Madam Edgecombe") {
          data[i].image = "https://i.imgur.com/mOKXLhv.png";
        }
        if (data[i].name === "John Dawlish") {
          data[i].image = "https://i.imgur.com/ohRWTNn.png";
        }
        if (data[i].name === "Bradley") {
          data[i].image = "https://i.imgur.com/XctnsCj.png";
        }
        if (data[i].name === "Roger Davies") {
          data[i].image = "https://i.imgur.com/dff5DIc.png";
        }
        if (data[i].name === "Grawp") {
          data[i].image = "https://i.imgur.com/dahgLDT.png";
        }
        if (data[i].name === "Griselda Marchbanks") {
          data[i].image = "https://i.imgur.com/H5BUFVy.png";
        }
        if (data[i].name === "Eddie Carmichael") {
          data[i].image = "https://i.imgur.com/gD2QVR9.png";
        }
        if (data[i].name === "Daphne Greengrass") {
          data[i].image = "https://i.imgur.com/4xaYzgp.png";
        }
        if (data[i].name === "Tofty") {
          data[i].image = "https://i.imgur.com/N4ygiDJ.png";
        }
        if (data[i].name === "Tiberius Ogden") {
          data[i].image = "https://i.imgur.com/LLESuuW.png";
        }
        if (data[i].name === "Pierre Bonaccord") {
          data[i].image = "https://i.imgur.com/ewCAXGP.png";
        }
        if (data[i].name === "Stubby Boardman") {
          data[i].image = "https://i.imgur.com/hBaNLu1.png";
        }
        if (data[i].name === "Magorian") {
          data[i].image = "https://i.imgur.com/IvSlcuo.png";
        }
        if (data[i].name === "Emmeline Vance") {
          data[i].image = "https://i.imgur.com/VqqkJDF.png";
        }
        if (data[i].name === "Herbert Chorley") {
          data[i].image = "https://i.imgur.com/71SeWTz.png";
        }
        if (data[i].name === "Rufus Scrimgeour") {
          data[i].image = "https://i.imgur.com/RtcS2hM.png";
        }
        if (data[i].name === "Corban Yaxley") {
          data[i].image = "https://i.imgur.com/4acNRuo.png";
        }
        if (data[i].name === "Fenrir Greyback") {
          data[i].image = "https://i.imgur.com/jjbubEa.png";
        }
        if (data[i].name === "Dirk Cresswell") {
          data[i].image = "https://i.imgur.com/PbEgzfk.png";
        }
        if (data[i].name === "Barnabas Cuffe") {
          data[i].image = "https://i.imgur.com/a1gx5fx.png";
        }
        if (data[i].name === "Ambrosius Flume") {
          data[i].image = "https://i.imgur.com/YovD0P3.png";
        }
        if (data[i].name === "Gwenog Jones") {
          data[i].image = "https://i.imgur.com/kGepRWm.png";
        }
        if (data[i].name === "Arkie Philpott") {
          data[i].image = "https://i.imgur.com/4jr5n9g.png";
        }
        if (data[i].name === "Verity") {
          data[i].image = "https://i.imgur.com/07zzLuX.png";
        }
        if (data[i].name === "Romilda Vane") {
          data[i].image = "https://i.imgur.com/CxO0Ila.png";
        }
        if (data[i].name === "Cormac McLaggen") {
          data[i].image = "https://i.imgur.com/KrYlvHe.png";
        }
        if (data[i].name === "Marcus Belby") {
          data[i].image = "https://i.imgur.com/uMu8cBA.png";
        }
        if (data[i].name === "Damocles Belby") {
          data[i].image = "https://i.imgur.com/yrvoe0L.png";
        }
        if (data[i].name === "Tiberius") {
          data[i].image = "https://i.imgur.com/5wG1zCo.png";
        }
      }
      const dataAlphabetical = JSON.parse(JSON.stringify(data));

      dataAlphabetical.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      setCharactersAlphabetical(dataAlphabetical);
      setCharacters(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters";

    const controller = new AbortController();
    fetchCharacters(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const handleCharacterChange = (event) => {
    setFindCharacter(event.target.value);
  };

  const handleCharacterChangeRandom = (event) => {
    event.preventDefault();
    setFindCharacter(
      charactersAlphabetical[
        Math.floor(Math.random() * charactersAlphabetical.length)
      ].name
    );
  };

  return (
    <>
      <div className={styles.top_bar}>
        <form>
          <div className={styles.find_character}>
            <label htmlFor="character">Find Character:</label>
          </div>
          <div className={styles.select_character}>
            <input
              id="character"
              type="text"
              onChange={handleCharacterChange}
              list="characters"
              placeholder="Select a character"
              value={findCharacter}
            ></input>
            <datalist id="characters">
              {charactersAlphabetical.map((character, index) => {
                return <option value={character.name} key={index} />;
              })}
            </datalist>
          </div>
        </form>
        <button onClick={handleCharacterChangeRandom}>Random Character</button>
      </div>
      {!isLoading && (
        <Character
          characters={characters}
          findCharacter={findCharacter}
        ></Character>
      )}
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Characters;
