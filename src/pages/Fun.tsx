import React, { useEffect, useRef, useState } from 'react';
import Typography from '../components/Typography';

// Configurable constants
const MIN_NUMBER = 1;
const MAX_NUMBER = 9999;
// animation duration in milliseconds
const ANIM_DURATION_MS = 500;

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const Fun: React.FC = () => {
  const [current, setCurrent] = useState<number>(() => rand(MIN_NUMBER, MAX_NUMBER));
  const [displayed, setDisplayed] = useState<number>(current);
  const [animating, setAnimating] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean | null }>({
    text: '',
    ok: null,
  });
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const play = (choice: 'high' | 'low') => {
    if (animating) return;
    setMessage({ text: '', ok: null });
    setAnimating(true);

    // quick spinning effect by showing random numbers
    intervalRef.current = window.setInterval(() => {
      setDisplayed(rand(MIN_NUMBER, MAX_NUMBER));
    }, 60) as unknown as number;

    // actual roll result after animation
    const result = rand(MIN_NUMBER, MAX_NUMBER);

    setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayed(result);
      setAnimating(false);

      const won = choice === 'high' ? result > current : result < current;
      if (won) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        setBest((b) => Math.max(b, newStreak));
        setMessage({ text: `You won! Rolled ${result}`, ok: true });
      } else {
        setStreak(0);
        setMessage({ text: `You lost. Rolled ${result}`, ok: false });
      }

      setCurrent(result);
    }, ANIM_DURATION_MS);
  };

  return (
    <div className="flex items-center justify-center flex-grow flex-col">
      <div>
        <Typography as="h1" className="text-8xl text-center mb-6">
          GAMBLING IS FUN! <span className="text-red-600">DO IT</span>
        </Typography>
      </div>
      <div className="card">
        <Typography as="h2" className="card-title text-3xl text-center justify-center">
          <span className="text-green-600">Hi</span>-<span className="text-red-600">Lo</span> Game
        </Typography>
        <div className="card-body">
          <div className="flex flex-col items-center gap-4 py-4">
            <div
              aria-live="polite"
              className="text-center text-6xl md:text-7xl tracking-wider w-52 h-28 flex items-center justify-center rounded-lg bg-base-200"
            >
              <Typography>{displayed}</Typography>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="btn bg-green-600 disabled:bg-transparent"
                onClick={() => play('high')}
                disabled={animating}
                aria-pressed={false}
                aria-label="Bet High"
              >
                <Typography className="text-3xl">High</Typography>
              </button>

              <button
                type="button"
                className="btn bg-red-600 disabled:bg-transparent"
                onClick={() => play('low')}
                disabled={animating}
                aria-pressed={false}
                aria-label="Bet Low"
              >
                <Typography className="text-3xl">Low</Typography>
              </button>
            </div>

            <div className="min-h-[2rem]">
              {message.text && (
                <Typography
                  className={`text-2xl ${message.ok ? 'text-green-600' : 'text-red-600'}`}
                >
                  {message.text}
                </Typography>
              )}
            </div>

            <div className="w-full grid grid-cols-2 gap-2 text-xl">
              <div className="bg-base-100 rounded p-2 text-center">
                <div className="text-muted">
                  <Typography>Current streak</Typography>
                </div>
                <div className="font-bold">
                  <Typography>{streak}</Typography>
                </div>
              </div>
              <div className="bg-base-100 rounded p-2 text-center">
                <div className="text-muted">
                  <Typography>Best streak</Typography>
                </div>
                <div className="font-bold">
                  <Typography>{best}</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Fun.displayName = 'Fun';

export default Fun;
