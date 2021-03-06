Black To Green App
===================


An app for plant lovers with black thumbs. A list of plants that are hard to kill.

[CLICK HERE TO VISIT THE APP](http://blacktogreen.herokuapp.com/)

----------


Objectives
-------------

To create an app for plant lovers that have a hard time keeping plants alive. Suggests plants that are hard to kill. Users are able to leave comments on specific plants allowing them to share their personal experience and tips. Users can also save their favourite plants to they're profile page.


### Methods

| Method     | Path | Description   |
| :------- | ----: | :---: |
| GET | / |  homepage    |
| GET | /auth/login |  render a form for login information    |
| POST    | /auth/login   |    log user in and redirect to profile  |
| GET | /auth/signup |  log user in and redirect to profile    |
| POST    | /auth/login   |    log user in and redirect to profile  |
| POST | /auth/signup |  log user in and redirect to profile    |
| GET    | /auth/logout   |    redirect to home  |
| POST    | /profile   |  displays favourited plants on profile user must be logged in to see   |
| DELETE     | /profile    |  deletes favourited plant from user DB  |


### Development Approach

1. Created a DB of plants
2. Created Auth
3. Iterated through plant DB to display on page
4. Created comments for users to leave their tips on plants
5. Allow users to save their favourite plants
6. Allow users to delete plants they no longer want to favourite
7. Display weather in users' city




### If I Had More Time

1. Add a larger plant DB
2. Find a plant tip API that will display plant tips at random


### Wire Frames

![screen shot 2018-04-30 at 11 33 03 am](https://user-images.githubusercontent.com/34222706/39443850-aa3757b2-4c6a-11e8-9bc4-448e70d03092.png)
![screen shot 2018-04-30 at 11 33 49 am](https://user-images.githubusercontent.com/34222706/39443851-aa4c4af0-4c6a-11e8-80c5-5d132b669e40.png)
![screen shot 2018-04-30 at 11 34 10 am](https://user-images.githubusercontent.com/34222706/39443852-aa6105d0-4c6a-11e8-8ae7-7e58e5a4f846.png)


### Credits

1.    Water by Aybige from the Noun Project
2.  Summer by Adrien Coquet from the Noun Project
3. Sun by Akriti Bhusal from the Noun Project
4. Plant by LSE Designs from the Noun Project
5. Favorite by Chunk Icons from the Noun Project
6. Trash by Aman from the Noun Project
7. https://openweathermap.org/