import Typewriter from 'typewriter-effect';

export default function Center() {
  return (
        <div className="center">
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