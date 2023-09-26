function calculateDemeritPoints(speed){
    const speedLimit = 70;
    let demeritPoint = 0;

    if (speed<=speedLimit) {
        console.log("ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
    
        if (demeritPoints > 12) {
          console.log("License suspended");
        }
      }
    }
}

const carSpeed = parseInt(prompt("Enter the car's speed (km/h):"));

calculateDemeritPoints(carSpeed);


