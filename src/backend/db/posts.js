import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "feel the nature 🌄",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rahul",
          lastName: "Yadav",
          username: "rahulyadav@gmail.com",
          password: "rahul123",
          userHandler: "rahuly",
          profilePic: "https://i.ibb.co/DMRD10P/pic-2.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 6, 18, 26, 30),
          updatedAt: formatDate()
        },
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Yadav",
          username: "rohityadav@gmail.com",
          password: "rohit112",
          userHandler: "rohit",
          profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2022, 9, 12, 26, 30),
          updatedAt: formatDate()
        },
        {
          _id: uuid(),
          firstName: "john",
          lastName: "lobo",
          username: "johnlobo@gmail.com",
          password: "johnl0",
          userHandler: "johnny",
          profilePic: "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 8, 22, 26, 30),
          updatedAt: formatDate()
        }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "rahulyadav@gmail.com",
      text: "Great post!"
    }],
    username: "raviyadav4013@gmail.com",
    profilePic: "https://i.ibb.co/RNn86rM/pic-1.jpg",
    userHandler: "RaviYadav",
    file: "https://i.ibb.co/xJh36mm/post-1.jpg",
    createdAt: new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Must try these momos from Kalimpong Restaurant, Dharamshala",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rahul",
          lastName: "Yadav",
          username: "rahulyadav@gmail.com",
          password: "rahul123",
          userHandler: "rahuly",
          profilePic: "https://i.ibb.co/DMRD10P/pic-2.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2001, 5, 15, 26, 30),
          updatedAt: formatDate()
        }, {
          _id: uuid(),
          firstName: "Neha",
          lastName: "Hule",
          username: "nehahule@gmail.com",
          password: "neha12",
          userHandler: "neha",
          bookmarks: [],
          followers: [],
          profilePic: "https://i.ibb.co/3rCM9bj/pic-4.jpg",
          following: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
          updatedAt: formatDate()
        },
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Yadav",
          username: "rohityadav@gmail.com",
          password: "rohit112",
          userHandler: "rohit",
          profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
          updatedAt: formatDate()
        },
        {
          _id: uuid(),
          firstName: "john",
          lastName: "lobo",
          username: "johnlobo@gmail.com",
          password: "johnl0",
          userHandler: "johnny",
          profilePic: "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 25, 26, 30),
          updatedAt: formatDate()
        }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "rahulyadav@gmail.com",
      text: "Great meal!"
    }, {
      _id: uuid(),
      username: "johnlobo@gmail.com",
      text: "look great!"
    }


    ],
    username: "raviyadav4013@gmail.com",
    profilePic: "https://i.ibb.co/RNn86rM/pic-1.jpg",
    userHandler: "RaviYadav",
    file: "https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    createdAt: new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  }
  , {
    _id: uuid(),
    content:
      "Got this view after 2 hours trek",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rahul",
          lastName: "Yadav",
          username: "rahulyadav@gmail.com",
          password: "rahul123",
          userHandler: "rahuly",
          profilePic: "https://i.ibb.co/DMRD10P/pic-2.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2020, 5, 19, 26, 30),
          updatedAt: formatDate()
        },
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Yadav",
          username: "rohityadav@gmail.com",
          password: "rohit112",
          userHandler: "rohit",
          profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 5, 26, 30),
          updatedAt: formatDate()
        },
      ],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "rahulyadav@gmail.com",
      text: "Great post!"
    }],
    username: "raviyadav4013@gmail.com",
    profilePic: "https://i.ibb.co/RNn86rM/pic-1.jpg",
    userHandler: "RaviYadav",
    file: "https://static.toiimg.com/photo/msid-94791202,width-96,height-65.cms",
    createdAt: new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Playing new Car game",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rahul",
          lastName: "Yadav",
          username: "rahulyadav@gmail.com",
          password: "rahul123",
          userHandler: "rahuly",
          profilePic: "https://i.ibb.co/DMRD10P/pic-2.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate()
        }],
      dislikedBy: [],
    },
    file: "https://thumbs.gfycat.com/BelatedFatalAgama-size_restricted.gif",
    comments: [{
      _id: uuid(),
      username: "rohityadav@gmail.com",
      text: "Great post!"
    }],
    username: "kajolgupta12@gmail.com",
    profilePic: "https://i.ibb.co/J5yrW9W/pic5.webp",
    userHandler: "kaju",
    createdAt: new Date(2021, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Road and Trees",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file: "https://i.ibb.co/f8BLvxg/post-2.jpg",
    comments: [{
      _id: uuid(),
      username: "rohityadav@gmail.com",
      text: "Great post!"
    }],
    username: "narutouzamaki@gmail.com",
    profilePic: "https://i.ibb.co/RNn86rM/pic-1.jpg",
    userHandler: "naruto",
    createdAt: formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "continue ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdxN3N0ODYzbG5xeml3bTlvNnFmMWl5eXc3dWN0YndqOWJyb2s4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduYJ5WzNGsAadKU/giphy.gif",
    comments: [{
      _id: uuid(),
      username: "rohityadav@gmail.com",
      text: "Great post!"
    }],
    username: "rohityadav@gmail.com",
    profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
    userHandler: "rohit",
    createdAt: formatDate(2020, 5, 18, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Went to this gaming fair yesterday!",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Neha",
        lastName: "Hule",
        username: "nehahule@gmail.com",
        password: "neha12",
        userHandler: "neha",
        bookmarks: [],
        followers: [],
        profilePic: "https://i.ibb.co/3rCM9bj/pic-4.jpg",
        following: [],
        createdAt: formatDate(2021, 5, 18, 26, 30),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "johnlobo@gmail.com",
      text: "Great post!"
    }],
    username: "itachiuchiha@gmail.com",
    file: "https://upload.wikimedia.org/wikipedia/commons/e/ee/EGX_2014.jpg",
    profilePic: "https://i.ibb.co/QvkJT63/naruto-shippuuden-uchiha-itachi-sharingan-anime-wallpaper-preview.jpg",
    userHandler: "itachiuchiha",
    createdAt: formatDate(2020, 5, 12, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "fort ",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "john",
        lastName: "lobo",
        username: "johnlobo@gmail.com",
        password: "johnl0",
        userHandler: "johnny",
        profilePic: "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "johnlobo@gmail.com",
      text: "Great post!"
    }],
    username: "rohityadav@gmail.com",
    file: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400",
    profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
    userHandler: "rohit",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:
      "A random click",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "johnlobo@gmail.com",
      text: "Great post!"
    }],
    username: "narutouzamaki@gmail.com",
    file: "https://images.pexels.com/photos/16500107/pexels-photo-16500107/free-photo-of-sunrise-over-the-boats-in-the-harbor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic: "https://i.ibb.co/sWCGdvx/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg",
    userHandler: "naruto",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "This is a beautiful image of an amazing Nature",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "johnlobo@gmail.com",
      text: "Great post!"
    }],
    username: "nehahule@gmail.com",
    file: "https://images.pexels.com/photos/13650389/pexels-photo-13650389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    profilePic: "https://i.ibb.co/3rCM9bj/pic-4.jpg",
    userHandler: "neha",
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "random dump ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "narutouzamaki@gmail.com",
      text: "Great post!"
    }],
    username: "johnlobo@gmail.com",
    file: "https://2.bp.blogspot.com/-lWmqyny4pOU/XB_S3p271kI/AAAAAAAAZcU/k-1aAHyk5yAkF--jnHXs90xDwQ7AL1cKACLcBGAs/s1600/hidimba%2Bmata%2B2.jpg",
    profilePic: "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
    userHandler: "johnny",
    createdAt: formatDate(2020, 7, 16, 26, 30),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:
      "surrounded by peace",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Yadav",
        username: "rohityadav@gmail.com",
        password: "rohit112",
        userHandler: "rohit",
        profilePic: "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
        link: "",
        bio: "",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(2021, 5, 15, 26, 30),
        updatedAt: formatDate()
      },
      {
        _id: uuid(),
        firstName: "john",
        lastName: "lobo",
        username: "johnlobo@gmail.com",
        password: "johnl0",
        userHandler: "johnny",
        profilePic: "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "narutouzamaki@gmail.com",
      text: "Great post!"
    }],
    username: "rahulyadav@gmail.com",
    file: "https://images.pexels.com/photos/15953852/pexels-photo-15953852/free-photo-of-canoe-on-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    profilePic: "https://i.ibb.co/DMRD10P/pic-2.jpg",
    userHandler: "rahuly",
    createdAt: formatDate(2022, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },


];