import Typewriter from 'typewriter-effect';
import './Base.css';

export default function Center() {
  return (
        <div className="centerBase">
        <div className="overlay">
            <Typewriter
                options={{
                    strings: ['Hello', 'Mr pop', 'How do you do?'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pause: 10,
                }}
            />
        </div>
        </div>
  );
}