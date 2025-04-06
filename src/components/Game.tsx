import { useEffect, useState } from 'react';
import { hiraganaList } from '../utils/hiraganaList';

const ROMAJI_COUNT = 4;

export const Game = () => {
  const [hiragana, setHiragana] = useState<string>('');
  const [romajis, setRomajis] = useState<string[]>([]);

  const getRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiraganaList.length);
    setHiragana(hiraganaList[randomIndex].char);
  };

  const getRandomRomajis = () => {
    const shuffledRomaji = hiraganaList
      .map(item => item.romaji)
      .sort(() => Math.random() - 0.5);

    setRomajis(shuffledRomaji.slice(0, ROMAJI_COUNT));
  };

  useEffect(() => {
    getRandomHiragana();
    getRandomRomajis();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div>
        <h1 className="text-3xl">Hikatrain!</h1>
      </div>

      <div>
        <p className="text-9xl">{hiragana}</p>
      </div>

      <div>
        {romajis.map((romaji, index) => (
          <button
            key={index}
            className="m-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            {romaji}
          </button>
        ))}
      </div>
    </div>
  );
};
