import React, { useEffect, useRef, useState } from "react";


const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const dinoRef = useRef(null);

  // Handle Jumping
  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  useEffect(() => {
    
    const obstacleTimer = setInterval(() => {
      setObstaclePosition((prev) => {
        if (prev <= 0) {
          return 100;
        }
        return prev - 1;
      });
    }, 20);

    
    const collisionTimer = setInterval(() => {
      if (obstaclePosition < 5 && !isJumping) {
        setGameOver(true);
        clearInterval(obstacleTimer);
        clearInterval(collisionTimer);
      }
    }, 10);

    return () => {
      clearInterval(obstacleTimer);
      clearInterval(collisionTimer);
    };
  }, [isJumping, obstaclePosition]);

  return (
    <div className="game-container" onClick={handleJump}>
      <div ref={dinoRef} className={`dino ${isJumping ? "jump" : ""}`}></div>
      <div className="obstacle" style={{ left: `${obstaclePosition}%` }}></div>
      {gameOver && <div className="game-over">Game Over! Click to Restart</div>}
    </div>
  );
};

export default DinoGame;
