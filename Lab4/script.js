function Run()
{
  var topLeft = findTopLeft(theJSON);
  var topRight = findTopRight(theJSON);
  var bottomLeft = findBotLeft(theJSON);
  var bottomRight = findBotRight(theJSON);


  var myBoundingBox = 
  {
    topLeftPoint: topLeft,
    topRightPoint: topRight,
    bottomLeftPoint: bottomLeft,
    bottomRightPoint: bottomRight
  }

  console.log('Bounding box corners for asahayes@tamu.edu');
  console.log(myBoundingBox);
}

function findTopLeft(inPoints)
{
  var currentTopLeft;

  inPoints.data.forEach(element => 
  {
    if (currentTopLeft == null)
    {
      currentTopLeft = element;
    }
    else{
      if (element.lat > currentTopLeft.lat && element.lon < currentTopLeft.lon)
      {
        currentTopLeft = element;
      }
    }
  }
  );

  return currentTopLeft;
}

function findTopRight(inPoints)
{
  var currentTopRight;

  inPoints.data.forEach(element => 
  {
    if (currentTopRight == null)
    {
      currentTopRight = element;
    }
    else{
      if (element.lat > currentTopRight.lat && element.lon < currentTopRight.lon)
      {
        currentTopRight = element;
      }
    }
  }
  );

  return currentTopRight;
}

function findBotLeft(inPoints)
{
  var currentBotLeft;

  inPoints.data.forEach(element => 
  {
    if (currentBotLeft == null)
    {
      currentBotLeft = element;
    }
    else{
      if (element.lat > currentBotLeft.lat && element.lon < currentBotLeft.lon)
      {
        currentBotLeft = element;
      }
    }
  }
  );

  return currentBotLeft;
}

function findBotRight(inPoints)
{
  var currentBotRight;

  inPoints.data.forEach(element => 
  {
    if (currentBotRight == null)
    {
      currentBotRight = element;
    }
    else{
      if (element.lat > currentBotRight.lat && element.lon < currentBotRight.lon)
      {
        currentBotRight = element;
      }
    }
  }
  );

  return currentBotRight;
}