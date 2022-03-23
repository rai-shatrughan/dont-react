import Typewriter from 'typewriter-effect';
import './Base.css';

export default function Center() {
  return (
        <div className="centerBase">
            <Typewriter
                options={{
                    strings: ['Hello', 'Chuhia'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
  );
}