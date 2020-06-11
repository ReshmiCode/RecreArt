# RecreArt

## Created By

- [Megan Tran](https://github.com/meganjtran)
- [Reshmi Ranjith](https://github.com/ReshmiCode)
- [Saloni Shivdasani](https://github.com/SaloniSS)
- [Medha Jonnada](https://github.com/medhajon)

## Links

[Store Listing](https://play.google.com/store)   
[Demo Video](https://www.youtube.com/watch?v=z_g37rVeYLQ)  
[Devpost Submission](https://devpost.com/software/recreart)  

## Submission
Submitted for Hack The Northeast2020

## Detailed Description

### Inspiration

We love art and art history. Seeing old paintings allows us a glimpse into the past and the lives of people before us. But how do we make them more relatable? How about by bringing them into the present day? RecreArt combines appreciating art with fun of taking silly photos! We hope to spread some cheer with some unique recreations.

### What it does

RecreArt provides users with different famous portraits to recreate their in their own way, with their own props or AR ones. Our machine learning program ranks the recreations’ closeness to the original based on color and texture. They can submit their own recreations to be seen and voted on by other users.

The objective of the game is to recreate the paintings. We offer some augmented reality props to enhance your picture closer to the painting of your choice and even give inspiration. Along with your picture, you’ll be able to see other user’s interpretation of the painting. Additionally, you can compare your accuracy rate with your peers and determine which picture is the best.

### How we built it

- **Frontend:** We built this app using React Native on Expo along with native-base libraries along with React. We used EchoAR which gives users 3D objects to incorporate with the image.  
- **Server:** The server was built with Node.js and Express.js, and uses MongoDB to store the paintings and user photos. This was deployed on a flexible Nodejs GCP App Engine instance.  
- **Backend:** We used the OpenCV library on a Flask library backend to create our machine learning algorithm. This was deployed on a standard Python37 GCP App Engine instance.

**Machine Learning algorithm:**
- To color match we used a histogram comparison using the greyscale images
- To texture match we used a local binary transformation to capture the texture details to compare
- We then weighted these results evenly and got it on a scale of 0-1, with 1 being the most close to the original art piece We know it would be hard to quantify creativity in an algorithm so we also allowed users to vote for posts. The winner of each challenge would be based on both factors.

### Challenges we ran into

We struggled with integrating our computer vision algorithm with the frontend as we had not worked much with Flask before. We also ran into some problems with configurations and memory leaks in the machine learning backend.

### Accomplishments that we're proud of

This was the first time we made a machine learning algorithm in a hackathon. We had to learn how to integrate it on a Python flask backend. We also learnt how advanced App Engine configurations work.

### What we learned

We learned which machine learning/computer vision statistics are good for image comparison. We also learnt how to link entries in multiple databases to each other.

### What's next for RecreArt

We would like to allow users to add friends and challenge each other to recreate paintings. We would also like to allow users to commend recreations based on accuracy, creativity, and humor. We can also expand past art! There are some funny stock photos out there as well as memes and many more categories of recreations we could add. We would like to continue working on our machine learning algorithm. We could add an AutoML integration to detect which objects are found in both the art piece and recreation and the more similar objects, the higher the similarity score. We could also add a pose detection element for recreations of people in pieces.
