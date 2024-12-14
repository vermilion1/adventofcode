const fs = require("fs");
const { createCanvas } = require("canvas");
const { exec } = require("child_process");

module.exports = async (input) => {
  const GRID = [101, 103];
  const robots = input.split("\n").map((robot) => {
    const [px, py, vx, vy] = robot
      .match(/p=(\d+),(\d+) v=(-?\d+),(-?\d+)/)
      .slice(1)
      .map(Number);
    return { position: [px, py], velocity: [vx, vy] };
  });

  const snapshot = (iteration) => {
    const canvas = createCanvas(GRID[0], GRID[1]);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, GRID[0], GRID[1]);
    ctx.fillStyle = "#fff";

    robots.forEach(({ position }) => {
      ctx.fillRect(position[0], position[1], 1, 1);
    });

    ctx.fillText(`iteration: ${iteration}`, 3, 10);
    fs.writeFileSync(
      `/tmp/ac2024-14/${String(iteration).padStart(5, "0")}.png`,
      canvas.toBuffer()
    );
  };

  for (let i = 0; i < 10000; i += 1) {
    robots.forEach(({ position, velocity }) => {
      position[0] = (position[0] + velocity[0] + GRID[0]) % GRID[0];
      position[1] = (position[1] + velocity[1] + GRID[1]) % GRID[1];
    });
    snapshot(i + 1);
  }

  await new Promise((resolve, reject) =>
    exec(
      "ffmpeg -framerate 60 -i /tmp/ac2024-14/%05d.png -c:v libx264 -crf 18 -c:a aac -b:a 128k /tmp/ac2024-14/output.mp4",
      (err) => {
        err ? reject() : resolve();
      }
    )
  );

  return "Check generated /tmp/ac2024-14/output.mp4 to identify the Easter egg iteration";
};
