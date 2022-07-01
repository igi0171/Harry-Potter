# Harry-Potter

Harry Potter Characters

## Description

The project is about characters in the Harry Potter book series and it allows users to view information about the characters.

### Technical Used

- React

### Wireframes

![This is an image](https://i.imgur.com/lkZncaj.jpg)

### User Stories

User able to:

- View characters
  ![This is an image](https://i.imgur.com/zgPJbgg.png)
- Search for a character
- Generate a random character
- Be directed to Harry Potter Wiki Search Results page of character's name upon clicking on character's image (Characters page)
- View character's modal upon clicking on character's image (Students, Staff, House page)
  ![This is an image](https://i.imgur.com/VAXKlx8.png)

## Planning and Development Process

1. 4 pages - characters, students, staff and houses. Houses page links to the 4 individual house page - Gryffindor, Hufflepuff, Ravenclaw, Slytherin - depending on which link (house) was clicked.
2. Create navigation bar to navigate to the 4 pages. Create links in the houses page to link to each of the houses.
3. Fetch data from API at Characters, Students, Staff and House component.
4. Display data and create modal to show data at Student, Staff and House component.

### Problem-Solving Strategy

- Fetched data from API at each child component (different endpoints) to solve problem of lifting data from one child component that fetched the data and propping down to other child components. (Did not want to fetch data at the App component as it can get pretty messy. Later, got an idea of how to lift data automatically from child to parent without user actions, so may try it in future iterations.)
- Problem of Overlay component in Modal component not being able to find the data that is supposed to be displayed. Turns out, data has to be propped from the Modal component to the Overlay component residing in it.
- Duplicate characters with the same name and duplicate characters with slightly different name can be solved with simple data manipulation.

### Unsolved problems

- API doesn't contain images data for all characters. May manually insert images data into the data fetched in future iterations.
- API data doesn't seem very comprehensive. May manually add character data after researching about the character in future iterations.
- Individual house page do not link to the 3 other houses. May link them in future iterations.
- May add a 'Favorites' page where user's favorite characters can be stored using local storage after all characters have their images.
- Can add a ['World Cup'](https://www.piku.co.kr/w/8Km1Q0) feature. (Think this will require intensive algorithm.)
- Can fetch spells data from another [API](https://fedeperin-harry-potter-api-en.herokuapp.com/spells).

## APIs Used

- [HP-API](https://hp-api.herokuapp.com/). Data on about 400 Harry Potter characters.

## Acknowledgments

- HP-API
- [Wizarding World](https://www.wizardingworld.com/)
- [Harry Potter Wiki](https://harrypotter.fandom.com/wiki/Main_Page)

## References

- HP-API
- Wizarding World
- Harry Potter Wiki
