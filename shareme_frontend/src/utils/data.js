export const categories = [
  {
    name: "ai",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925295278297337856/aiIcon.png",
  },
  {
    name: "animals",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925294067007520788/animals.jpg",
  },
  {
    name: "coding",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925295709144612904/codings.png",
  },
  {
    name: "food",
    image:
      "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
  },
  {
    name: "games",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925295937855819826/games.png",
  },
  {
    name: "movies",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925295044846563368/movie.jpg",
  },
  {
    name: "nature",
    image:
      "https://cdn.discordapp.com/attachments/901150871927279636/925296270422212608/nat.png",
  },
];

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              imageUrl
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                imageUrl
              },
            },
          }`;
  return query;
};
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        imageUrl
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          imageUrl
        },
      },
    } `;
export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
        image{
          asset->{
            url
          }
        },
        _id,
        title, 
        about,
        category,
        destination,
        postedBy->{
          _id,
          userName,
          imageUrl
        },
       save[]{
          postedBy->{
            _id,
            userName,
            imageUrl
          },
        },
        comments[]{
          comment,
          _key,
          postedBy->{
            _id,
            userName,
            imageUrl
          },
        }
      }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
        image{
          asset->{
            url
          }
        },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          imageUrl
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            imageUrl
          },
        },
      }`;
  return query;
};
export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      imageUrl
    },
    save[]{
      postedBy->{
        _id,
        userName,
        imageUrl
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      imageUrl
    },
    save[]{
      postedBy->{
        _id,
        userName,
        imageUrl
      },
    },
  }`;
  return query;
};
